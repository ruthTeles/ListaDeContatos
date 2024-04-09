import { configureStore } from "@reduxjs/toolkit";
import contatosReducer from "./reducers/salvarContato";

const store = configureStore({
  reducer:{
      contatos: contatosReducer
  }
})

export default store