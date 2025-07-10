const Listing = () => {
    const numbers = [1, 2, 3, 4, 5]
    return <main>
        {numbers.map(number => (
            /* The elements in a list in React are always required to have a unique key */
            <ul key={Math.random()}>
                <li>{number}</li>
            </ul>
        ))}
    </main>
}

export default Listing;