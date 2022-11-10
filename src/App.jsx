import { useState } from 'react'
import './App.css'

function App() {
  const [invalid, setInvalid] = useState(false)
  const [data, setData] = useState({
    name: '',
    color: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { nameInput, colorInput } = e.target.elements
    const data = {
      name: nameInput.value.trim(),
      color: colorInput.value,
    }

    const containsNumber = (str) => {
      return /\d/.test(str);
    }

    if (data.name.length < 3 || data.color.length < 6 || !containsNumber(data.color)) {
      setInvalid(true)
    } else {
      setInvalid(false)
      setData(data)
    }
  }

  return (
    <div className="App">
     <form onSubmit={handleSubmit} className={invalid ? 'invalid' : ''}>
      <h1>ADICIONAR NOVA COR</h1>

      <div>
        <label htmlFor='nameInput'>Nome</label>
        <input
          id='nameInput'
          type='text'
        />
      </div>

      <div>
        <label htmlFor='colorInput'>Cor</label>
        <input
          id='colorInput'
          type='text'
          placeholder="Insita sua cor no formato Hexadecimal"
        />
      </div>

      <button type="submit">Adicionar</button>
     </form>

     {invalid && <span>Por favor, verifique os dados inseridos no formulário</span>}

     {!invalid && <h3>{data.name} {data.color}</h3>}
    </div>
  )
}

export default App