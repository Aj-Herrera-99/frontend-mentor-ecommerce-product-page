import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./pages/DefaultLayout";
import ProductDetail from "./pages/ProductDetail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={DefaultLayout}>
                    <Route path="product/:id" Component={ProductDetail} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
