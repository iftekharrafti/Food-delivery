import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MainOrder from './components/MainOrder/MainOrder';
import ManagerOrders from './components/ManageOrders/ManagerOrders';
import MyOrders from './components/MyOrders/MyOrders';
import NewOrders from './components/NewOrders/NewOrders';
import NewUser from './components/NewUser/NewUser';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/newOrders">
            <NewOrders></NewOrders>
          </Route>
          <PrivateRoute path="/myOrders/:orderId">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
            <MainOrder></MainOrder>
          </PrivateRoute>
          <PrivateRoute path="/allOrders">
            <ManagerOrders></ManagerOrders>
          </PrivateRoute>
          <Route path="/newUser">
            <NewUser></NewUser>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
