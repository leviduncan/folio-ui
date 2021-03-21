import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
        <Header />
        <Switch>
          <Route path='/' exact />
        </Switch>
    </Router>
      
      <Main />
      <Footer />

    </>
  );
}

export default App;
