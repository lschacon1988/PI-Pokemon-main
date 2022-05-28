import app from "./app";
import pokemonReducers from "./pokemonReducers";
import { combineReducers } from "redux";


const reducers = combineReducers({app, pokemonReducers})

export default reducers