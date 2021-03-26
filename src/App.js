import styles from "./App.module.css";

import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {

  return (
    <>
      <section className={styles.header}>
        <h2 className={styles.title}>BloemBoeket</h2>
        <p className={styles.slogan}>Stel zelf je bloemboeket samen, perfect voor elke gelegenheid!</p>
      </section>
      
      <Navigation/>

      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/" exact strict>
          <Home/>
        </Route>
        <Route>
          <p>Not found</p>
        </Route>
      </Switch>
    </>   
  );
};

export default App;
