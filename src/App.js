import { useState } from "react";
import LeftContainer from "./LeftContainer";
import RightImage from "./RightImage";
import "./styles.css";

export default function App() {

  const [stage, setStage] = useState(0);

  return (
    <div className="App flex">
      <LeftContainer stage={stage} setStage={setStage}/>
      <RightImage stage={stage}/>
    </div>
  );
}
