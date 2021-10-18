import React from "react";


export default function User({user, handleOnClick}) {

    return (<li className='person' onClick={() => handleOnClick(user)}>{`Name: ${user.name} `} <br/> { `Gender: ${user.gender} `}</li>

    )

};