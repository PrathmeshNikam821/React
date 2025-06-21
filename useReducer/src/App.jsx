import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItems from "./components/TodoItems";
import './App.css';
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
  <TodoItemsContextProvider>
    <center className='todo-container'>
      <AppName></AppName>
      <div className="container text-center">
        <AddTodo></AddTodo>
        <WelcomeMessage ></WelcomeMessage>
        <TodoItems></TodoItems>
      </div>
    </center>
  </TodoItemsContextProvider>
  );
}

export default App;
