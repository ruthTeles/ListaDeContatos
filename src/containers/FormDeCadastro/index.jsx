import { useState } from "react";
import Botao from "../../components/Button";
import Form from "./style";
import { useDispatch } from "react-redux";
import { adicionar } from "../../store/reducers/salvarContato";
import Input from "../../components/Input";

const FormDeCadastro = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const dispatch = useDispatch()

  const addContact = (event) => {
    event.preventDefault()

    if(nome && email && telefone) {
      dispatch(
        adicionar({
          nome: nome,
          email: email,
          telefone: telefone
        }))
    }
  }

  return(
    <>
      <Form onSubmit={addContact}>
        <div>
          <Input 
            type={"text"} 
            placeholder={"Digite seu nome"}
            onChange={e => setNome(e.target.value)}
          />

          <Input 
            type={"email"}
            placeholder={"Digite seu email"}
            onChange={e => setEmail(e.target.value)}
          />

          <Input
            type={"number"} 
            placeholder={"Digite seu telefone"}
            onChange={e => setTelefone(e.target.value)}
          />
        </div>

          <Botao text={"cadastrar"} />
      </Form>
    </>
  )
}

export default FormDeCadastro