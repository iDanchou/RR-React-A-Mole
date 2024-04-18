import React, { useEffect } from "react";
import noMole from "../molehill.png";

function EmptySlot(props) {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      props.toggle(true);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img
        style={{ width: "30vw" }}
        src={noMole}
        onClick={props.handleBop}
        alt="empty molehill"
      />
    </div>
  );
}

export default EmptySlot;
