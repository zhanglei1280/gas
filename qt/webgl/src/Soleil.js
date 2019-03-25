import {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    PointLight,
    Vector3,
    AnimationObjectGroup,
    Group
} from "three"

import Etoile from "./soleil/Etoile"
import Sun from "./soleil/Sun"

import earthTexture from "./images/earth_atmos_2048.jpg"
import moonTexture from "./images/moon_1024.jpg"

// 2.3 Systeme Soleil
export default class Soleil {

    renderer
    scene
    camera
    earth
    moon
    sun
    moonGroup
    earthGroup
    sunGroup
    light
    currentTime = Date.now()

    constructor(){
        const canvas = document.querySelector(".webglcanvas")
        console.log(canvas)
        this.renderer = new WebGLRenderer({
            canvas,
            antialias: true
        })
        const {width, height} = canvas
        this.renderer.setSize(width, height)
        this.scene = new Scene()
        this.camera = new PerspectiveCamera(
            90,
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
            [0.2, 32, 32],
            [0, 0, 0]
        ).toObject()
        
        this.sun = new Sun(
            [0.5, 32, 32],
            [0, 0, 0]
        ).toObject()
        
        this.moonGroup = new Group()
        this.earthGroup = new Group()
        this.sunGroup = new Group()

        this.moonGroup.add(this.moon)
        this.moonGroup.position.set(5, 0, -8)
        this.earthGroup.add(this.earth, this.moonGroup)
        this.earthGroup.position.set(5, 0, -7)
        this.sunGroup.add(this.sun, this.earthGroup)
        this.sunGroup.position.set(0, 0, -8)

        this.scene.add(this.sunGroup)
        

        // 2.2 lumiere
        this.light = new PointLight(0xffffff, 1.5)
        this.light.position.set(-10,10,0)
        this.scene.add(this.light)
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
        this.earthGroup.rotation.y += angle / 365; // la terre tourne en 365 jours
        this.earth.rotation.y      += angle; // et en un jour sur elle-même
        this.moonGroup.rotation.y  += angle / 28; // la lune tourne en 28 jours autour de la terre
        this.moon.rotation.y       += angle /28; // et en 28 jours aussi sur elle-même pour faire face à la terre
    }

    run = () => {
        requestAnimationFrame(this.run)
        this.render()
        this.animate()
    }
}
