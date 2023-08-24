import React from 'react'
import Employee from './Employee'
import employees from './employees'

export const Table = () => {
  return (
     <table>
        <thead>
        <tr>
          <th>name</th>
          <th>id</th>
          <th>company</th>
          <th>email</th>
          <th>age</th>
          <th>phone</th>
          <th>salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((item,index)=>{
        return <Employee
                name= {item.name}
                id= {item.id}
                company= {item.company}
                salary= {item.salary}
                age= {item.age}
                phone= {item.phone}
                email= {item.email}
            />
         })}
      </tbody>
     </table>
  )
}
1