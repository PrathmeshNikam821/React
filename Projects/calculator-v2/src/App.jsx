
import styles from './App.module.css';
import Display from './components/Display';

import { useState } from 'react';
import ButtonContainer from './components/ButtonContainer';

function App() {
 
  let [calVal , setCalVal]= useState("") ;

  const onButtonClick =(buttonText)=>{
    if (buttonText === 'C'){

      setCalVal(""); 
    }else if (buttonText === '='){
      const result = eval(calVal);
      setCalVal(result) ; 
    }else { 
        const newDisplayValue = calVal + buttonText;
        setCalVal(newDisplayValue);
      
    }

  }
  
  return <div className={styles.calculator}>

    <Display displayValue ={ calVal}></Display>

   <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>

  </div>


}
export default App
