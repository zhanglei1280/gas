import {
    TextureLoader,
    MeshPhongMaterial,
    SphereGeometry,
    Mesh
} from "three"

export default class Etoile{
    sphere
    constructor(texture, geometry, position){
        const map = new TextureLoader().load(texture)
        // 2.2 phong material
        const materialPhong = new MeshPhongMaterial({
            map
        })
        // 2.1 sphere
        const geo = new SphereGeometry(...geometry)
        this.sphere = new Mesh(geo, materialPhong)

        this.sphere.position.set(...position)
        this.sphere.rotation.x = Math.PI / 5
        this.sphere.rotation.y = Math.PI / 5
    }

    toObject = () => this.sphere
}