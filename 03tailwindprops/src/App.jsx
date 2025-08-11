import './App.css'
import Card from "../components/Card"




function App() {
  return (
    <>
    <Card name="John Doe" title="Software Engineer" profile_image='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?_gl=1*jcwx3f*_ga*MTQwNDgyNDMyMS4xNzU0NjQzMTQz*_ga_8JE65Q40S6*czE3NTQ2NDMxNDMkbzEkZzEkdDE3NTQ2NDczNTckajU5JGwwJGgw' />
    <Card name="Jane Smith" title="Product Manager" profile_image='https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?_gl=1*1j1d3gg*_ga*MTQwNDgyNDMyMS4xNzU0NjQzMTQz*_ga_8JE65Q40S6*czE3NTQ2NTA1OTMkbzIkZzEkdDE3NTQ2NTA2MDUkajQ4JGwwJGgw' />
    <Card />
    </>
  )
}

export default App