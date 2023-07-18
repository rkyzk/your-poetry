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
import ProfilesPage from "./pages/profiles/ProfilesPage";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import Home from "./pages/poems/Home";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import PoemsPageWithProfiles from "./pages/poems/PoemsPageWithProfiles";
import NavBarSecond from "./components/NavBarSecond";
import SearchProfiles from "./pages/profiles/SearchProfiles";
import SearchPoems from "./pages/poems/SearchPoems";
import PoemsByCategories from "./pages/poems/PoemsByCategories";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id;

  return (
    <div className={styles.App}>
      <NavBar />
      <NavBarSecond />
      <ToastContainer autoClose={4000} />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <Home /> } />
          <Route exact path="/contact" render={() => <h1>Contact</h1> } />
          <Route exact path="/signin" render={() => <SignInForm /> } />
          <Route exact path="/signup" render={() => <SignUpForm /> } />
          <Route exact path="/poems/create" render={() => <PoemCreateForm /> } />
          <Route exact path="/poems/" render={() => <PoemCreateForm /> } />
          <Route exact path="/poems/:id" render={() => <PoemPage />} />
          <Route exact path="/poems/:id/edit" render={() => <PoemEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/search/profiles" render={() => <SearchProfiles />} />
          <Route exact path="/search/poems" render={() => <SearchPoems />} />
          <Route exact path="/poems-by-categories" render={() => <PoemsByCategories />} />
          <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/my-poems"
            render={() => <PoemsPage 
                            filter={`owner__profile=${profile_id}&ordering=-created_at&`}
                            message="You haven't wrriten any poems yet." />} />
          <Route
            exact
            path="/liked"
            render={() => <PoemsPage
                            filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`} />} />
          <Route
            exact
            path="/profiles/:id/following"
            render={() => (
              <ProfilesPage
                filter={`owner__followed__owner__profile=${profile_id}&ordering=-owner__following__created_at&`}
                message="You haven't followed anyone."
              />)} />
          <Route
            exact path="/new-poems"
            render={() => <PoemsPageWithProfiles
                            page={"newPoems"}
                          />}
          />
          <Route
            exact path="/popular-poems"
            render={() => <PoemsPageWithProfiles
                            page={"popularPoems"}
                          />} 
          />
          <Route render={() => <h1>Page not found</h1> } />
        </Switch>
      </Container>
    </div>
  );
}

export default App;