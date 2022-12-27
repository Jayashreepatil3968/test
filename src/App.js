import pic from "./pic.svg";
import "./App.css";
import { Movies } from "./components/Movies";

function App() {
  return (
    <div className="Test1">
      <div className="nav">
        <div>
          <h1>WOOKIE</h1>
          <h1>MOVIES</h1>
        </div>
          
      </div>

      <Movies />
    </div>
  );
}

export default App;
