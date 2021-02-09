import './App.scss';
import {Route} from 'react-router-dom'
import Navigation from './Components/Navigation'

import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Drug from './Pages/Drug'
import Membership from './Pages/Membership'
import Pharmacy from './Pages/Pharmacy'
import AddDrug from './Pages/AddDrug'
import EditDrug from './Pages/EditDrug'
import AddMembership from './Pages/AddMembership'
import EditMembership from './Pages/EditMembership'

const App = () => {
  return (
    <div className="App">
        <Navigation />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route path="/Home" component={Home}/>
        <Route path="/Membership" component={Membership}/>
        <Route path="/Drug" component={Drug}/>
        <Route path="/Pharmacy" component={Pharmacy}/>
        <Route path="/AddDrug" component={AddDrug}/>
        <Route path="/EditDrug/:id" component={EditDrug}/>
        <Route path="/AddMembership" component={AddMembership} />
        <Route path="/EditMembership" component={EditMembership} />
    </div>
  );
}

export default App;
