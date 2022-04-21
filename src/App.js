import { useState } from "react";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import { Random } from "./components/Random";
import { Results } from "./components/Results";
import { SearchForm } from "./components/SearchForm";
import { SingleMeal } from "./components/SingleMeal";
function App() {
  const [term, setTerm] = useState("");
  let history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!term) {
      alert("Enter food name");
    } else {
      history.push({
        pathname: "/results",
        state: { term: term },
      });
      setTerm("");
    }
  };

  return (
    <div className="App">
      <Link to="/">
        <h1 className="title">Recipe 🧑🏻‍🍳</h1>
      </Link>

      <Switch>
        <Route exact path="/">
          <SearchForm handleSearch={handleSearch} setTerm={setTerm} />
        </Route>
        <Route exact path="/results" component={Results} />
        <Route path="/results/:id" component={SingleMeal} />
        <Route path="/random" component={Random} />
      </Switch>
    </div>
  );
}

export default App;
