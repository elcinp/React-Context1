import React from 'react'
import {useContext} from 'react'
import StudentItem from './StudentItem'
import { StudentContext } from '../context/StudentContext'

const StudentList = () => {
    const {students} = useContext(StudentContext)
    return (
        <div>
            <h2>User List</h2>
            {students.map((student)=>{
                return(
                    <StudentItem key={student.id} student={student}/>
                )
            })}
        </div>
    )
}

export default StudentList
