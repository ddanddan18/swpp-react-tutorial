import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./containers/TodoList/TodoList";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import NewTodo from "./containers/NewTodo/NewTodo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            path="/todos"
            exact
            render={() => <TodoList title="My Todo" />}
          />
          <Route path="/new-todo" exact component={NewTodo} />
          <Redirect exact from="/" to="/todos" />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
