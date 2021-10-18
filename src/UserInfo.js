import React from "react";


export default function UserInfo({user}) {

    return <ul className='detail'>
            <li> Name: {user.name}</li>
            <li> Height: {user.height}</li>
            <li> Weight: {user.mass}</li>
            <li> Hair color: {user.hair_color}</li>
            <li> Skin color: {user.skin_color}</li>
            <li> Eye color: {user.eye_color}</li>
            <li> Birth year: {user.birth_year}</li>
            <li> Gender: {user.gender}</li>
        </ul>


};