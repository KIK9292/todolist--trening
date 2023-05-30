import React from 'react';

type ButtonTypeProps={
    nameButton:string
    callback:()=>void
}

export const Button = (props:ButtonTypeProps) => {
    const {nameButton,callback}=props

    const onClickHandler=()=>{
        callback()
    }
    return (
        <button onClick={onClickHandler}>{nameButton}</button>
    );
};

