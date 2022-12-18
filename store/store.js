import { configureStore } from "@reduxjs/toolkit";

import userRedux from "./dux/userRedux";
import placeRedux from "./dux/placeRedux";
import articleRedux from "./dux/articleRedux";
import orderRedux from "./dux/OrderRedux";

export default store = configureStore({
    reducer : {
        user : userRedux,
        place : placeRedux,
        article : articleRedux,
        order : orderRedux,
    }
});