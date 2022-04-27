import "./App.css";
import Login from "./components/Login";
import useLocalStorage from "./components/hooks/useLocalStorage";
import Dashboard from "./components/Dashboard";

function App() {
  const [id, setId] = useLocalStorage("id");
  return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />;
}

export default App;
