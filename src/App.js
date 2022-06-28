import React,{Component} from 'react';
import {Route,Switch} from "react-router-dom";
import Navbar from './Navbar';
import Home from "./Components/Home";
import Location from "./Components/Location";
import Partners from './Components/Partners';
import Search from './Components/Search';
import Cart from './Components/Cart';
import SignIn from './Components/SignIn';
import Pd from './Redirects/Card1/Pd';
import Ge from "./Redirects/Card1/Ge";
import Fo from "./Redirects/Card1/Fo";
import Fv from "./Redirects/Card1/Fv";
import Meat from './Redirects/Card2/Meat';
import Pet from './Redirects/Card2/Pet';
import Pan from './Redirects/Card2/Pan';
import Gifts from './Redirects/Card2/Gifts';
import Medicines from './Redirects/Card2/Medicines';
import Cleaners from './Redirects/Card2/Cleaners';
import Payment from './Redirects/Fodata/Payment';

class App extends Component{
  render(){
  return (
    <>
      <Navbar/>
      <Switch>

       {/* Basic NavBar routes */}
        <Route  path="/" exact component={Home}/>
        <Route  path="/Location" component={Location}/>
        <Route  path="/Partners" component={Partners}/>
        <Route  path="/Search" component={Search}/>
        <Route  path="/Cart" component={Cart}/>
        <Route  path="/Signin" component={SignIn}/>

        {/* Redirects of Card1 */}
        <Route path="/ge" component={Ge}/>
        <Route path="/pd" component={Pd}/>
        <Route path="/fo" component={Fo}/>
        <Route path="/fv" component={Fv}/>

        {/* Redirects of Card2 */}
        <Route path="/meat" component={Meat}/>
        <Route path="/pet" component={Pet}/>
        <Route path="/pan" component={Pan}/>
        <Route path="/gifts" component={Gifts}/>
        <Route path="/medicines" component={Medicines}/>
        <Route path="/cleaners" component={Cleaners}/>
        {/*Redirect to Payment */}

        <Route path="/payment" component={Payment}/>

      </Switch>     
    </>
  );
}
}

export default App;
