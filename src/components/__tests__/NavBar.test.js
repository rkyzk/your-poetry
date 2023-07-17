import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from "../NavBar";

/*
test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  // screen.debug();
  const homeLink = screen.getByRole("link", { name: "Home" });
  const contactLink = screen.getByRole("link", { name: "Contact" });
  const signInLink = screen.getByRole("link", { name: "Sign in" });
  const signUpLink = screen.getByRole("link", { name: "Sign up" });

  expect(homeLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
  expect(signInLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();
});

test("renders right links for a logged in user", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const userName = await screen.findByText("Linda");
  const homeLink = screen.getByRole("link", { name: "Home" });
  const contactLink = screen.getByRole("link", { name: "Contact" });
  // const myProfileLink = screen.getByRole("link", { name: "My Profile" });
  // const signUpLink = screen.getByRole("link", { name: "Sign up" });
  
  expect(userName).toBeInTheDocument();
  expect(homeLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
  // expect(myProfileLink).toBeInTheDocument();
  // expect(signUpLink).not.toBeInTheDocument();
});
*/
test("renders Sign in and Sign up links again on log out", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const signOutLink = await screen.findByText("Sign out");
  fireEvent.click(signOutLink);

  const signInLink = await screen.findByText("Sign in");
  const signUpLink = await screen.findByText("Sign up");

  expect(signInLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();
});