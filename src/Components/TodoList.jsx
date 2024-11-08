import React, { useState } from 'react'

function TodoList() {
    const [TodoLst, setTodos] = useState(["Car Wash", "Bike Wash"]);
    const [text, setText] = useState('');
    const [lastDeleted, setLastDeleted] = useState(null); // State to store last deleted item and date


    function handleChangetext(event) {
        setText(event.target.value);
    }

    function handleOnclick() {

        const newItem = text;
        setTodos([...TodoLst, newItem]);
        setText('');
        
    }

    function handleOnclickDelete() {

        if (TodoLst.length > 0) {
            const updatedList = TodoLst.slice(0, -1);
            const deletedItem = TodoLst[TodoLst.length - 1];
            setLastDeleted({ text: deletedItem, deletedDate: new Date().toLocaleString() }); // Store deleted item and date
            setTodos(updatedList);
        }
    }
    return (

        <div className ='calculator'>
            <div className="display">
                <input type="text" onChange={handleChangetext} value={text}></input>
            </div>
            <div className='buttons'>
            <button onClick={handleOnclick}>Add</button>
            <button onClick={handleOnclickDelete}>Delete</button>
            </div>
            <ul>
                {
                    TodoLst.map(lst => {
                        return <li>{lst}</li>
                    })
                }

            </ul>
          
            {lastDeleted && (
                <p style={{ color: 'red' }}>
                    Last deleted item: {lastDeleted.text} <br />
                    <span style={{ fontSize: "0.8em", color: "gray" }}>
                        (Deleted on: {lastDeleted.deletedDate})
                    </span>
                </p>
            )}

        </div>


    )
}

export default TodoList