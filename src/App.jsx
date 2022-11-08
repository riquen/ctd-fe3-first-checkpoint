import { useState } from "react"
import { InputColor } from "./components/InputColor"
import { InputName } from "./components/InputName"

function App() {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [isValid, setIsValid] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const containsNumber = (str) => {
    return /[0-9]/.test(str);
  }

  const handleClick = () => {
    if (name && name.length < 3) setIsValid(false)
    if (color && color.length < 6 && !containsNumber(color)) setIsValid(false)
  }

  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
      <h1>ADICIONAR NOVA COR</h1>
      <InputName name={name} setName={setName} />
      <InputColor color={color} setColor={setColor} />
      <button type="submit" onClick={handleClick}>Adicionar</button>
     </form>
    </div>
  )
}

export default App