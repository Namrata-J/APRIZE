import { RoutesComponent } from "./Routes/Routes";
import { Toaster } from 'react-hot-toast';
import "./App.css";

function App() {
  return (
    <div className="App">
      <RoutesComponent />
      <Toaster/>
    </div>
  );
}

export default App;
