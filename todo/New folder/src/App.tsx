import React,{FunctionComponent, useState} from "react";
import "./App.css";
import Input from "./Component/input";
import ToDo from "./Component/todo";
import ShowList from "./Component/showList";



const App : FunctionComponent <{listItem?:{name:string,id:number,doneItem:boolean}[]}> = ({listItem=[]})=> {
  const [text, setText] = useState<string>('');
  const [list , setList] = useState(listItem);
  const [done, setDone] = useState<boolean>(false);
  function changeInput(event?:any):void{
    setText((event.target as HTMLInputElement).value);
  }

  function add() :void {
    const filtered:{}[] = list.filter((item)=> item.name === text);
    if (filtered.length > 0) {
      setText("");
    } else {
      list.unshift({ name: text,id:Math.random(), doneItem: done });
      setText("");
    }
  }
  function remove(id:number) : void{
    setList(list.filter((task) => task.id !== id));
  }
  function editFunc(task:{name:string,id:number,doneItem:boolean},word:string):void {
    task.name = word;
  }
  function taskDone(task:{ name: String, id: Number, doneItem: Boolean }):void {
    task.doneItem = !task.doneItem;
  }
  return (
    <div className="container">
      <Input textValue={text} change={changeInput} submit={add} />
      <ToDo setDone={setDone} />
      { list.length >0 && <ShowList
        tasks={
          done  === true
            ? list.filter((item) => {
              console.log('true'); 
              return (item.doneItem === true)})
            : list.filter((item) => item.doneItem === false)
        }
        isDone={done}
        deleted={remove}
        editFunc={editFunc}
        setDone={setDone}
        taskDone={taskDone}
      />}
    </div>
  );
}
export default App;
