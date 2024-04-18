import Mole from "./mole";
import React, { useState } from "react";
import EmptySlot from "./emptySlot";

function MoleContainer(props) {
  const [displayMole, setDisplayMole] = useState(false); // Add state to track whether the mole is displayed

  function handleBop(e) {
    props.setScore(props.score + 1); // Increase the score by 1 when the mole is bopped
    setDisplayMole(false); // Set displayMole to false when the mole is bopped
  }

  let moleDisplay = displayMole ? (
    <Mole
      setScore={props.setScore}
      toggle={setDisplayMole}
      handleBop={handleBop}
    />
  ) : (
    <EmptySlot toggle={setDisplayMole} />
  );

  return <div>{moleDisplay}</div>;
}

export default MoleContainer;
