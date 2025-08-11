import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <>
      <div>
        <h1>My Vite React Application</h1>
      </div>
    </>
  )
}

const AnotherElement = (
  <a href="http://google.com" target='_blank'>Visit Google</a>
)

const areactElement = React.createElement(
  'a',
  { href: 'http://google.com', target: '_blank' },
  'click to Visit Google',
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
