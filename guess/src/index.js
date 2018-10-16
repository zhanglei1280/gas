import "babel-polyfill"
import "bulma/bulma.sass"
import "./style.scss"

import React from 'react';
import {render} from "react-dom"
import Cache from "./App"

const wordlist = [
    ["失重", "Impesanteur"],
    ["企鹅", "Manchot"],
    ["跳水", "Plongeon"],
    ["镜子", "Miroir"],
    ["攀岩", "Escalade"],
    ["芭蕾舞", "Ballet"],
    ["灭火器", "Extincteur"],
    ["牙刷", "Brosse à dents"],
    ["隐形眼镜", "Lentilles de contact"],
    ["方便面", "Nouilles instantanées"],
    ["牙痛", "Mal aux dents"],
    ["埃菲尔铁塔", "Tour Eiffel"],
    ["吉他", "Guitare"],
    ["接力赛跑", "Course de relais"],
    ["雨伞", "Parapluie"],
    ["钥匙", "Clé"],
    ["唱歌", "Chanter"],
    ["洗发水", "Shampooing"],
    ["枕头", "Oreiller"],
    ["篮球", "Basketball"],
    ["足球", "Football"]
]

render(<Cache wordlist={wordlist} />, document.getElementById("app"))
