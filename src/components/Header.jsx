
function Header({text}){
    return (
        <header>
            <div className="container">
                <h2>{text}</h2>
            </div>
            
        </header>
    )
}

Header.defultProps= {
    text: 'Feedback ui',
}

// Header.PropTypes={
//     text :PropTypes.string,
// }

export default Header
