import {Route, Routes} from "react-router";

import {Header} from "../components/Header";
import {Home} from "../pages/Home";
import {NotFound} from "../pages/NotFound";

import '../scss/app.scss'
import {Cart} from "../pages/Cart";
import { useState } from "react";

export const App = () => {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home searchValue={searchValue}/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

