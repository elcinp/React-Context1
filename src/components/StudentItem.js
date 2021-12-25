import React from 'react'
import { useContext } from 'react'
import { StudentContext } from '../context/StudentContext'

const StudentItem = ({student}) => {
    const {changeColor} = useContext(StudentContext)
    const {id,name,email,age,color,} =student
    return (
        <div style={{background:student.color}}>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <h4>Age: {age}</h4>
            color: <input type="text" value={color} onChange={(e)=> changeColor(e.target.value,id)}/>
        </div>
    )
}

export default StudentItem
