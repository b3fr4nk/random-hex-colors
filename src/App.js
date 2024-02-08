import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./ColorBox";
import { changeMessage } from "./features/colorGuesser/messageSlice";
import { clearColors } from "./features/colorGuesser/colorSlice";
import { useSelector } from "react-redux";
import Submission from "./Submission";

function App() {
  const message = useSelector((state) => state.message.value);
  return (
    <div className="App">
      <div>
        <ColorBox />
        <ColorBox />
        <ColorBox />
      </div>
      <Submission />
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Next
      </button>
    </div>
  );
}

export default App;
