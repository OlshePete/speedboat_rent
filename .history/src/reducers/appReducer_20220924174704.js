import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth:false,
  userLogin:null,
  userName:null,
  token:null,
  id:null,
  userRole:null, //admin, manager, agent 
  currentOrder:{
    route: "",
    date: "",
    spots: 0,
    timespot: 0,
  },
  currentCustomer:{
    phone: null,
    name: null,
  },
}

export const speedboatSlice = createSlice({
  name: 'speedboat',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = String(action.payload)
    },
    setCurrentOrder: (state, action) => {
      state.currentOrder = {
        ...initialState.currentOrder,
        ...action.payload
      }
    },
  },
})

export const { setUserName, setCurrentOrder } = speedboatSlice.actions

export default speedboatSlice.reducer