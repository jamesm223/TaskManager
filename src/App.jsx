import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Import Styles
import './App.css'

// Import Components
import createTask from './components/createTask'

function App() {
    // Setting useStates
    const [isModalOpen, setIsModalOpen] = useState(false);


    // Modal opening and closing
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
      <>
        <div>
            <h1>Task Manager</h1>
            <button></button>
        </div>
      </>
    )
}

export default App
