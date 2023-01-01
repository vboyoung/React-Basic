import React from 'react'



function UserGreeting(props){
    return <h1>{props.name && `${props.name},`}, Welcome It's {props.count} times</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}

function Greeting(props){
    // if(props.isLoggendIn){
    //     return <UserGreeting name="jimmy" count={0} />
    // }
    return props.isLoggendIn ?  <UserGreeting name="jimmy" count={0} /> : <GuestGreeting />
}


export default function Condition() {
    const isLoggendIn = false;
 
    return (
    <div>
        <Greeting isLoggendIn={isLoggendIn} />
    </div>
  )
}
