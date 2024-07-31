import React, { useState } from "react";
import { Transition } from "react-transition-group";
import Task from "./Task";
import { IoIosArrowDropdown, IoIosArrowDropup, IoIosAdd } from "react-icons/io";
import ModalCreate from "../modal/ModalCreate";

const DropDown = ({ value, date }) => {
    const [modalActive, setModalActive] = useState(false);
    const [active, setActive] = useState(false);

    // Условное название класса для управления видимостью списка задач
    const taskListClassName = active ? 'active task-list' : 'task-list';

    return (
        <>
            <label className="task label">
                <div className="qwe">
                    <IoIosAdd className="setting-img" onClick={() => setModalActive(!modalActive)} />
                    {date}
                </div>
            </label>
            
            <div className="div-arrow" onClick={() => setActive(!active)}>
                {active ? <IoIosArrowDropup className="arrow" /> : <IoIosArrowDropdown className="arrow" />}
            </div>
            
            <div>
                <div className={taskListClassName}>
                    <div className="all-Tasks">
                        {
                            value.length !== 0 ? (
                                value.map((el,i) => (
                                    <Task key={el.id} index={i}>{el}</Task>
                                ))
                            ) : (
                                <div className="dontHaveTask">
                                    <span>Задач пока нет</span>
                                </div>
                            )
                        }
                    </div>
                </div>
                <Transition
                    in={modalActive}
                    timeout={400} // Длительность анимации
                    mountOnEnter
                    unmountOnExit
                >
                    <ModalCreate setModalActive={setModalActive} id={date} modalActive={modalActive} />
                </Transition>
            </div>
        </>
    );
}

export default DropDown;
