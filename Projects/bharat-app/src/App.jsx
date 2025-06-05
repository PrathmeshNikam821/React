
import './App.css'
import ClockHeader from './components/ClockHeader.jsx';
import ClockSlogan from './components/ClockSlogan.jsx';
import CurrentTime from './components/CurrentTime.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <center>
    <ClockHeader></ClockHeader>
    <ClockSlogan/>
    <CurrentTime></CurrentTime>

  </center>
}

export default App
