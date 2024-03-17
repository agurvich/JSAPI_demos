import { useEffect, useState } from 'react';

import Map from "@arcgis/core/Map";
import Mesh from "@arcgis/core/geometry/Mesh";
import SceneView from "@arcgis/core/views/SceneView";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import TileLayer from "@arcgis/core/layers/TileLayer";


import addLandData from '../utils/add-land-data';
import { useGameState } from '../contexts/game-state';

function LowPolyGlobe({}){

    const [meshLayer,setMeshLayer] = useState();
    const [vehicleMarker,setVehicleMarker] = useState();
    const [landmarks,setLandmarks] = useState({});
    const [landmarksLayerView,setLandmarksLayerView] = useState();

    const { vehicleLocation, currentVehicle, setNumVisited, setGameOver, setStartTime } = useGameState();

    useEffect(() => {
        const R = 6378137;

        // initialize a layer to contain the background globe
        const meshOceanLayer = new GraphicsLayer({
            opacity: 0.6
        });

        // initialize a layer to contain the low poly land 
        const meshLandLayer = new GraphicsLayer({
            elevationInfo: {
            mode: "absolute-height",
            offset: 0
            }
        });

        // center point 
        const location = new Point({
            x: 0, y: 90, z: -(R)
        });

        // create an ocean using Raluca's blender sphere
        Mesh.createFromGLTF(
            location,
            "/assets/low_poly_sphere.glb"
            )
        .then( mesh => {
            mesh.scale(R * 1.02);
            const globe = new Graphic({
                geometry: mesh,
                symbol: {
                    type: "mesh-3d",
                    symbolLayers: [{
                    type: "fill",
                    material: {
                        color: [31, 255, 240]
                    }
                    }]
                }
            });

            meshOceanLayer.add(globe);
        });

        const landmarksLayer = new SceneLayer({
            url: "https://services9.arcgis.com/FF3qnCUixr5w9JQi/arcgis/rest/services/lowPolyLandmarks/SceneServer"
        });

        const shore = new TileLayer({
            url: "https://tiles.arcgis.com/tiles/FF3qnCUixr5w9JQi/arcgis/rest/services/Ocean_shore_buffer/MapServer"
        })

        const map = new Map({
            layers: [meshOceanLayer, meshLandLayer, landmarksLayer, shore],
            ground: {
            opacity: 1,
            surfaceColor: [33, 69, 128]
            },
        });

        const view = new SceneView({
            container: "viewDiv",
            map: map,
            alphaCompositingEnabled: true,
            qualityProfile: "high",
            environment: {
                background: {
                    type: "color",
                    color: [0, 0, 0, 0]
                },
                lighting: {
                    directShadowsEnabled: true,
                    type: "virtual"
                },
                starsEnabled: false,
                atmosphereEnabled: false
            },
        });

        window.view = view;
        addLandData(meshLandLayer);

        // store the meshLandLayer so it can be used to update the position of the vehicle
        setMeshLayer(meshLandLayer);

        // query the landmarksLayer to create a store
        //  to keep track of which landmarks we've visited
        //  NOTE: this is not *strictly* necessary, 
        //  could keep an empty "visited" log and then fill it with whatever
        //  matches the filter in checkLandmarks. We'd never know if you were done
        //  early though!
        getLandmarks(landmarksLayer).then(setLandmarks);

        // add the initial position
        addRedDot({meshLandLayer, vehicleLocation, currentVehicle });

        // bind the landmarks layer view
        view.whenLayerView(landmarksLayer).then(setLandmarksLayerView).then(()=>{setStartTime(new Date())})
                
        console.log('initializing')
    }, []);

    // draw the vehicle
    useEffect(()=>{

        /*
            TODO: this results in a momentary flash, surely we shouldn't
            have to add+remove just to translate the dot...
        */
        if (meshLayer && vehicleMarker) meshLayer.remove(vehicleMarker);

        setVehicleMarker(addRedDot({ meshLayer, vehicleLocation, currentVehicle}));

    },[vehicleLocation,currentVehicle]);

    // check if the vehicle is close to a landmark
    useEffect(()=>{
        if (landmarksLayerView && vehicleLocation) {
            checkLandmarks({vehicleLocation,landmarksLayerView,setLandmarks});
        }
    },[vehicleLocation,landmarksLayerView]);

    // update the score
    useEffect(()=>{
        // Count the number of visited landmarks
        const count = Object.values(landmarks).reduce(
            (count, landmark) => landmark.visited ? count + 1 : count,
        0);

        // update the state variable
        setNumVisited(count);

        // if we've visited all the landmarks the game should end
        if ( count > 0 && count === Object.values(landmarks).length ) setGameOver(true);

    },[landmarks]);

    return (
        <div id="viewDiv" style={{ height: '100vh', width: '100vw' }}></div>
    );
};

export default LowPolyGlobe;

function addRedDot({ meshLayer, vehicleLocation, currentVehicle }){
    const point = new Point({
        x: vehicleLocation.x,
        y: vehicleLocation.y,
        z: vehicleLocation.z,
        spatialReference: SpatialReference.WebMercator
    });
    
    const markerSymbol = {
        type: "simple-marker", 
        color: currentVehicle.color,
        size: "24px"
    };
    
    const textSymbol = {
        type: "text",  
        color: "black",
        text: currentVehicle.name,
        font: { size: 12, family: "Arial" },
        xoffset: 20,  // Horizontal offset in pixels
        yoffset: 10   // Vertical offset in pixels
    };
    
    const compositeSymbol = {
        type: "point-3d",
        symbolLayers: [
            { type: "icon", resource: { primitive: "circle" }, material: { color: markerSymbol.color }, size: markerSymbol.size },
            { type: "text", text: textSymbol.text, material: { color: textSymbol.color }, size: textSymbol.font.size }
        ]
    };
    
    const graphic = new Graphic({
        geometry: point,
        symbol: compositeSymbol 
    });

    // Add the red dot to an appropriate graphics layer
    if (meshLayer) meshLayer.add(graphic);

    return graphic;

}

function checkLandmarks({
    vehicleLocation,
    landmarksLayerView,
    setLandmarks,
    distance=100000
}){

    // Now that the layerView is ready, you can perform queries
    const query = {
        geometry: {
            type:"point",
            x:vehicleLocation.x,
            y:vehicleLocation.y,
            z:vehicleLocation.z
        },
        distance,
        units: "meters",
        spatialRelationship: "intersects",
        returnGeometry: false,
        outFields: ["OBJECTID"] // Adjust as needed
    };

    landmarksLayerView.queryFeatures(query).then((results) => {
        if (results.features.length > 0) setLandmarks( prevLandmarks =>{

            const newLandmarks = {...prevLandmarks}

            results.features.forEach( feature => {
                newLandmarks[feature.attributes.OBJECTID].visited = true;
            });

            return newLandmarks;
        });
    });
}

async function getLandmarks(landmarksLayer){
    let query = landmarksLayer.createQuery();
    query.where = "1=1";  // Fetches all features
    query.returnGeometry = true;  // Ensures geometries are returned

    return landmarksLayer.queryFeatures(query)
    .then(function(results) {
        const landmarks = {}
        // Process each feature's geometry
        results.features.forEach(function(feature) {
            landmarks[feature.attributes.OBJECTID] = {
                visited:false,
                name:feature.attributes.Name,
                x:feature.geometry.origin.x, // Log or process the geometry
                y:feature.geometry.origin.y, // Log or process the geometry
                z:feature.geometry.origin.z  // Log or process the geometry
            }
        });
        return landmarks;
    })
    .catch(function(error) {
        console.error("Query error: ", error);
    });
}