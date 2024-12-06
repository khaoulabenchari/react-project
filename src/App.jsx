import { useState } from 'react'
import './App.css'

function Header(){
   return <> <header>
    Hello Khaoula
   </header>
   <h1>Title</h1>
   </>
}
function App() {
  const [count, setCount] = useState(0)
let name = "Khaoula"
  return (
   <Header></Header>
  )
}

export default App
