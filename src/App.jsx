import { useState } from 'react'


// Import Styles
import './styles/App.css'
import './styles/createTaskModal.css'

// Import Components
import CreateTask from './components/createTask'

function App() {
    // Setting useStates
    const [isModalOpen, setIsModalOpen] = useState(false);


    // Modal opening and closing
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
      <>
        <div className='content'>
            <h1>Task Manager</h1>
            <button className='addTaskBtn' onClick={openModal}>Add Task</button>

            {isModalOpen && (
                <>
                    {/* Modal overlay that blurs out the background */}
                    <div 
                        className='createModalOverlay'
                        onClick={closeModal}
                    >
                        {/* Render task modal and pass through props */}
                        <CreateTask closeModal={closeModal}/>
                    </div>
                </>  
            )}
        </div>
      </>
    );
}

export default App
