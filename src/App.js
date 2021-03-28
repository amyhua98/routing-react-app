import './App.css';
import Nav from './Nav';
import About from './About';
import Space from './Space';
import ItemDetail from './ItemDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/space" exact component={Space}/>
          <Route path="/shop/:id" component={ItemDetail}/>
        </Switch>
        
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Homepage</h1>
  </div>
)


export default App;
