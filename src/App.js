import './App.css';
import Nav from './Nav';
import About from './About';
import Space from './Space';
import ItemDetail from './ItemDetail';
import logo from './logo.jpeg'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
const homeStyle ={
  backgroundColor: '#143048'
}

  const Home = () => (
    <div>
      <h1>Space Homepage</h1>
      <p> This is a demo website about abjects that are near Earth.</p>
      <img src={logo} alt="Logo" />
    </div>
  )

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" style={homeStyle} exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/space" exact component={Space}/>
          <Route path="/shop/:id" component={ItemDetail}/>
        </Switch>
        
    </div>
    </Router>
  );
}



export default App;
