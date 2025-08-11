import Test from './Test.jsx'

function App() {
  const username = 'Shivam';
  return (
    <>
      <h1>vite react app</h1>
      <h2>Welcome {username}</h2>
      <p>This is a simple React application using Vite.</p>
      <a href="http://google.com" target="_blank">Visit Google</a>
      <br />
      <Test />
    </>
  )
}

export default App
