import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import checkedValidate from "../../help/checkedValidate";
import ModalInputs from "./ModalInputs";

const ModalCreate = ({ setModalActive, modalActive, id}) => {
    const dispatch = useDispatch();
    const colors = [
        'rgb(206, 237, 199)', 
        'rgb(255, 148, 148)', 
        'rgb(255, 212, 178)', 
        'rgb(255, 246, 189)', 
        'rgb(215, 227, 252)', 
        'rgb(255, 200, 221)'
    ];

    const [titleInp, setTitle] = useState('');
    const [descriptionInp, setDescription] = useState('');
    const [time, setTime] = useState('');
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [validate, setValidate ] = useState(false);

    useEffect(() => {
        checkedValidate(titleInp, time, setValidate);
    }, [titleInp, time]);

    const closeModal = () => {
        setTitle('');
        setDescription('');
        setSelectedColor(colors[0]);
        setModalActive(!modalActive);
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const handleAddTask = () => {
            dispatch(addTask({id, value: {
                title: titleInp,
                description: descriptionInp,
                completeTask: false,
                selectedColor,
                time,
                id,
            }}))
        closeModal();
    }

    const buttonAdd = validate ? "add-task btn" : "add-task btn disabled"


    return (
        <div className={!modalActive ? 'unActive modal' : 'modal active'} onClick={closeModal}>
            <div className="modal_content" onClick={stopPropagation}>
                <div className="inputs-modal">
                    <ModalInputs 
                        title={titleInp} 
                        description={descriptionInp} 
                        setTitle={setTitle} 
                        setDescription={setDescription} 
                        colors={colors} 
                        selectedColor={selectedColor} 
                        handleColorSelect={handleColorSelect}
                    />
                    <div className="tasks-btn">
                        <input type="time" value={time} onChange={(e) =>  setTime(e.target.value)}/>
                        <div className="buttons">
                            <button className="cansel-create-task btn" onClick={closeModal}>
                                Отмена
                            </button>
                            <button disabled={!validate} className={buttonAdd} onClick={handleAddTask}>
                                Добавить Задачу
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ModalCreate;