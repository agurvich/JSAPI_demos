// Assuming this snippet is added within the require callback function where other components are set up

function addRedDot({Graphic,Point,SpatialReference,meshLandLayer,x=0,y=0}){
    // Create the red dot graphic
    var redDot = new Graphic({
        geometry: new Point({
            x,
            y,
            z:250000 + 100000,
            spatialReference:SpatialReference.WebMercator
        }),
        symbol: {
            type: "simple-marker",
            color: [255, 0, 0, 0.8], // RGBA red color
            size: "24px"
        }
    });

    // Add the red dot to an appropriate graphics layer
    meshLandLayer.add(redDot);

    return redDot;

}

// Function to update red dot's position
function updateRedDotPosition({meshLandLayer,redDot,direction,...classes}) {
    var moveSize = 100000; // Degree to move the red dot by

    switch(direction) {
        case 'W': stateVariables.y += moveSize; break;
        case 'S': stateVariables.y -= moveSize; break;
        case 'Q': stateVariables.x -= moveSize; break;
        case 'E': stateVariables.x += moveSize; break;
    }

    /*
        TODO: this results in a momentary flash, surely we shouldn't
        have to add+remove just to translate the dot...
    */

    const oldDot = stateVariables.redDot;
    stateVariables.redDot = addRedDot({
        meshLandLayer,
        redDot,
        x:stateVariables.x,
        y:stateVariables.y,
        ...classes});
    meshLandLayer.remove(oldDot);

    // check if we are visiting a landmark
    if (stateVariables.filled) checkLandmarks();
}

function setupControls({...params}){
    // Listen for keydown events to move the red dot
    window.addEventListener('keydown', function(event) {
        var key = event.key.toUpperCase();
        if(['W', 'Q', 'S', 'E'].includes(key)) {
            updateRedDotPosition({...params,direction:key});
        }
    });

}

function getLandmarks(){
    let query = stateVariables.landmarksLayer.createQuery();
    query.where = "1=1";  // Fetches all features
    query.returnGeometry = true;  // Ensures geometries are returned

    stateVariables.landmarksLayer.queryFeatures(query)
    .then(function(results) {
        // Process each feature's geometry
        results.features.forEach(function(feature) {
            stateVariables.landmarks[feature.attributes.OBJECTID] = {
                visited:false,
                name:feature.attributes.Name,
                x:feature.geometry.origin.x, // Log or process the geometry
                y:feature.geometry.origin.y, // Log or process the geometry
                z:feature.geometry.origin.z  // Log or process the geometry
            }
        });

        stateVariables.filled = true;
    })
    .catch(function(error) {
        console.error("Query error: ", error);
    });
}

function checkLandmarks(distance=200000){
    // Now that the layerView is ready, you can perform queries
    const query = {
        geometry: {
            type:"point",
            x:stateVariables.x,
            y:stateVariables.y,
            z:stateVariables.z
        },
        distance: 100000,
        units: "meters",
        spatialRelationship: "intersects",
        returnGeometry: false,
        outFields: ["*"] // Adjust as needed
    };

    stateVariables.landmarksLayerView.queryFeatures(query).then((results) => {
        if (results.features.length > 0){
            const thisLandmark = stateVariables.landmarks[results.features[0].attributes.OBJECTID];
            thisLandmark.visited = true;
            updateCounterDiv();
        }
    });


}

function updateCounterDiv(){
    const id = "counterDiv";
    // Count the number of visited landmarks
    const visitedCount = Object.values(stateVariables.landmarks).reduce((count, landmark) => {
        return landmark.visited ? count + 1 : count;
    }, 0);

    // Find the counterDiv element and update its content
    const counterElement = document.getElementById(id);
    if (counterElement) {
        counterElement.innerHTML = `${visitedCount}`;
    } else {
        console.error('CounterDiv element not found');
    }
}