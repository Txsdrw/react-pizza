import './scss/app.scss'
import {Header} from './components/header'
import {Categories} from "./components/categories";
import {Sort} from "./components/sort"
import {PizzaBlock} from "./components/pizza-block";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories/>
                            <Sort/>
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            <PizzaBlock title='Мексиканская' price={345}/>
                            <PizzaBlock/>
                            <PizzaBlock/>
                            <PizzaBlock/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
