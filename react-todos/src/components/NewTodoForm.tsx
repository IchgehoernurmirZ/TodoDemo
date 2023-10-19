import React, {useState} from "react";

function NewTodoForm(props: { addTodo: Function }) {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const changeDescription = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setDescription(event.target.value);
    }

    const changeAssigned = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setAssigned(event.target.value);
    }

    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }

    return (
        <div className="mt-5">
            <form>
                <div>
                    <label className="form-label">Assigned</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        required 
                        onChange={changeAssigned}
                        value={assigned}
                    ></input>
                </div>
                <div className="mt-3">
                    <label className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        rows={3} 
                        required 
                        onChange={changeDescription}
                        value={description}
                    ></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={submitTodo}>Add Todo</button>

            </form>
        </div>
    )
}

export default NewTodoForm;