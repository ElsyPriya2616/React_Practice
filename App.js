import React from "react";
import ReactDOM from "react-dom/client";

//JSX - jsx is HTML/XML like Syntax but not html/XML in js

//Creating React element using JSX
//const jsxHeading = <h1 id = "heading"> Namaste React using JSX</h1>;

//console.log(jsxHeading);

//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading); 

//React Element

//const heading = (<h1 className="head" tabIndex="5">Namaste React using JSX</h1>);

//React Functional Component

//const HeadingComponent =()=>{
    //return<h1>Namaste React Functional component</h1>; 
//}
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<HeadingComponent/>);

//React component inside component
//const title = (<h1 className="head" tabIndex="5">Namaste React using JSX</h1>);

//const HeadingComponent =()=>{
  //  return<h1>Namaste React Functional component</h1>;
//}


//FOOD ORDERING APP PLANNING:
const Header = () => {
    return(
        <div className = "header">
        <div className = "logo-container">
            <img 
                className = "logo" 
                src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2&industry=COMPANY+NAME"
            />
        </div>
        <div className = "nav-items">
            <ul>
                <li> Home </li>
                <li> About Us</li>
                <li> Contact Us </li>
                <li> Cart </li>
            </ul>
        </div>
    </div>
    )
}

const RestaurantCard =() => {
    return(
        <div className = "res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className = "res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"/>
            <h3> Meghana Foods </h3>
            <h4> Biryani, NorthIndian, Asian </h4>
            <h4> 4.4 stars </h4>
            <h4> 38min delivery</h4>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>


            </div>
        </div>
    )
    
}

const AppLayout = () => {
    return (
        <div classname = "app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)




