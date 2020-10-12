import React from 'react'
import './styles.scss'


function Navbar(props) {
    return(
        <nav onChange={(e) => props.handleSearch(e.target.value)}>
            <h1>Interest</h1>
            <input 
            className='searchInput' 
            type="text" 
            placeholder="Search" 
            />
        </nav>
    )
}

export default Navbar