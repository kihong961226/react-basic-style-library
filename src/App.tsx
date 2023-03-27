import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EmotionExample from "./components/emotion-example/EmotionExample";
import Example from "./components/sass-example/Example";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <EmotionExample /> */}
      <Example />
    </div>
  );
}

export default App;
