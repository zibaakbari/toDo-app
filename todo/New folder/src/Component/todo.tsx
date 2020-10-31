import React from "react";
import "../App.css";

interface todoProps{
  setDone:(x:boolean)=>void
};

const ToDo: React.FC<todoProps> =props=> {
  return (
    <>
      <div className="flex-container">
        <label className="flex-item-left" onClick={() => props.setDone(false)}>
          unDone
        </label>
        <label className="flex-item-right" onClick={() => props.setDone(true)}>
          Done
        </label>
      </div>
    </>
  );
}
export default ToDo;