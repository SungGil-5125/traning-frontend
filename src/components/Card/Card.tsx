import './Card.css'


const Card = () => {
    const handleClick = () => {
        window.alert('hi')
    }

    return (
        <div className="red-box" >
            <p>hello world</p>
            <button onClick={handleClick} style={{backgroundColor:'red'}}>Click me</button>
        </div>
    )
}

export default Card
