import React, { useState } from "react";

function InputArea(props) {
    const [currentList, setCurrentList] = useState("");

    const detect = event => setCurrentList([event.target.value]);


    return (
        <div className="form">
            <input
                type="text"
                value={currentList}
                onChange={detect}
            />
            <button onClick={() => {
                props.add(currentList);
                setCurrentList("");
                }}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;