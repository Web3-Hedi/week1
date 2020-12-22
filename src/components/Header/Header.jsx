import React from 'react'
import Logo from './logo_haute_ecole.png'
const Header = (props) => {
    return (
            <div>
                <img src={Logo} alt='logo'/>
                <h1> {props.name} </h1>
            </div>
    )
}
export default Header