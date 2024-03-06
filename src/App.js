import React from "react";
import ReactDOM from "react-dom";

/*

  Header
      -Logo
      -NavBar Items
    
  Body
      -Search
      -RestaurentContainer
          -RestaurentCards
  
  Footer
      -Copyrights
      -Links

*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo"></div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <>
      <div className="app">
        <Header />
      </div>
    </>
  )
}

const root = document.getElementById("root");
ReactDOM.render(<AppLayout />, root);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<AppLayout/>);

export default App;
