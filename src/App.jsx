import Textarea from './components/Textarea'
import './App.css'
import { useRef, useState } from 'react'
import Button from './components/Button'
import Select from './components/Select'

function App() {
  const [inputState, setInputState] = useState('uz')
  const [outputState, setOuputState] = useState('en')
  const input = useRef('')
  const output = useRef('')

  async function handletranslate() {
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': 'ecc54b8859mshb67a6b8c4f2b80bp169e9ejsn4648f07d97e1',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      body: new URLSearchParams({
        q: 'Hello, world!',
        target: 'es',
        source: 'en'
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  function handleChangeInput(e) {
    setInputState(e.target.value);
  }

  function handleChangeOutput(e) {
    setOuputState(e.target.value);
  }

  return (
    <div className='container'>
      <div className="text-fields">
        <div className="input-field">
          <Select change={handleChangeInput} value={inputState} />
          <Textarea inputRef={input} placeholder="Enter words..." isDisabled={false} />
        </div>

        <div className="input-field">
          <Select change={handleChangeOutput} value={outputState} />
          <Textarea inputRef={output} placeholder="Translations" isDisabled={true} />
        </div>
      </div>
      <Button click={handletranslate} />
    </div>
  )
}

export default App
