const boxDefaultState = null

export default (state = boxDefaultState, action) => {
    switch(action.type){
        case "SETBOX":
            return action.data
        default:
            return state
    }
}
