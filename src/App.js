import { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("App COMPONENT RUNNING");

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
};

export default App;
