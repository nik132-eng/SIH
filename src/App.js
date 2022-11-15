import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import Main from './components/Main';
import Dashboard from './components/Dashboard';
import History from './components/History'


//import styled from 'styled-components';
//import Head from './components/Head';
//import ReactBootstrap from 'react-bootstrap';
// import SignUp from './components/SignUp';
//import LinkingBar from './components/LinkingBar';
function App() {

  
  return (
    <Router>
    
    
         <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>  
          {/* <Route exact path="/dashboard"> */}
            <Dashboard />
            
          {/* </Route> */}
          <Route exact path="/main/:worker_name">
            <Main />
            
          </Route>
          <Route exact path="/history">
            <History />
            
          </Route>
         
        </Switch>
     
     
     </Router>
    
        
    

  );
}



export default App;
