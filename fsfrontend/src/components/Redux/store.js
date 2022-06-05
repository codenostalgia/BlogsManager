import {createStore} from 'redux'
import RootMapper from '../Redux/RootMapper'

const store = createStore(RootMapper,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store