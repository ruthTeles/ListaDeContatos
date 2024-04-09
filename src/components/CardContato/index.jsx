/* eslint-disable react/prop-types */
import Container from "./style"

const CardContato = ({nome, email, telefone}) => {

   return(
     <Container>
         <p><span>Nome:</span> {nome}</p>
         <p><span>Email:</span> {email}</p>
         <p><span>Telefone:</span> {telefone}</p>
      </Container>
   )
}

export default CardContato