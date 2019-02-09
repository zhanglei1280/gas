class Coordinate{
    constructor(x, y){
        this.x = x.toFixed(2)
        this.y = y.toFixed(2)
    }

    distance = p => {
        const rayon = 6378.137
        const delta = p.y - this.y
        const angle = Math.acos(
            Math.sin(this.x) * Math.sin(p.x) +
            Math.cos(this.y) * Math.cos(p.y) * Math.cos(delta)
        )
        return angle * Math.PI / 180 * rayon
    }
}

export default Coordinate
