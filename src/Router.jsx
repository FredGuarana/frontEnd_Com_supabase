import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import CadastroCao from './component/cadastro-cao';
import RegistrationForm from './component/registro';
import ListagemCaes from './component/listagem-caes';

const AppRouter = () => (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/registro" component={RegistrationForm} />
        <Route path="/cadastro-cao" component={CadastroCao} />
        <Route path="/listagem-caes" component={ListagemCaes} />
        <Route path='*' element={<h1>Page does not exist.</h1>} />
    </Routes>
    </BrowserRouter>
  );
    export default AppRouter;