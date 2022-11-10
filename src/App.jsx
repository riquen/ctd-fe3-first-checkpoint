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
      <div className='content'>
        <form onSubmit={handleSubmit} className={invalid ? 'invalid' : ''}>
          <h1>ADICIONAR NOVA COR</h1>

          <div className='inputContainer'>
            <div className='inputDiv'>
              <label htmlFor='nameInput'>Nome</label>
              <input
                id='nameInput'
                type='text'
              />
            </div>

            <div className='inputDiv'>
              <label htmlFor='colorInput'>Cor</label>
              <input
                id='colorInput'
                type='text'
                placeholder="Insira sua cor no formato Hexadecimal"
              />
            </div>
          </div>

          <button type="submit">ADICIONAR</button>
        </form>

        {invalid && <span>Por favor, verifique os dados inseridos no formulário</span>}

        {!invalid && <h3>{data.name} {data.color}</h3>}
      </div>
    </div>
  )
}

export default App