import React from 'react'

function Header({text}) {
    return (
        <header>
            <div className="container">
                <h2> {text} Feedback UI</h2>
            </div>
            
        </header>
    )
}
//default props


export default Header
