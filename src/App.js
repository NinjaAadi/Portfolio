import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Experience from './Components/Experience/Experience';
import Education from "./Components/Education/Education";
import Project from './Components/Projects/Projects';
import Skills from './Components/Awards/skills';
import Resume from './Components/Resume/Resume'
import {Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}
export default App;
