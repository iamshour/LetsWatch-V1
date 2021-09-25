import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/main.scss';

//Components
import Navbar from './components/Navbar';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import SinglePage from './pages/SinglePage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/singleshow/:id' component={SinglePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
