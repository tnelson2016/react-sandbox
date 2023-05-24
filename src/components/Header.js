import React from 'react';




function Header1() {
    
    
    return (
        <div>
            <h1>
            Normal function syntax in react
            </h1>
        </div>
    )
}
Header1()
//Arrow Functions
//we cannot use "this" keyword in arrow function
//arrow function can be one liner function
const Header = () => {

    return (
        <div>
            <h1>I am the Header Component</h1>
        </div>
    )
    

}

export default Header;