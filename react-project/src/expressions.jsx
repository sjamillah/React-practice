const Expre = () => {
    const myName = "Huxn WebDev";
    const multiply = (a, b) => a * b;
    const specialClass = 'simple-class';
    return (
        <section>
            <p>2 + 2 = {2 + 2}</p>
            <h1>{myName}</h1>
            <p>My Friends List: {["Alex ", "Waheed ", "Jordan"]}</p>
            <p>2 * 29 = {multiply(2, 29)}</p>
            <p className={specialClass}>This is a special class</p>
        </section>
    )
}

export default Expre;