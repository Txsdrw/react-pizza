import React from "react";

export function Categories() {
    const list = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const [active, setActive] = React.useState(0)

    const handleActive = (index) => {
        setActive(index)
    }

    return (<div className="categories">
        <ul>
            {list.map((item, index) => <li onClick={() => handleActive(index)} key={item}
                                           className={active === index ? 'active' : ''}>{item}</li>)}
        </ul>
    </div>)
}