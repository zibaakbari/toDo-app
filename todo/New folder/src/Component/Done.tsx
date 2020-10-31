import React from "react";
interface doneButtonProps {
  isDone: Boolean;
  task: { name: String, id: Number, doneItem: Boolean };
  taskDone:(task:{ name: String, id: Number, doneItem: Boolean })=>void;
}
const DoneButton: React.FC<doneButtonProps> = (props) => {
  return (
    <>
      {props.isDone === false && (
        <button
          className="btn btn-secondary"
          onClick={() => {
           props.taskDone(props.task);
          }}
        >
          Done
        </button>
      )}
      {props.isDone === true && (
        <button
          className="btn btn-secondary"
          onClick={() => {
           props.taskDone(props.task);
          }}
        >
          unDone
        </button>
      )}
    </>
  );
};
export default DoneButton;