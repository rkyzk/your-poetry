import styles from "./App.module.css";
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import {Route, Switch} from "react-router-dom";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PoemCreateForm from "./pages/poems/PoemCreateForm";
import PoemPage from "./pages/poems/PoemPage";
import PoemsPage from "./pages/poems/PoemsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PoemEditForm from "./pages/poems/PoemEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id;

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
          <Route exact path="/poems/:id/edit" render={() => <PoemEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/my-poems"
            render={() => <PoemsPage 
                            filter={`owner__profile=${profile_id}&ordering=-created_at&`}
                            message="You haven't wrriten any poems yet." />} />
          <Route
            exact
            path="/all-poems"
            render={() => <PoemsPage 
                            filter={""}
                            message="You haven't wrriten any poems yet." />} />
          <Route render={() => <h1>Page not found</h1> } />
        </Switch>
      </Container>
    </div>
  );
}

export default App;