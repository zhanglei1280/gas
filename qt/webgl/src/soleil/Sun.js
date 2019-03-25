import {
    MeshBasicMaterial,
    SphereGeometry,
    Mesh,
    TextureLoader
} from "three"

import sunTexture from "../images/sun_2048.jpg"

export default class Etoile{
    sphere
    constructor(geometry, position){
        const map = new TextureLoader().load(sunTexture)
        const material = new MeshBasicMaterial({
            map
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