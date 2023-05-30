import React from 'react';
import {TasksStateType, TodolistsType} from "../../App";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {FiltredMenuTask} from "../FiltredMenuTask/FiltredMenuTask";

type TodolistTypeProps={
    todolists:TodolistsType[]
    tasks:TasksStateType
}




export const Todolist = (props:TodolistTypeProps) => {
    const {todolists,tasks}=props
/// Отрисовываем Титлы тудулистов через мап
    const renderTodolist=todolists.map(el=>{
        /// Отрисовываем Титлы тасок через мап мы все еще в мапе!!!!
//--------------------------------------------------------------------------------------
        const renderTask=tasks[el.id].map(e=>{
            return(
                <li key={e.id}>
                    {/*<Checkbox/>*/}
                    <span>{e.title}</span>
                    <Button nameButton={"X"} callback={()=>{}}/>
                </li>
            )
        })
///----------------------------------------------------------------------------------------
        return (
            <div>
                <h3>{el.title}</h3>
                <Input callback={()=>{}}/>
                <Button nameButton={"ADD"} callback={()=>{}}/>
                <ul>
                    {renderTask}
                </ul>
                <FiltredMenuTask/>
            </div>
        )
    })

    return (
        <>
            {renderTodolist}
        </>
    );
};

