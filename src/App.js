import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51IKOL3KKEpors3xhvPFYFj0yS0uYVP5XVerSSHxB3IFQ6w1O7Jlgu06aEwJKsta3Do8ndjdM1u4idjKOkAhf7kFN00bp8q4Tmp"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log("The user is", authUser);

      if (authUser) {
        //the user just logged in/the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is loged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM(switch "App" to "app".)
    //Router=>Ndryshim faqe dhe linku(ne URL).Very Important.
    //Router=>You can add many "Route" as you want.
    //Router=>NOTE:Make sure your default "Route" its at your BOTTOM.Otherwise its never get listened.
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        {/** Header=>Kreu,Koka(ne krye).*/}
        {/**Home=>Body (cdo gje poshte HEADER). */}
      </div>
    </Router>
  );
}
export default App;
