import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState('olive')

  // function changeColor(color) {
  //   setBgColor(color)
  // }

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: bgColor}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
            onClick={() => setBgColor('red')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: 'red'}}
          >Red</button>
          <button 
            onClick={() => setBgColor('green')} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: 'green'}}
          >Green</button>
          <button 
            onClick={() => setBgColor('blue')} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: 'blue'}}
          >Blue</button>
          <button 
            onClick={() => setBgColor('yellow')} 
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor: 'yellow'}}
          >Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
