import React from "react";

// Import Styles
import "../styles/createTaskModal.css"

// Create the component
const CreateTask = ({ closeModal }) => {
    return (
        <>
            
            {/* Modal content that when clicked off of will close the modal */}
            <div className="createModalContent" onClick={(e) => e.stopPropagation()}>
                {/* Modal form that takes in the data from the user for a task */}
                <form>
                    <div className="createFormContent">
                        <h1>Add Task Form</h1>
                        <h2>Please Fill in All Inputs in Detail</h2>
                    </div>
                    <input
                        type="text" 
                        placeholder="Enter Title"
                        name="createTaskTitle"
                    />
                    <textarea 
                        type="text"
                        placeholder="Enter Description..." 
                        maxLength={200}
                        name="createTaskDescription"
                    />
                    <input 
                        type="date" 
                        placeholder="Enter Date"
                        name="createTaskDate"
                    />
                    <input 
                        type="submit"
                    />
                    <button
                        className="createTaskClose"
                        onClick={closeModal}
                    >
                        Close
                    </button>
                </form>
            </div>
        </>
    )
}

// Export the function
export default CreateTask;