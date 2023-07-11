import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Info from "./components/Info";
import Plans from "./components/Plans";
import Addons from "./components/Addons";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="flex justify-center">
      <div className="lg:shadow-lg shadow-slate-500 w-80 mt-5 lg:p-16 lg:grow rounded-md lg:ml-64 lg:mr-64 lg:mt-28 bg-zinc-100">
        <div className="flex">
          
          <Router>
            <Routes>
              <Route exact path="/" Component={Info} />
              <Route exact path="/plans" Component={Plans} />
              <Route exact path="/addons" Component={Addons} />
              <Route exact path="/summary" Component={Summary} />
            </Routes>
          </Router>
         
        </div>
      </div>
    </div>
  );
}

export default App;
