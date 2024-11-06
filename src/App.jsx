 
 
import Dashboard from './page/Dashboard/Dashboard';
import LoginPage from './page/LoginPage/LoginPage';

function App() {
  const token =localStorage.getItem('token');
  const user =localStorage.getItem('user')

 
 if(token && user ){
  return <Dashboard></Dashboard>
 }
  return <LoginPage></LoginPage>
     
}

export default App
