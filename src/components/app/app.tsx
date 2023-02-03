import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../../styles/global.scss";
import Index from "../../pages";
import DeletedList from "../../pages/DeletedList";

import { TodoContext } from "../../context/TodoContext";

export default function App() {
  return (
    <div className="app">
      <TodoContext>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path="/completed-list">
              <DeletedList />{" "}
            </Route>
          </Switch>
        </BrowserRouter>
      </TodoContext>
    </div>
  );
}
