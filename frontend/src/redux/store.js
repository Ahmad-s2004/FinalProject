import { configureStore } from '@reduxjs/toolkit'

import cartData from './reduxSlice'

const store = configureStore({
    reducer:{
        allDetail : cartData
    }
})

export default store;





// import { createStore } from "redux";
// import ComRed from "./rootReducer";

// let store = createStore(ComRed)

// export default store;