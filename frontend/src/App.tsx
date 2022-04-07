import {useRef, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const inputEl = useRef<HTMLInputElement>(null);
  const [name, setName] = useState();

  const setNameHandler = async () => {
    const obj = { name: inputEl?.current?.value };
    try {
      await axios.post("http://localhost:3000", null, {
        params: obj,
        withCredentials: true,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const getNameHandler = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000", {
        withCredentials: true,
      })
      setName(data.name);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <div className="form">
        <p>{name}</p>
        <label htmlFor="input">UserName</label>
        <input ref={inputEl} className="id" />
        <button onClick={setNameHandler}>Store Cookie</button>
        <button onClick={getNameHandler}>Retrive Cookie</button>
      </div>
    </div>
  );
}

export default App;
