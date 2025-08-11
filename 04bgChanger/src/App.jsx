// import { useState } from 'react'

// function App() {
//   const [bgColor, setBgColor] = useState('olive')

//   // function changeColor(color) {
//   //   setBgColor(color)
//   // }

//   return (
//     <div className="w-full h-screen duration-200" style={{backgroundColor: bgColor}}>
//       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
//         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
//           <button 
//             onClick={() => setBgColor('red')}
//             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
//             style={{backgroundColor: 'red'}}
//           >Red</button>
//           <button 
//             onClick={() => setBgColor('green')} 
//             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
//             style={{backgroundColor: 'green'}}
//           >Green</button>
//           <button 
//             onClick={() => setBgColor('blue')} 
//             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
//             style={{backgroundColor: 'blue'}}
//           >Blue</button>
//           <button 
//             onClick={() => setBgColor('yellow')} 
//             className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
//             style={{backgroundColor: 'yellow'}}
//           >Yellow</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App


import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState('olive')

  // Define colors with their properties
  const colors = [
    { name: 'Red', value: 'red', textColor: 'white' },
    { name: 'Green', value: 'green', textColor: 'white' },
    { name: 'Blue', value: 'blue', textColor: 'white' },
    { name: 'Yellow', value: 'yellow', textColor: 'black' },
    { name: 'Purple', value: 'purple', textColor: 'white' },
    { name: 'Pink', value: 'pink', textColor: 'black' },
    { name: 'Orange', value: 'orange', textColor: 'white' },
    { name: 'Teal', value: 'teal', textColor: 'white' }
  ]

  const handleColorChange = (color) => {
    setBgColor(color)
  }

  return (
    <div 
      className="w-full h-screen duration-300 transition-colors" 
      style={{backgroundColor: bgColor}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-4 py-3 rounded-3xl max-w-4xl'>
          {colors.map((color) => (
            <button 
              key={color.value}
              onClick={() => handleColorChange(color.value)}
              className={`outline-none px-4 py-2 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-150 font-medium ${
                bgColor === color.value ? 'ring-2 ring-gray-400' : ''
              }`}
              style={{
                backgroundColor: color.value,
                color: color.textColor
              }}
              aria-label={`Change background to ${color.name}`}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App