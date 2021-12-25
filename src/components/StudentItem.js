import React from 'react'

const StudentItem = ({student}) => {
    const {id,name,email,age,color,} =student
    return (
        <div>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <h4>{age}</h4>
            color: <input type="text" value={color}/>
        </div>
    )
}

export default StudentItem
