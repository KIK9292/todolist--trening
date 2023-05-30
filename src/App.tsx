import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {Todolist} from "./Components/Todolist/Todolist";

//Типизация Кнопок фильтрации
type ButtonTitleType = "All" | "Active" | "Completed" // типизация кнопок фильтрации
// типизация стейта тудулистов
export type TodolistsType = {
    id: string
    title: string
    filter: ButtonTitleType
}
//Типизация Тасок
export type TasksStateType = {
    [key: string]: TodolistId[]
}
type TodolistId = {
    id: string
    title: string
    isDone: boolean
}

function App() {
    let todolistId1 = v1()
    let todolistId2 = v1()

    let [filter, setFilter] = useState<ButtonTitleType>("All")  // начальный стейт кнопок фильтрации

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistId1, title: "What to learn", filter: "All"},
        {id: todolistId2, title: "What to buy", filter: "All"}

    ])

    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}

        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ],
    });

    return(
        <div className="App">
    <Todolist todolists={todolists}
              tasks={tasks}/>
        </div>
    )
}

export default App;
