import {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    PointLight,
    Group,
    Vector3
} from "three"

import OrbitControls from "./js/OrbitControls"

import Etoile from "./soleil/Etoile"
import Sun from "./soleil/Sun"

import earthTexture from "./images/earth_atmos_2048.jpg"
import moonTexture from "./images/moon_1024.jpg"

// 2.3 Systeme Soleil
export default class Soleil {

    renderer
    scene
    camera
    cameraAngle = 0
    earth
    moon
    sun
    moonGroup
    earthGroup
    sunGroup
    light
    controls
    currentTime = Date.now()

    constructor() {
        const canvas = document.querySelector(".webglcanvas")
        console.log(canvas)
        this.renderer = new WebGLRenderer({
            canvas,
            antialias: true
        })
        const {
            width,
            height
        } = canvas
        this.renderer.setSize(width, height)
        this.scene = new Scene()
        this.camera = new PerspectiveCamera(
            45,
            width / height,
            1,
            4000
        )
        this.earth = new Etoile(
            earthTexture,
            [0.5, 32, 32],
            [0, 0, 0]
        ).toObject()

        this.moon = new Etoile(
            moonTexture,
            [0.2, 32, 32], // geometry
            [0, 0, 0] // position
        ).toObject()

        this.sun = new Sun(
            [1, 32, 32],
            [0, 0, 0]
        ).toObject()

        this.moonGroup = new Group()
        this.earthGroup = new Group()
        this.sunGroup = new Group()

        this.moonGroup.add(this.moon)
        this.moonGroup.position.set(1, 0, 0)
        this.earthGroup.add(this.earth, this.moonGroup)
        this.earthGroup.position.set(-3, 0, -0)
        this.sunGroup.add(this.sun, this.earthGroup)
        this.sunGroup.position.set(0, 0, -12)

        this.scene.add(this.sunGroup)


        // 2.2 lumiere
        this.light = new PointLight(0xffffff, 1.5)
        this.light.position.set(0, 0, 0)
        this.scene.add(this.light)

        // 2.5 orbit controls
        this.controls = new OrbitControls(
            this.camera,
            this.renderer.domElement
        )
        //this.controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
        this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        this.controls.dampingFactor = 0.25;
        this.controls.screenSpacePanning = false;
        this.controls.minDistance = 1;
        this.controls.maxDistance = 20;
    }

    render = () => {
        this.renderer.render(
            this.scene,
            this.camera
        )
    }

    animate = () => {
        const now = Date.now()
        const deltaTime = now - this.currentTime
        this.currentTime = now
        const fracTime = deltaTime / 1000
        const angle = fracTime * Math.PI * 2;
        // Notez que l'axe y est l'axe "vertical" usuellement.
        this.sunGroup.rotation.y += angle / 365
        this.earthGroup.rotation.y += angle / 28; // la terre tourne en 365 jours
        this.earth.rotation.y += angle; // et en un jour sur elle-même
        this.moonGroup.rotation.y += angle / 28; // la lune tourne en 28 jours autour de la terre
        //this.moon.rotation.y += angle / 28; // et en 28 jours aussi sur elle-même pour faire face à la terre

        //get hype
        //this.camera.lookAt(this.earth.matrixWorld.getPosition())
        // this.camera.position.x = 5 * Math.cos( this.earth.rotation.x );
        // this.camera.position.y = 3 * Math.sin( this.earth.rotation.y );

        this.cameraAngle += (angle)/365

        this.camera.lookAt(new Vector3().setFromMatrixPosition(this.earth.matrixWorld));
        // this.camera.position.x = 5 * Math.cos( this.cameraAngle );
        // this.camera.position.y = 3 * Math.sin( this.cameraAngle );
        // this.camera.position.z = 5 * Math.sin( this.cameraAngle ) -5
        this.camera.position.z = 1


        this.controls.update();
    }

    run = () => {
        requestAnimationFrame(this.run)
        this.render()
        this.animate()
    }
}