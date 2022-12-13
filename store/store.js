import { configureStore } from "@reduxjs/toolkit";

import userRedux from "./dux/userRedux";

export default store = configureStore({
    reducer : {
        user : userRedux,
    }
});