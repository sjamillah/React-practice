import { useState } from 'react';

const StateArrayApp = () => {
    const [friends, setFriends] = useState(["Alex", "Joe"]);

    const addFriend = () => setFriends([...friends, "Hillary"]);
    const removeFriend = () => setFriends(friends.filter(friend => friend !== 'Joe'))
    const updateFriend = () => setFriends(friends.map(friend => friend === 'Alex' ? 'Alex Smith' : friend))
    
    return (
        <section>
            {friends.map((friend) => (
                <li key={Math.random()}>{friend}</li>
            ))}

            <button onClick={addFriend}>Add New Friend</button>
            <button onClick={removeFriend}>Remove Friend</button>
            <button onClick={updateFriend}>Update Friend</button>
        </section>
    )
}

export default StateArrayApp;