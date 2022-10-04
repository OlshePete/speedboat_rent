import { createSlice } from "@reduxjs/toolkit";
import jwt from "jwt-decode";

const initialState = {
  isAuth: false,
  token: null,
  id: null,
  userRole: null, //admin, manager, agent
  userLogin: null,
  userName: null,
  currentOrder: {
    route: "",
    date: "",
    spots: 0,
    timespot: 0,
  },
  currentCustomer: {
    phone: null,
    name: null,
    info: null,
  },
};

export const speedboatSlice = createSlice({
  name: "speedboat",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = String(action.payload);
    },
    setToken: (state, action) => {
      const payloadString = String(action.payload);
      if (payloadString.length > 0) {
        state.token = payloadString;
        const payloadDec = jwt(payloadString);
        state.userRole = payloadDec.role;
        state.userLogin = payloadDec.login;
        state.id = payloadDec.sub;
        state.isAuth = true;
      }
    },
    setCurrentOrder: (state, action) => {
      state.currentOrder = {
        ...initialState.currentOrder,
        ...action.payload,
      };
    },
    setCurrentCustomer: (state, action) => {
      state.currentCustomer = {
        ...initialState.currentCustomer,
        ...action.payload,
      };
    },
  },
});

export const { setUserName, setCurrentOrder, setCurrentCustomer,setToken } =
  speedboatSlice.actions;

export default speedboatSlice.reducer;
