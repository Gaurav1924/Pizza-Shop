import { configureStore } from "@reduxjs/toolkit"; 
import orderSlice from "./orderSlice";        
const store = configureStore({
  reducer: {
    order : orderSlice
  },
});
export default store;
