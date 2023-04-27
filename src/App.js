import React,{useState} from 'react'

import './App.css'

const App = () => {
  const [input,setInput] = useState("")

  const [result,setResult] = useState(0)

  const changetext = event => {
    setInput(event.target.value)
  }
  return (
    <div className='App'>
      <h1>This Calculator Application</h1>
      <br/>
      <input type="text" name="input" value={input} onChange={changetext}/><br/>
      <br/>
      <button style={{height:"30px", width:"70px",margin:"5px"}} onClick={() => setResult(eval(input))}>Result</button><br/>
      <br/>
      <h2>Result Is : {result}</h2>
      <br/>
      <button style={{height:"30px", width:"30px",margin:"5px"}} onClick={() =>setInput(input+"1")}>1</button>
      <button style={{height:"30px", width:"30px",margin:"5px"}} onClick={() =>setInput(input+"2")}>2</button>
      <button style={{height:"30px", width:"30px",margin:"5px"}} onClick={() =>setInput(input+"3")}>3</button>
      <button style={{height:"30px", width:"30px",margin:"5px"}} onClick={() =>setInput(input+"4")}>4</button><br/>
      <button style={{height:"30px", width:"30px",margin:"5px"}} onClick={() =>setInput(input+"5")}>5</button>
      <button style={{height:"30px", width:"30px",margin:"5px"}} onClick={() =>setInput(input+"6")}>6</button>
      <button style={{height:"30px", width:"30px",margin:"5px"}} onClick={() =>setInput(input+"7")}>7</button>
      <button style={{height:"30px", width:"30px",margin:"5px"}} onClick={() =>setInput(input+"8")}>8</button><br/>
      <button style={{height:"30px", width:"30px",margin:"5px"}} onClick={() =>setInput(input+"9")}>9</button>
      <button style={{height:"30px", width:"30px",margin:"5px"}} onClick={() =>setInput(input+"0")}>0</button>
      
      <button style={{height:"30px", width:"30px",margin:"5px"}} onClick={() =>setInput(input+"+")}>+</button>
      <button style={{height:"30px", width:"30px",margin:"5px"}} onClick={() =>setInput(input+"-")}>-</button><br/>
      <button style={{height:"30px", width:"30px",margin:"5px"}} onClick={() =>setInput(input+"*")}>*</button>
      <button style={{height:"30px", width:"30px",margin:"5px"}} onClick={() =>setInput(input+"/")}>/</button>
      <button style={{height:"30px", width:"30px",margin:"5px"}} onClick={() =>setInput("")}>clr</button>


    </div>
  )
}

export default App