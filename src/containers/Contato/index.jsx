/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useState } from "react";
import { remover, editar as edit } from "../../store/reducers/salvarContato";
import Button from "../../components/Button/style";
import Input from "../../components/Input";
import CardContato from "../../components/CardContato"
import Container from "./style";

const Contato = ({ contato }) => {
  const [editar, setEditar] = useState(false)
  const [nome, setNome] = useState(contato.nome)
  const [email, setEmail] = useState(contato.email)
  const [telefone, setTelefone] = useState(contato.telefone)

  const [nomeInicial, setNomeInicial] = useState(contato.nome)
  const [emailInicial, setEmailInicial] = useState(contato.email)
  const [telefoneInicial, setTelefoneInicial] = useState(contato.telefone)

  const dispatch = useDispatch()
  
  const handleEditar = () => {
    setEditar(true);
    setNomeInicial(nome);
    setEmailInicial(email);
    setTelefoneInicial(telefone);
  }


  const handleContactInitial = () => {
    setEditar(false)
    setNome(nomeInicial)
    setEmail(emailInicial)
    setTelefone(telefoneInicial)
  }

  return (
    <Container>
      <li key={contato.id}>
      { editar ? (
        <>

        <div className="containerInputs">
          <Input 
              type={"text"} 
              value={nome} 
              onChange={e => setNome(e.target.value)}
            />
            <Input 
              type={"email"} 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input 
              type={"number"} 
              value={telefone}
              onChange={e => setTelefone(e.target.value)}
            />
        </div>

          <span className="containerBotoes">
            <Button onClick={() => {
              dispatch(edit({
                id: contato.id,
                nome,
                email,
                telefone
              }))
              setNomeInicial('')
              setEmail("")
              setTelefone("")
              setEditar(false)
            }}> 
              salvar 
            </Button>

            <Button onClick={() => handleContactInitial()}> cancelar </Button>
          </span>
          
        </>
      ) : (
        <>  
          <CardContato 
            nome={nome} 
            email={email} 
            telefone={telefone}
          />

          <span className="containerBotoes">
              <Button onClick={() => handleEditar()}> editar </Button>
              <Button onClick={() => dispatch(remover(contato.telefone))}> apagar </Button>
          </span>
              
        </>
      )}
    </li>
    </Container>
    
  )
}

export default Contato
