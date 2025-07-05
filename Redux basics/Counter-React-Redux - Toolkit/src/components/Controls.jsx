import { useRef } from "react";
import { useDispatch } from "react-redux";
import { } from "../store";
import { counterActions } from "../store/counter";
import { privateActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncr = () => {
    dispatch(counterActions.increment());
  };
  const handleDecr = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd=()=>{
  
    dispatch(counterActions.add({
        num :inputElement.current.value,
      }))
    inputElement.current.value = "";
  }

  const handleSub = () =>{
   
    dispatch(counterActions.sub({
      num :inputElement.current.value,
    }))
    inputElement.current.value = "";
  }

  const hadlePrivacyToggle  = () =>{
      dispatch(privateActions.toggle())
  }

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        {" "}
        <button
          type="button"
          className="btn btn-outline-primary btn-lg px-4 gap-3"
          onClick={handleIncr}
        >
          Increase
        </button>{" "}
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handleDecr}
        >
          Decrease
        </button>{" "}

        <button type="buttpn" className="btn btn-warning" onClick={hadlePrivacyToggle}>Privacy toggle</button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        {" "}
        <input
          type="text"
          ref={inputElement}
          // className="btn btn-outline-primary btn-lg px-4 gap-3 "
         
        />
        
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleAdd}
        
        >
        Add
        </button>

        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSub}
          
        >
        Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
