import React from 'react';
import {Button} from "../Button/Button";

type FiltredMenuTaskTypeProps={
    callback:()=>void
}

export const FiltredMenuTask = (props:FiltredMenuTaskTypeProps) => {
    const {callback}=props
    return (
        <div>
            <Button nameButton={"All"} callback={()=>{}}/>
            <Button nameButton={"Active"} callback={()=>{}}/>
            <Button nameButton={"Completed"} callback={()=>{}}/>
        </div>
    );
};

