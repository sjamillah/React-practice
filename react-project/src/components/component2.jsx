const Component2 = ({ count, onClickHandler }) => {
    const handleClick2 = () => onClickHandler();
    return <div>
        <p>{count}</p>
        <button onClick={handleClick2}>Decrement</button>
    </div>
}

export default Component2;