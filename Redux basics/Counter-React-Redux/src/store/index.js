import {createStore} from "redux" ; 

const INITIAL_VALUE = {
  counter : 0 ,
  privacy : false 
}

const counterReducer = (store = INITIAL_VALUE,action)=>{
    if(action.type === "INCREMENT"){
    return {counter : store.counter+1 , privacy:store.privacy};
    }else if (action.type=== "DECREMENT"){
      // console.log(counter)
      return {counter:store.counter - 1 , privacy:store.privacy};
    } else if (action.type === "ADD"){
      return {counter : store.counter + Number(action.payload.num) , privacy:store.privacy}
    }else if (action.type === "SUB"){
      return {counter : store.counter - Number(action.payload.num) , privacy:store.privacy}
    } else if (action.type === "PRIVATE"){
      return {privacy : !store.privacy , counter : store.counter};
    }
  
    return store;
}

const  coutnerStore = createStore(counterReducer);

export default coutnerStore;

