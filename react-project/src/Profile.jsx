import { useState } from "react"

const Profile = () => {
    const [profile, setProfile] = useState({name: "Alex", age: 20})

    const handleChange = (e) => {
        const { name, value } = e.target; // destructing to get each name and property from the object
        setProfile((prevProfile) => ({
            // spread previous profilermation and then overwrite the key that changed using [name]: value
            // then we update the profile whether it's age or name respectively
            ...prevProfile, [name]: name === 'age' ? Number(value) : value
        }))
    }
    const updateprofile = (e) => {
        e.preventDefault();
        console.log("Updated profile:", profile)
    }
    return (
        <div>
            <h1>User Profile</h1>
            <form onSubmit={updateprofile}>
                <p>Your name is {profile.name} and age is {profile.age}.</p>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" placeholder="Input your name" value={profile.name} onChange={handleChange}/>
                </div>
                
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" placeholder="Input your age" value={profile.age} onChange={handleChange}/>
                </div>
                <button type="submit">Update your profile</button>
            </form>
        </div>
    )
}

export default Profile;