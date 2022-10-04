import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwt from "jwt-decode";

export const authSignIn = createAsyncThunk(
  "auth/signin",
  async (data, state) => {
    console.log(JSON.stringify(data));
    try {
      const response = await fetch(`/auth/local/signin`, {
        method: "post",
        headers: {
          accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.text();
      return res;
    } catch (error) {
      console.log(`Ошибка авторизации ${error}`);
    } 
  }
);


const initialState = {
  isAuth: false,
  token: null,
  id: null,
  loading:false,
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
  extraReducers: {
    [authSignIn.pending]: (state, action) => {
        state.loading = true
    },
    [authSignIn.fulfilled]: (state, action) => {
        const decodeJWT = jwt(action.payload)
        state.token =  action.payload
        state.userRole = decodeJWT.role;
        state.userLogin = decodeJWT.login;
        state.id = decodeJWT.sub;
        state.isAuth = true;
        state.loading = false
    }
  },

});

export const { setUserName, setCurrentOrder, setCurrentCustomer,setToken } =
  speedboatSlice.actions;

export default speedboatSlice.reducer;
