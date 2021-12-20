function Card({ children, reverse }) {
    
        return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
      
}

export default Card;
