import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Component/Home";
import { Details } from "./Component/Details";
import {NotFound} from './Component/NotFound';
import Links from "./Links";
import ListProvider from "./Context";

const Routes = () => {
  return (
      <ListProvider>
        <Router>
            <Links />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/:details" component={Details} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
      </ListProvider>
  );
};

export default Routes;
