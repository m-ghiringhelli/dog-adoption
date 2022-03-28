import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import DogDetail from './views/DogDetail/DogDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/dogs/:id'>
            <DogDetail />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
