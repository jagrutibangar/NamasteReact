import './Header.css'

const Header= () =>{
    return(
        <>
        <div className="header">
        <div className="logo-container">
            <img id="logo" src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg" alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Header;