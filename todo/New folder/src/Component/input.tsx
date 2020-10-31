import React from "react";
interface inputProps{
  textValue:string,
  change:()=>void,
  submit:()=>void
}
const Input: React.FC<inputProps> = props =>{
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        value={props.textValue}
        onChange={props.change}
        className="form-control"
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" onClick={props.submit}>
          Add
        </button>
      </div>
    </div>
  );
}
export default Input;