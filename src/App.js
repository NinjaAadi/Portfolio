import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Projects/Projects";
import Skills from "./Components/Awards/skills";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/skills" component={Skills} />
      </Switch>
    </div>
  );
}
export default App;
