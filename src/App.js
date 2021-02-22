import Layout from "./Components/Layout/Layout";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Users from "./pages/Users";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Acceuil} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:username" component={User} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
