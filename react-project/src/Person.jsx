const User = () => {
    return (
        <Person 
            name="Hun"
            age={23}
        />
    );
};

const Person = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default User;