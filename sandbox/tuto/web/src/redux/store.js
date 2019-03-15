import {createStore, combineReducers} from "redux"
import boxReducer from "./boxReducer"

const configureStore = () => (
    createStore(combineReducers({
        box: boxReducer
    }))
)

const store = configureStore()

export default store
