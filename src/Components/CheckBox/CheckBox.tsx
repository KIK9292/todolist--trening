import React from 'react';

type CheckBoxTypeProps={
    callback: () => void
    checked:boolean
}


export const CheckBox = (props:CheckBoxTypeProps) => {
    const {callback,checked} = props
    const onChangeChecked=()=>{

    }
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={onChangeChecked}/>
        </div>
    );
};

