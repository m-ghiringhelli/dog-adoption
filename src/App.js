import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import DogDetail from './views/DogDetail/DogDetail';
import Admin from './views/Admin/Admin';
import EditDog from './views/Admin/EditDog';
import Auth from './views/Auth/Auth';
import { getUser } from './services/users';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  
  if (currentUser) console.log(currentUser);

  return (
    <BrowserRouter>
      <div className="App">
        <Header {...{ currentUser, setCurrentUser }} />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/dogs/:id/edit'>
            <EditDog />
          </Route>
          <Route exact path='/dogs/:id'>
            <DogDetail />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/auth'>
            <Auth setCurrentUser={setCurrentUser} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
