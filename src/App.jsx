import { Provider } from "react-redux"
import ListaDeContatos from "./containers/ListaDeContatos"
import store from "./store"
import FormDeCadastro from "./containers/FormDeCadastro"

const App = () => (
  <Provider store={store}>
  <h1>Meus Contatos</h1>
    <FormDeCadastro/>
    <ListaDeContatos />
  </Provider>
)
export default App
