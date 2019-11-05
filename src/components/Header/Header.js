import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';


class Header extends Component{
    render(){
        return (
            <>
                <div className='wrapper'>
                    <div className='container'>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
export default Header;


