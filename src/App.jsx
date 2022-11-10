import { useState } from 'react'
import './App.css'
import { Card } from './Card'

function App() {
  const [invalid, setInvalid] = useState(false)
  const [cards, setCards] = useState([])

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
      setCards([...cards, data])
    }
  }

  const handleChange = () => {
    setInvalid(false)
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
                className={invalid ? 'invalidInput' : ''}
                type='text'
                onChange={handleChange}
              />
            </div>

            <div className='inputDiv'>
              <label htmlFor='colorInput'>Cor</label>
              <input
                id='colorInput'
                className={invalid ? 'invalidInput' : ''}
                type='text'
                placeholder="Insira sua cor no formato Hexadecimal"
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" disabled={invalid}>ADICIONAR</button>
        </form>

        {invalid && 
          <span className={invalid ? 'invalidSpan' : ''}>
            Por favor, verifique os dados inseridos no formulário
          </span>
        }

        <h1>CORES FAVORITAS</h1>
        <div className='favoriteColors'>
          {cards.map(
            card => {
              return(
                <Card key={card.color} colorName={card.name} colorHex={card.color} />
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}

export default App