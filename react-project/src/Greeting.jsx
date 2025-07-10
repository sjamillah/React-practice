const Greeting = () => {
    const name = "Jen";
    const date = new Date(); // the constructor to get current date
    return <div>
        <h1>Hello {name}</h1>
        <p>Date today: {date.getDate()}</p> {/* we use the getDate method to get the date */}
    </div>
}

export default Greeting;