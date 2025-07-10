const Propp = () => {
    return (
    <User 
        name="Huxn WebDev" 
        age={22} 
        isMarried={false}
        hobbies={["Coding", "Reading", "Sleeping"]}
    />
    );
};

const User = (props) => {
    console.log(props);
    return <section>
        <h1>Name: {props.name}</h1>
        <h2>Age: {props.age}</h2>
        <h3>Marriage Status: {props.isMarried}</h3>
        <h4>Hobbies: {props.hobbies}</h4>
    </section>
}

export default Propp;