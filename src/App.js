import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleSwitch } from "./features/toggle/toggleSlice";

function App() {
  const plug = useSelector((store) => store.plug.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSwitch());
  };

  return (
    <div className="App">
      <button
        className={`btn btn-${plug ? "primary" : "danger"} btn-lg`}
        onClick={handleClick}
      >
        {plug ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default App;
