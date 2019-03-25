import {
    CubeTextureLoader,
    RGBFormat
} from "three"

import px from "./images/milkyway/dark-s_px.jpg"
import py from "./images/milkyway/dark-s_py.jpg"
import pz from "./images/milkyway/dark-s_pz.jpg"
import nx from "./images/milkyway/dark-s_nx.jpg"
import ny from "./images/milkyway/dark-s_ny.jpg"
import nz from "./images/milkyway/dark-s_nz.jpg"

const texture = [
    px, nx,
    py, ny,
    pz, nz
]

const milkyWay = new CubeTextureLoader().load(texture)
milkyWay.format = RGBFormat

export default milkyWay
