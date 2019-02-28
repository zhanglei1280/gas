import * as THREE from "three"
import mapUrl from "./images/webgl-logo-256.jpg"

var renderer = null;
var scene = null;
var camera = null;
var cube = null;
var curTime = Date.now();

// This function is called whenever the document is loaded
const init = () => {
    // Get display canvas
    const canvas = document.getElementById("webglcanvas");
    console.log(canvas);

    // Create the Three.js renderer and attach it to our canvas
    renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true
    });
    // Set the viewport size
    renderer.setSize(canvas.width, canvas.height);
    // Create a new Three.js scene
    scene = new THREE.Scene();
    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height,
        1, 4000);
    // Create a texture-mapped cube and add it to the scene
    // First, create the texture map
    //var mapUrl = "images/webgl-logo-256.jpg";
    var map = new THREE.TextureLoader().load(mapUrl);

    // Now, create a Basic material; pass in the map
    var material = new THREE.MeshBasicMaterial({
        map: map
    });

    // Create the cube geometry
    var geometry = new THREE.BoxGeometry(2, 2, 2);

    // And put the geometry and material together into a mesh
    cube = new THREE.Mesh(geometry, material);

    // Move the mesh back from the camera and tilt it toward the viewer
    cube.position.z = -8;
    cube.rotation.x = Math.PI / 5;
    cube.rotation.y = Math.PI / 5;

    // Finally, add the mesh to our scene
    scene.add(cube);
}

// This function is called regularly to update the canvas webgl.
function run() {
    // Ask to call again run 
    requestAnimationFrame(run);

    // Render the scene
    render();

    // Calls the animate function if objects or camera should move
    animate();
}

// This function is called regularly to take care of the rendering.
function render() {
    // Render the scene
    renderer.render(scene, camera);
}

// This function is called regularly to update objects.
function animate() {
    // Computes how time has changed since last display
    var now = Date.now();
    var deltaTime = now - curTime;
    curTime = now;
    var fracTime = deltaTime / 1000; // in seconds
    // Now we can move objects, camera, etc.
    // Example: rotation cube
    var angle = 0.1 * Math.PI * 2 * fracTime; // one turn per 10 second.
    cube.rotation.y += angle;
}

const script = () => {
    init()
    run()
}

export default script
