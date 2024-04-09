import { createSlice } from "@reduxjs/toolkit";

export const contatosSlice = createSlice ({
  name: 'contatos',
  initialState: [],
  reducers:{
    adicionar: (state, action) => {

      const numeroExiste = state.find(
        (numero) => 
          numero.telefone === action.payload.telefone
      )
      
      if(numeroExiste){
        alert('telefone ja cadastrado')
      }else{
          const contato = {
              id: new Date().toISOString(),
              nome: action.payload.nome,
              email: action.payload.email,
              telefone: action.payload.telefone
            }
          state.push(contato)
        }

    },

    remover: (state, action) => {
      const numero = state.filter((item) => item.telefone !== action.payload)
      return numero
    },

    editar: (state, action) => {
      const indexContato = state.findIndex(
        (contato) => contato.id === action.payload.id
      )
      console.log(indexContato)

      if(indexContato >= 0){
        state[indexContato] = action.payload
      }
    }
  }
})

export const {adicionar, remover, editar} = contatosSlice.actions
export default contatosSlice.reducer