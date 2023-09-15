import React from "react";

const Greet = props => {
    const {name, userName} = props

    return(
        <div>
            <h1>
                Hello {name} a.k.a {userName}
            </h1>
        </div>
    )
}

export default Greet;