import {
    TextureLoader,
    MeshBasicMaterial,
    SphereGeometry,
    Mesh
} from "three"

export default class Etoile{
    sphere
    constructor(geometry, position){
        const material = new MeshBasicMaterial({
            color: 0xffff00
        })
        // 2.1 sphere
        const geo = new SphereGeometry(...geometry)
        this.sphere = new Mesh(geo, material)

        this.sphere.position.set(...position)
        this.sphere.rotation.x = Math.PI / 5
        this.sphere.rotation.y = Math.PI / 5
    }

    toObject = () => this.sphere
}