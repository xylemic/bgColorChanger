import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState(null); // Controls page background color
  const [selectedColor, setSelectedColor] = useState(null); // Controls button background color

  const handleColorChange = (newColor) => {
    if (newColor === 'amber') {
      setColor('#f59e0b');
    } else {
      setColor(newColor); // Change the background color of the page
    }
    setSelectedColor(newColor); // Change the button background to the same color
  };

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <button
            onClick={() => handleColorChange('red')}
            className={`outline-none px-4 py-1 rounded-full shadow-lg ${
              selectedColor === 'red' ? 'bg-red-500 text-white' : 'bg-white text-black'
            }`}
          >
            red
          </button>

          <button
            onClick={() => handleColorChange('green')}
            className={`outline-none px-4 py-1 rounded-full shadow-lg ${
              selectedColor === 'green' ? 'bg-green-500 text-white' : 'bg-white text-black'
            }`}
          >
            green
          </button>

          <button
            onClick={() => handleColorChange('blue')}
            className={`outline-none px-4 py-1 rounded-full shadow-lg ${
              selectedColor === 'blue' ? 'bg-blue-500 text-white' : 'bg-white text-black'
            }`}
          >
            blue
          </button>

          <button
          onClick={() => handleColorChange('amber')}
          className={`outline-none px-4 py-1 rounded-full shadow-lg ${
            selectedColor === 'amber' ? 'bg-amber-500 text-white' : 'bg-white text-black'
          }`}
          >amber</button>
          
        </div>
      </div>
    </div>
  )
}

export default App;