import React, { useState } from "react";
import DoneButton from "./Done";
interface taskListProps{
  task:{name:string,
  id:number,
doneItem: boolean},
  deleteTask:(id:number)=>void,
  done:boolean,
  editFunc:(task:{name:string,id:number,doneItem:boolean},text:string)=>void,
  setDone:(done:boolean)=>void
  taskDone:(task:{ name: String, id: Number, doneItem: Boolean })=>void;

}
const TaskList:React.FC<taskListProps>=props=> {
  const [edit, setEdit] = useState<boolean>(false);
  const [text, setText] = useState<string>(props.task.name);
  return (
    <div className="tasks">
      {edit === false && (
        <div>
          <div>{props.task.name}</div>
          <button
            className="btn btn-secondary"
            onClick={() => {
              props.deleteTask(props.task.id);
            }}
          >
            Remove
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit
          </button>
          <DoneButton isDone={props.done} task={props.task} taskDone={props.taskDone}/>
        </div>
      )}
      {edit === true && (
        <div>
          <input
            type="text"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
          <button
            className="btn btn-secondary"
            onClick={() => {
              props.editFunc(props.task,text);
              setEdit(false);

            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
export default TaskList;
