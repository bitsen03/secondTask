import React, { useState } from "react";
import { Transition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { setCompletTask } from "../../redux/taskSlice"; 
import ModalSettings from "../modal/ModalSettings";

const Task = ({ children, index }) => {
    const { completeTask, description, title, id, selectedColor, time } = children;
    const [switchOn, setSwitchOn] = useState(completeTask);
    const [modalActiveSetting, setModalActiveSetting] = useState(false);
    const dispatch = useDispatch();

    const titleCn = switchOn ? 'name-task line-through' : 'name-task';
    const switchCn = switchOn ? 'switch-btn switch-on' : 'switch-btn';

    const handleSwitch = () => {
        const newSwitchState = !switchOn;
        setSwitchOn(newSwitchState);
        dispatch(setCompletTask({ value: newSwitchState, index, id }));
    };

    const toggleModal = () => setModalActiveSetting(prev => !prev);

    return (
        <div className="task-div">
            <div>
                <div className="color" style={{ background: selectedColor }}></div>
            </div>
            <div className="text-task">
                <div className="task-content" onClick={toggleModal}>
                    <div>
                        <span className={titleCn}>{title}</span>
                    </div>
                    <span className="description-task">{description}</span>
                </div>
                <div className="div-time" onClick={toggleModal}>
                    <span className="time">{time}</span>
                </div>
                <div>
                    <div className={switchCn} onClick={handleSwitch}></div>
                </div>
            </div>
            <Transition
                in={modalActiveSetting}
                timeout={400}
                mountOnEnter
                unmountOnExit
            >
                <ModalSettings
                    setModalActive={setModalActiveSetting}
                    modalActive={modalActiveSetting}
                    id={id}
                    index={index}
                    {...children}
                />

            </Transition>
        </div>
    );
}

export default Task;
