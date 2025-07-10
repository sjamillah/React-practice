const UserStatus = ({loggedIn, isAdmin}) => {
    let message = '';
    // If you want to make if statements with no lists one can do them from outside the return statement
    if(loggedIn && isAdmin) {
        message = "Welcome Admin!"
    } else if(loggedIn) {
        message = "Welcome User"
    }
    return (
           <div>
                <p>{message}</p>
            </div> 
    );
};

export default UserStatus;