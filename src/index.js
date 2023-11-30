
import React from "react"
import ReactDom from 'react-dom/client';
import './index.css';

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return <div className="conatiner">
        <Header />
        <Menu />
        <Footer />
    </div>;
}

function Header() {
    const style = {};
    return <header className="header">
        <h1 style={style}>
            FAST REACT PIZZA Co.
        </h1>
    </header>
}
function Menu() {
    const pizzas = pizzaData;
    const pizzaCount = pizzas.length;
    return <main className="menu">
        <>
            <p>uasnm ydh fnsadfy ehfhflknsdinuf  iohsdf i</p>
            <h2>Our menu </h2>
            {pizzaCount > 0 ? (
                < ul className="pizzas">
                    {pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name} />))}
                </ul>) : <p>we are working on it...!!</p>}
        </>


    </main >
}
function Pizza(props) {
    // if (props.pizzaObj.soldOut) return null


    return (
        <li className={`pizza ${(props.pizzaObj.soldOut) ? "sold-out" : ""}`} >
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{(props.pizzaObj.soldOut) ? "soldout" : props.pizzaObj.price}</span>
            </div>
        </li >)
}
function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpean = hour >= openHour && hour <= closeHour;

    return (<footer className="footer">{isOpean ? <Order closeHour={closeHour} /> : <div className="order"><p>working hour is between {openHour}:00 to {closeHour}</p> </div>} </footer>)
}
function Order(props) {
    return (<div className="order">
        <p>We are opean untill {props.closeHour}:00.come visit us or oreder online </p>
        <button className="btn"> order</button>
    </div>)
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>)