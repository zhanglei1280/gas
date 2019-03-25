import {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    TextureLoader,
    MeshBasicMaterial,
    BoxGeometry,
    Mesh
} from "three"
import texture from "./images/webgl-logo-256.jpg"

export default class Cube {

    renderer
    scene
    camera
    cube
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
            45,
            width / height,
            1,
            4000
        )
        const map = new TextureLoader().load(texture)
        const material = new MeshBasicMaterial({map})
        const geometry = new BoxGeometry(2, 2, 2)
        this.cube = new Mesh(geometry, material)

        this.cube.position.z = -8
        this.cube.rotation.x = Math.PI / 5
        this.cube.rotation.y = Math.PI / 5

        this.scene.add(this.cube)
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
        const angle = 0.1 * Math.PI * 2 * fracTime
        this.cube.rotation.y += angle
    }

    run = () => {
        requestAnimationFrame(this.run)
        this.render()
        this.animate()
    }
}
