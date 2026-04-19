function UserGreeting(props){

    const welcomeMessage = <h2 className="text1">
        Welcome {props.username}
        </h2>
    
    const loginMessage = <h2 className="text2">
        Please Login to Continue
        </h2>

    return(
        (props.isLoggedIn ? welcomeMessage
        : loginMessage
        )
    )

}


    


export default UserGreeting