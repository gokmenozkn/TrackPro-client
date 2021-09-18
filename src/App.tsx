import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Market from "./pages/Market";
import CryptoProvider from "./context/Cryptocontext";

function App() {
  return (
    <>
      <CryptoProvider>
        <Router>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route path="/market" component={Market} />
          </Switch>
        </Router>
      </CryptoProvider>
    </>
  );
}

export default App;
