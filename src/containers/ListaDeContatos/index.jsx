import { useSelector } from "react-redux";
import Container from "./style";
import EstiloGlobal from "../../styles/globalStyle";
import Contato from "../Contato";

const ListaDeContatos = () => {
  const contatos = useSelector((state) => state.contatos)

  return(
    <>
      <EstiloGlobal />
      <Container>
      <ul>
        {contatos.map(item => (
          <Contato key={item.id} contato={item} />
        ))}
      </ul>
      </Container>
    </>
  )
}

export default ListaDeContatos
