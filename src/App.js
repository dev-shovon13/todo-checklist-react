import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/404/NotFound';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import IndividualTodo from './components/IndividualTodo/IndividualTodo';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Todos />
          </Route>
          <Route exact path="/home">
            <Todos />
          </Route>
          <Route path="/todo/:todoId">
            <IndividualTodo />
          </Route>
          <Route exact path="/*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
