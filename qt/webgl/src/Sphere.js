import {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    TextureLoader,
    MeshBasicMaterial,
    MeshPhongMaterial,
    ShaderMaterial,
    PointLight,
    SphereGeometry,
    Mesh
} from "three"
import texture from "./images/earth_atmos_2048.jpg"

export default class Sphere {

    renderer
    scene
    camera
    sphere
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
            45,
            width / height,
            1,
            4000
        )
        const map = new TextureLoader().load(texture)
        const material = new MeshBasicMaterial({map})
        // 2.2 phong material
        const materialPhong = new MeshPhongMaterial({
            map
        })
        // 2.1 sphere
        const geometry = new SphereGeometry(2, 32, 32)
        this.sphere = new Mesh(geometry, materialPhong)

        this.sphere.position.z = -8
        this.sphere.rotation.x = Math.PI / 5
        this.sphere.rotation.y = Math.PI / 5

        this.scene.add(this.sphere)

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
        const angle = 0.1 * Math.PI * 2 * fracTime
        this.sphere.rotation.y += angle
    }

    run = () => {
        requestAnimationFrame(this.run)
        this.render()
        this.animate()
    }
}
