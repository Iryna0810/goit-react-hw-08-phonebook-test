import { combineReducers } from "@reduxjs/toolkit";
import { loadContactsReduser } from './contactsLoadSlice'
import { filterReducer } from "./filterSlice";
import { persistReducer } from "redux-persist";

import { authReducer } from "./auth/auth-slice";



export const reducer = combineReducers({
    filter: filterReducer,
    contacts: loadContactsReduser,
    auth: authReducer,
})