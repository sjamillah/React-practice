const Button1 = () => {
    return <button onClick={() => console.log('You clicked me')}>Click</button>
}

const Button2 = () => {
    const handleClick = () => console.log(Math.round(Math.random() * 10))
    return <button onClick={handleClick}>Click</button>
}

const Copy = () => {
    const copyHandler = () => {
        console.log('stop stealing my content')
    }
    return (
        <p onCopy={copyHandler}>
            This is another event component
        </p>
    )
}

const Move = () => {
    function moveHandler () {
        alert('Mouse move event fired')
        console.log('Mouse moved')
    }

    return (
        <p onMouseMove={moveHandler}>This is some moving content when placing a cursor</p>
    )
}

const Events = () => {
    return (
        <div>
            <Button1 />
            <Button2 />
            <Copy />
            <Move />
        </div>
    )
}

export default Events;