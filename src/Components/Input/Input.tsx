import React, {ChangeEvent, useState} from 'react';


type InputTypeProps = {
    callback: () => void
}

export const Input = (props: InputTypeProps) => {
    //Стейт значения введеного в инпут
    const [value,setValue]=useState<string>("")
    const {callback} = props

const addTask=()=>{

}

const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
}
return (
    <input type="text" onChange={onChangeHandler}/>
        );
    }

