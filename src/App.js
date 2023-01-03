import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
 Switch,
  Route
} from "react-router-dom";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Products from './Pages/Product/Products/Products';
import Product from './Pages/Product/Products/Products';

import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Order from './Pages/Home/Order/Order';
import PrivateRoute from './Pages/Home/Share/Navigation/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Myorders from './Pages/Home/MyOrder/Myorders/Myorders';
import Dashboard from './Pages/Home/Dashboard/Dashboard/Dashboard';
import NotFound from './Pages/Home/NotFound/NotFound';
import Complain from './Pages/Home/Complain/Complain';



function App() {
  return (
    <div className="App">
      
<AuthProvider>

<BrowserRouter>
        
    <Switch>
      <Route exact path="/">
       <Home></Home>
      </Route>
      <Route exact path="/home">
       <Home></Home>
      </Route>
      <Route exact path="/login">
       <Login></Login>
      </Route>
      <Route exact path="/register">
       <Register></Register>
      </Route>

     
      <PrivateRoute path="/orders/:id">
      <Order></Order>
      </PrivateRoute>
      <Route  path="/myorders">
          <Myorders></Myorders>
      </Route>
      <PrivateRoute  path="/dashboard">
        <Dashboard></Dashboard>
      </PrivateRoute>
     
      <Route  path="/products">
        <Products></Products>
      </Route>
      
     
      <Route  path="/complain">
        <Complain></Complain>
      </Route>
      
     
      <Route  path="*">
       <NotFound></NotFound>
      </Route>
      

    </Switch>
  </BrowserRouter>
</AuthProvider>
              


    </div>
  );
}

export default App;
