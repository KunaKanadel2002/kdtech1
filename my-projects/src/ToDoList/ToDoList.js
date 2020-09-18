import React, { useState } from 'react';
// import addItems from './addItems';
import './style.css';
import AddItems from './AddItems';

const ToDoList = () => {
    const [data, setdata] = useState("");
    const [items, setitems] = useState([]);

    const change = (e) => {
        setdata(e.target.value);
    }
    const Add = () => {
       if(data.length>0){
            setitems([
            ...items, data
        ]);
        setdata("");
    }

    }
    const Delete = (id) => {
   setitems(()=>{
    return   items.filter((Eval,eid)=>{
            return eid!==id;
       })
   })
    }

    return (
        <div className="container">
            <h1 className="header">My Second React Project</h1>
            <div className="subContainer">
                <h1 id="title">
                    ToDo List
                </h1>
                <div className="combiner">
                    <input type="text" placeholder="Add Item" onChange={change} value={data} />
                    <span onClick={Add} id="plus" >+</span>
                </div>
                <div className="ListItems">
                {
                    items.map((value, id) => {
                        return (<AddItems value={value} items={items} Delete={Delete} key={id} id={id} />)
                    }
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default ToDoList;