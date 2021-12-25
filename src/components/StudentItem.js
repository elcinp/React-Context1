import React from 'react'
import { useContext } from 'react'
import { StudentContext } from '../context/StudentContext'

const StudentItem = ({student}) => {
    const {changeColor} = useContext(StudentContext)
    const {id,name,email,age,color,} =student
    return (
        <div style={{background:student.color}}>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <h4>{age}</h4>
            color: <input type="text" value={color} onChange={()=> changeColor(color,id)}/>
        </div>
    )
}

export default StudentItem
