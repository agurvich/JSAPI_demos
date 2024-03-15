import { useEffect } from 'react';

import Map from "@arcgis/core/Map";
import Mesh from "@arcgis/core/geometry/Mesh";
import SceneView from "@arcgis/core/views/SceneView";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import TileLayer from "@arcgis/core/layers/TileLayer";

import addLandData from '../utils/add-land-data';

function LowPolyGlobe({}){

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

        /*
        const classes = {Graphic,Point,SpatialReference};
        stateVariables.redDot = addRedDot({meshLandLayer,...classes});
        stateVariables.x = stateVariables.redDot.geometry.x;
        stateVariables.y = stateVariables.redDot.geometry.y;
        stateVariables.landmarksLayer = landmarksLayer;
        stateVariables.landmarks = { filled:false };
        getLandmarks();
        setupControls({meshLandLayer,...classes});

        // bind the landmarks layer view
        view.whenLayerView(landmarksLayer)
        .then((landmarksLayerView) => {
            stateVariables.landmarksLayerView = landmarksLayerView;
        });
        */
                
        console.log('initializing')
    }, []);

    return (
        <div id="viewDiv" style={{ height: '100vh', width: '100vw' }}></div>
    );
};

export default LowPolyGlobe;
