import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import CadastroCao from './component/cadastrocao';
import RegistrationForm from './component/registro';
import ListagemCaes from './component/listagem-caes';

const AppRouter = () => (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} index />
       
        <Route path="cadastrocao" element={<CadastroCao />}   />
        <Route path="registration" element={<RegistrationForm />}  />
        <Route path="listagemcaes" element={<ListagemCaes />}  />
              
        <Route path='*' element={<h1>Página não existe.</h1>} />
    </Routes>
    </BrowserRouter>
  );
    export default AppRouter;