import React from "react";
import {BoxInfos, BoxInput, BoxMain, BoxRow, Button, Container, ContainerHeader, ImgUser, Input, List, RowBar, TitleBox } from "./styles";
import { AiFillDelete, AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";
import ColumnBar from "../../components/columnbar";
import Header from "../../components/boxheader";
import { GrAdd } from "react-icons/gr";


export default function Todo() {

    const [task,setTask] = useState("");
    const [listTask,setListTask] = useState([{
      id: 1,
      task: 'estudar a noite',
      checked: true,
    },
    {
      id: 2,
      task: 'estudar a tarde',
      checked: false,
    }
    ]);
  
    const addTask = () =>{
      if(!task) return alert('Adicione uma tarefa!');
      const newTask = {
        id: Math.random(),
        task: task,
        checked: false,
      }
  
      setListTask([...listTask, newTask]);
      setTask("");
    }
  
    const removeTask = (id) => {
      const newList = listTask.filter(task => task.id != id);
      setListTask(newList);
    }
  
    const toggleChecked = (id, checked) => {
      const index = listTask.findIndex(task => task.id == id);
      const newList = listTask
      newList[index].checked = !checked;
      setListTask([...newList])
    }

    return(
        <>
            <BoxMain>
            <ColumnBar/>
            <BoxRow>
                <Header/>
                  <Container>
                    <BoxInfos>
                    <BoxInput>
                        <Input 
                        value={task}
                            placeholder="Digite sua tarefa"
                            onChange={(e) => setTask(e.target.value)}
                        />
                        <Button onClick={addTask}><GrAdd size={30}/></Button>
                    </BoxInput>
                        <ul>
                            {listTask.map(task => (
                            <>
                            <List checked={task.checked} key={task.id}>
                                <p>{task.task}</p>
                                <div>
                                <button onClick={() => toggleChecked(task.id, task.checked)}><AiFillCheckCircle  size={30} color="green"/></button>
                                <button onClick={() => removeTask(task.id)}><AiFillDelete size={30} color="red"/></button>
                                </div>
                            </List>
                            </>
                            ))}

                        </ul>
                </BoxInfos>
              </Container>
            </BoxRow>

           </BoxMain>
            
        </>
    )
}