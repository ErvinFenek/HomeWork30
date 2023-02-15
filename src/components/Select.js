import React from "react";


const Select = ({SELECT_OPTIONS, onSelectChangeHandler}) => {


    return (
        <div>
            <label>
                Show tasks:
                <select onChange={onSelectChangeHandler}>
                    {
                        SELECT_OPTIONS.map(({value, text}) => (<option key={value} value={value}>{text}</option>))
                    }
                </select>
            </label>
        </div>
    )

}

export { Select };