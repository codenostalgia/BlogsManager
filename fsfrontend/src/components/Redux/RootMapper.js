import {combineReducers} from 'redux'
import mapper from "../Redux/mapper";

const RootMapper = combineReducers({status: mapper})

export default RootMapper