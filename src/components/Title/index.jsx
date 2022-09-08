import React from "react";

export const Title = (props) =>{
    console.log(props);
    return(
        <h1>HOLAAAAA {props.greeting}</h1>
    );
}

export default Title;