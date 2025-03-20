import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
const App = () => {
return (
<BrowserRouter>
<Routes>
<Route path="/homepage" element={<HomePage/>}></Route>
<Route path="/" element={<LoginPage/>}></Route>
<Route path="/register" element={<RegisterPage/>}></Route>
</Routes>
</BrowserRouter>
);
};
export default App;