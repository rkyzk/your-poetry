import styles from "./App.module.css";
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import {Route, Switch} from "react-router-dom";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PoemCreateForm from "./pages/poems/PoemCreateForm";
import PoemPage from "./pages/poems/PoemPage";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1> } />
          <Route exact path="/contact" render={() => <h1>Contact</h1> } />
          <Route exact path="/signin" render={() => <SignInForm /> } />
          <Route exact path="/signup" render={() => <SignUpForm /> } />
          <Route exact path="/poems/create" render={() => <PoemCreateForm /> } />
          <Route exact path="/poems/" render={() => <PoemCreateForm /> } />
          <Route exact path="/poems/:id" render={() => <PoemPage />} />
          <Route render={() => <h1>Page not found</h1> } />
        </Switch>
      </Container>
    </div>
  );
}

export default App;