import FOOTER from "./components/footer";
import NAVBAR from "./components/navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HOME from "./pages/Home";
import ABOUT from "./pages/About";
import CONTACT from "./pages/UploadBook";
import MYCOLLECTION from "./pages/MyCollection";
import LOGIN from "./pages/login";
import REGISTER from "./pages/register";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NAVBAR></NAVBAR>
      <Routes>
        <Route path="/" element={<HOME></HOME>}></Route>
        <Route path="/mycollection" element={<MYCOLLECTION></MYCOLLECTION>}></Route>
        <Route path="/about"element={<ABOUT></ABOUT>}></Route>
        <Route path="/contact" element={<CONTACT></CONTACT>}></Route>
        <Route path="/login" element={<LOGIN></LOGIN>}></Route>
        <Route path="/signup" element={<REGISTER></REGISTER>}></Route>
        </Routes>
        <FOOTER></FOOTER>
        </BrowserRouter>
       
       
       
    </div>
  );
}

export default App;
