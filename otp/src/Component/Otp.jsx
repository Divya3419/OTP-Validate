import { useState, useRef } from "react";
import styles from "./Otp.module.css";
export const Otp = (props) => {
  const [inputArr, setInputArr] = useState(new Array(props.otp_digit).fill(""));
  const refArr = useRef([]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    const newValue=value.trim()
    const newArr = [...inputArr];
    newArr[index] = value.slice(-1);
    setInputArr(newArr);
    newValue && refArr.current[index+1]?.focus()
  };

const handleKeyDown=(e,index)=>{
    if(!e.target.value && e.key==="Backspace"){
    refArr.current[index-1]?.focus()
    }
}
  return (
    <div>
      <h1 style={{color:"green"}}>OTP validation</h1>
      {inputArr.map((ele, index) => {
        return (
          <input
            key={index}
            className={styles.otp}
            type="text"
            value={inputArr[index]}
            onChange={(e) => handleChange(e.target.value, index)}
            ref={(input)=>(refArr.current[index]=input)}
            onKeyDown={(e)=> handleKeyDown(e,index)}
          />
        );
      })}
    </div>
  );
};
