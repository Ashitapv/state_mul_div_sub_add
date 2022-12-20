import "./App.css";
import React, { useState } from "react";

function App() {
  const [num, setnum] = useState("")
  const[num1,setnum1] = useState("")
  const[num2,setnum2] = useState("")

  //................................................................text input start
  const changeval1 = (e) => {
    setnum1(e.target.value)
  };
  const changeval2 = (f) => {
    setnum2(f.target.value)
  };
  //................................................................text input end
  
  const btn1 = (e) => {
    setnum((e.target.num)=(parseInt(num1)+parseInt(num2)));
  };

  const btn2 = (e) => {
    setnum((e.target.num)=(parseInt(num1)-parseInt(num2)));
  };

  const btn3 = (e) => {
    setnum((e.target.num)=(parseInt(num1)*parseInt(num2)));
  };

  const btn4 = (e) => {
    setnum((e.target.num)=(parseInt(num1)/parseInt(num2)));
  };

  const changeval_ans = (e) =>
  {
    setnum(num = e.target.value)
  };
  
  return (
    <div className="App">
      {/* <h1>{num}</h1> */}
      <div className="text">
        <input type="text" name="" id="" onChange={changeval1} />
        <input type="text" name="" id="" onChange={changeval2} />
      </div>
      <input type="button" value="+" onClick={btn1} />
      <input type="button" value="-" onClick={btn2} />
      <input type="button" value="*" onClick={btn3} />
      <input type="button" value="/" onClick={btn4} />
      <input type="text" name="" className="text" id="" onChange={changeval_ans}  value = {num}/>
    </div>
  );
}
export default App;
