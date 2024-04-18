import { useState } from "react";
import MoleContainer from "./Components/moleContainer";

function App() {
  let [score, setScore] = useState(0);

  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer
          key={i} // Add the key prop with a unique value
          setScore={setScore}
          score={score}
        />
      );
    }

    return <div>{hills}</div>;
  };

  return (
    <div className="App">
      <h1>React-a-Mole</h1>
      <h2>Score: {score}</h2>
      {createMoleHill()}
    </div>
  );
}

export default App;
