import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Random } from "./components/Random";
import { Results } from "./components/Results";
import { SearchForm } from "./components/SearchForm";
import { SingleMeal } from "./components/SingleMeal";
function App() {
  const [term, setTerm] = useState("");

  return (
    <Router>
      <div className="App">
        <Link to="/">
          <h1 className="title">Recipe 🧑🏻‍🍳</h1>
        </Link>

        <Switch>
          <Route exact path="/">
            <SearchForm setTerm={setTerm} />
          </Route>
          <Route exact path="/results">
            <Results term={term} />
          </Route>
          <Route path="/results/:id">
            <SingleMeal />
          </Route>
          <Route path="/random">
            <Random />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
