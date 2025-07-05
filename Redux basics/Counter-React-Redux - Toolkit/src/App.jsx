import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMesage from "./components/PrivacyMesage";

function App() {

  const privacy = useSelector(store => store.private);


  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        {" "}
        <Container>
          <Header></Header>{" "}
          <div className="col-lg-6 mx-auto">
            {" "}

            {privacy ? <PrivacyMesage/>:<DisplayCounter/>}
            {/* <DisplayCounter></DisplayCounter>{" "} */}
            <Controls></Controls>
          </div>{" "}
        </Container>
      </center>
    </>
  );
}

export default App;
