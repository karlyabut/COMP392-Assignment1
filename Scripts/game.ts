// MAIN GAME FILE
// Re-used code (COMP392-Lesson01-Part1) Last modified source: 18 days ago
// Author: Tom Tsiliopoulos 

//Last modified by: Karl Eisen Yabut
//COMP392 - Advanced Graphics (Assignment 1 Cube Man)
//Last commit: January 28, 2016 (completed project) / January 31, 2016 (added internal document)
//****Note there will be a lot of commented out objects, tried something fun with it****

import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Mesh = THREE.Mesh;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
//variables
var scene: Scene;
var renderer: Renderer;
var camera: PerspectiveCamera;
var cubeGeometry: CubeGeometry;
var planeGeometry: PlaneGeometry;
var sphereGeometry: SphereGeometry;
var cubeMaterial: LambertMaterial;
var planeMaterial: LambertMaterial;
var sphereMaterial: LambertMaterial;
var axes:AxisHelper;
//cube parts
var cubeHead;
var cubeBody;
var cubeLeftarm;
var cubeRightarm;
var cubeLeftleg;
var cubeRightleg;
var cubeLeftfoot;
var cubeRightfoot;

var cubeMan;
//var cubeArms;
//--------------------
var plane: Mesh;
var sphere: Mesh;
var spotLight: SpotLight;
var pointLight: PointLight;
var control: Control;
var gui: GUI;
var stats:Stats;
var step:number = 0;

var texture;


function init() {
    // Instantiate a new Scene object
	scene = new Scene();
	
	setupRenderer(); // setup the default renderer
	
	setupCamera(); // setup the camera
    //adds a fog
    scene.fog = new THREE.Fog(0xffffff, 0.015, 100);
	
    // add an axis helper to the scene
    axes = new AxisHelper(20);
    scene.add(axes);
    
    //Add a Plane to the Scene
	planeGeometry = new PlaneGeometry(60, 60);
	planeMaterial = new LambertMaterial({map: THREE.ImageUtils.loadTexture('images/notbad.png')});
	plane = new Mesh(planeGeometry, planeMaterial);
	plane.receiveShadow = true;
	
	plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 5;
	plane.position.y = 0;
    plane.position.z = 0;
	
	scene.add(plane);
	console.log("Added Plane Primitive to scene...");
    
    
   
    //Add head to the Scene
	cubeGeometry = new CubeGeometry(3, 3, 3);
	cubeMaterial = new LambertMaterial({color:0x000FF});
    //added texture
    cubeMaterial = new THREE.MeshPhongMaterial(
        {map: THREE.ImageUtils.loadTexture('images/lol.png')}); 
	cubeHead = new Mesh(cubeGeometry, cubeMaterial);
	cubeHead.castShadow = true;

    cubeHead.position.x = 0;
    cubeHead.position.y = 14;
    cubeHead.position.z = 0;

    cubeMan = new THREE.Object3D;
    //cubeArms = new THREE.Object3D;
    
	cubeMan.add(cubeHead);
	console.log("Added Cube Primitive to scene...");

     //Add a body to the Scene
	cubeGeometry = new CubeGeometry(5, 5, 2);
	cubeMaterial = new LambertMaterial({map: THREE.ImageUtils.loadTexture('images/woa.png')});
	cubeBody = new Mesh(cubeGeometry, cubeMaterial);
	cubeBody.castShadow = true;

    cubeBody.position.x = 0;
    cubeBody.position.y = 10;
    cubeBody.position.z = 0;

	cubeMan.add(cubeBody);

    //Add a right arm to the Scene
	cubeGeometry = new CubeGeometry(1, 5, 2);
	cubeMaterial = new LambertMaterial({color:0x008000});
	cubeRightarm = new Mesh(cubeGeometry, cubeMaterial);
	cubeRightarm.castShadow = true;

    cubeRightarm.position.x = -4;
    cubeRightarm.position.y = 10.75;
    cubeRightarm.position.z = 0;
    
    cubeRightarm.rotation.z = -1;

	cubeMan.add(cubeRightarm);
    //cubeArms.add(cubeRightarm);
    
    //Add a left arm to the Scene
	cubeGeometry = new CubeGeometry(1, 5, 2);
	cubeMaterial = new LambertMaterial({color:0x008000});
	cubeLeftarm = new Mesh(cubeGeometry, cubeMaterial);
	cubeLeftarm.castShadow = true;

    cubeLeftarm.position.x = 4;
    cubeLeftarm.position.y = 10.75;
    cubeLeftarm.position.z = 0;
    cubeLeftarm.rotation.z = 1;

	cubeMan.add(cubeLeftarm);
    //cubeArms.add(cubeLeftarm);
    
    //Add a left leg to the Scene
	cubeGeometry = new CubeGeometry(1, 5, 2);
	cubeMaterial = new LambertMaterial({color:0x4B0082});
	cubeLeftleg = new Mesh(cubeGeometry, cubeMaterial);
	cubeLeftleg.castShadow = true;

    cubeLeftleg.position.x = 1.5;
    cubeLeftleg.position.y = 5;
    cubeLeftleg.position.z = 0;

	cubeMan.add(cubeLeftleg);
    
    //Add a right leg to the Scene
	cubeGeometry = new CubeGeometry(1, 5, 2);
	cubeMaterial = new LambertMaterial({color:0x4B0082});
	cubeRightleg = new Mesh(cubeGeometry, cubeMaterial);
	cubeRightleg.castShadow = true;

    cubeRightleg.position.x = -1.5;
    cubeRightleg.position.y = 5;
    cubeRightleg.position.z = 0;

	cubeMan.add(cubeRightleg);
    
    //Add a left foot to the Scene
	cubeGeometry = new CubeGeometry(1, 1, 3);
	cubeMaterial = new LambertMaterial({color:0xADFF2F});
	cubeLeftfoot = new Mesh(cubeGeometry, cubeMaterial);
	cubeLeftfoot.castShadow = true;

    cubeLeftfoot.position.x = 1.5;
    cubeLeftfoot.position.y = 2;
    cubeLeftfoot.position.z = 0.5;

	cubeMan.add(cubeLeftfoot);
    
    //Add a right foot to the Scene
	cubeGeometry = new CubeGeometry(1, 1, 3);
	cubeMaterial = new LambertMaterial({color:0xADFF2F});
	cubeRightfoot = new Mesh(cubeGeometry, cubeMaterial);
	cubeRightfoot.castShadow = true;

    cubeRightfoot.position.x = -1.5;
    cubeRightfoot.position.y = 2;
    cubeRightfoot.position.z = 0.5;
    
    cubeMan.add(cubeRightfoot);
    

        
    //scene.add(cubeArms);
	scene.add(cubeMan);
    
	// Add a SpotLight to the scene
	spotLight = new SpotLight(0xffffff);
	spotLight.position.set (-40, 60, -10);
	spotLight.castShadow = true;
	scene.add(spotLight);
	console.log("Added Spot Light to Scene");
	
    // add controls
	gui = new GUI();
	control = new Control(0, 0, 0);
	addControl(control);
    
    // Add framerate stats
    addStatsObject();
    
	document.body.appendChild(renderer.domElement);
	gameLoop(); // render the scene	
    
    window.addEventListener('resize', onResize, false);
}

function onResize():void {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


function addControl(controlObject: Control):void {
    gui.add(controlObject, 'rotationX', 0, 0.5)
	gui.add(controlObject, 'rotationY', 0, 0.5);
	gui.add(controlObject, 'rotationZ', 0, 0.5);
    gui.add(controlObject,'randomColor');
    //gui.add(controlObject, 'resetScene');
    //gui.add(controlObject, 'rotationXArms', 0.5, 1);
    //gui.add(controlObject, 'rotationZArms', 0.5, 1);
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
function gameLoop():void {
	stats.update();
    
    scene.traverse(function(obj:THREE.Object3D){
        if(obj == cubeMan){
            
            //animate cube
            cubeMan.rotation.x += control.rotationX;
            cubeMan.rotation.y += control.rotationY;
            cubeMan.rotation.z += control.rotationZ;
            
            
        }
        
        /*if(obj == cubeArms){
            cubeArms.rotation.z += control.rotationZArms;
            cubeArms.rotation.x += control.rotationXArms;
        }*/
        
    });
	
    
    
	// render using requestAnimationFrame
	requestAnimationFrame(gameLoop);
	
    // render the scene
	renderer.render(scene, camera);
}

// Setup default renderer
function setupRenderer():void {
	renderer = new Renderer();
	renderer.setClearColor(0xEEEEEE, 1.0);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMapEnabled = true;
	console.log("Finished setting up Renderer...");
}

// Setup main camera for the scene
function setupCamera():void {
	camera = new PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
	camera.position.x =-30;
	camera.position.y = 40;
	camera.position.z = 30;
	camera.lookAt(scene.position);
	console.log("Finished setting up Camera...");
}
