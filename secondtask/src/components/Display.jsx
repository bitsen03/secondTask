import React, { useState, useEffect } from "react";
import TaskWeek from "./DropDown/TaskWeek";
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import checkedValidate from "../help/checkedValidate";

const Display = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState('');
    const [validate, setValidate ] = useState(false);

    const handleAddTask = () => {
        if (validate) {
            dispatch(addTask({id:date}))
        }
    }

    useEffect(() => {
        checkedValidate(date, date, setValidate);
    }, [date])

    return (
        <div className="display">
            <div className="header-display">
                <span className="title-display">Tu-do</span>
                <div className="date-input-container">
            <input
                type="date"
                className="dark-theme-date-input"
                onChange={(e) => setDate(e.target.value)}
                value={date}
            />
            <button className="custom-date-button" onClick={handleAddTask}>
                <IoIosAdd className="add"/>
            </button>
        </div>

        </div>
            <TaskWeek></TaskWeek>
        </div>
    );
}

export default Display;