/// <reference path="_reference.ts"/>
// MAIN GAME FILE
// Re-used code (COMP392-Lesson01-Part1) Last modified source: 18 days ago
// Author: Tom Tsiliopoulos 
//Last modified by: Karl Eisen Yabut
//COMP392 - Advanced Graphics (Assignment 1 Cube Man)
//Last commit: January 28, 2016 (completed project) / January 31, 2016 (added internal document)
//****Note there will be a lot of commented out objects, tried something fun with it****
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Mesh = THREE.Mesh;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
//Custom Game Objects
var gameObject = objects.gameObject;
var scene;
var renderer;
var camera;
var axes;
var cube;
var plane;
var sphere;
var ambientLight;
var spotLight;
var control;
var gui;
var stats;
var step = 0;
var sun;
var planets;
var moons;
var ringMesh;
var zoom;
//materials
function init() {
    // Instantiate a new Scene object
    scene = new Scene();
    setupRenderer(); // setup the default renderer
    setupCamera(); // setup the camera
    //adds a fog
    //scene.fog = new THREE.Fog(0xffffff, 0.015, 100);
    // add an axis helper to the scene
    axes = new AxisHelper(20);
    scene.add(axes);
    //adding an ambientlight
    ambientLight = new AmbientLight(0x0c0c0c);
    scene.add(ambientLight);
    // add controls
    gui = new GUI();
    control = new Control(0.01, 0.01, 0.01, 60, 40);
    addControl(control);
    console.log("Added Control to scene...");
    // Add framerate stats
    addStatsObject();
    sun = new gameObject(new THREE.SphereGeometry(6, 32, 32), 0, 0, 0);
    scene.add(sun);
    console.log("added sun");
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(-15, 10, 15);
    // spotLight.target.position.set(25, 0, -25);
    // console.log(spotLight.target.position);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    // // Add a SpotLight to the scene
    // spotLight = new SpotLight(0xffffff);
    // spotLight.position.set (-40, 60, -10);
    // spotLight.castShadow = true;
    // scene.add(spotLight);
    // console.log("Added Spot Light to Scene");
    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    window.addEventListener('resize', onResize, false);
}
function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
function addControl(controlObject) {
    gui.add(controlObject, "zoomPlanet1");
    gui.add(controlObject, "zoomPlanet2");
    gui.add(controlObject, "zoomPlanet3");
    gui.add(controlObject, "zoomPlanet4");
    gui.add(controlObject, "zoomPlanet5");
    gui.add(controlObject, "zoomOut");
}
function addStatsObject() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}
// Setup main game loop
function gameLoop() {
    stats.update();
    // scene.traverse(function(obj:THREE.Object3D){
    //     if(obj == cubeMan){
    //         //animate cube
    //         cubeMan.rotation.x += control.rotationX;
    //         cubeMan.rotation.y += control.rotationY;
    //         cubeMan.rotation.z += control.rotationZ;
    //     }
    /*if(obj == cubeArms){
        cubeArms.rotation.z += control.rotationZArms;
        cubeArms.rotation.x += control.rotationXArms;
    }*/
    //});
    sun.rotation.y = 0.1;
    sun.rotation.x = 0.1;
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
    // render the scene
    renderer.render(scene, camera);
}
// Setup default renderer
function setupRenderer() {
    renderer = new Renderer();
    renderer.setClearColor(0xEEEEEE, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    console.log("Finished setting up Renderer...");
}
// Setup main camera for the scene
function setupCamera() {
    camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);
    console.log("Finished setting up Camera...");
}
//# sourceMappingURL=game.js.map