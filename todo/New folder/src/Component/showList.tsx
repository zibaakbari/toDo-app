import React from "react";
import TaskList from "./taskList";
interface showListProps {
  tasks: {name:string,id:number,doneItem:boolean}[];
  isDone: boolean;
  deleted: (id:number)=>void;
  editFunc:(task:{name:string,id:number,doneItem:boolean},text:string)=>void
  setDone:(done:boolean)=>void
  taskDone:(task:{ name: String, id: Number, doneItem: Boolean })=>void;

}
const ShowList: React.FC<showListProps> = props => {
  const outPut:{}[]  = props.tasks.map((item) => (
    <TaskList
      key={item.id}
      done={props.isDone}
      task={item}
      deleteTask={props.deleted}
      editFunc={props.editFunc}
      setDone={props.setDone}
      taskDone={props.taskDone}
    />
  ));
  return <div>{outPut}</div>;
};
export default ShowList;
