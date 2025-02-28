import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Listing from "./pages/Listing.jsx";
import AddProperty from "./pages/AddProperty.jsx";
import Bookings from "./pages/Bookings.jsx";
import Favourits from "./pages/Favourits.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/listing" element={<Listing/>}/>
                <Route path="/addProperty" element={<AddProperty/>}/>
                <Route path="/bookings" element={<Bookings/>}/>
                <Route path="/favourits" element={<Favourits/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
