import React from 'react'

export default function Employee({id,name,company,salary,age,phone,email,}) {
  return (
        <tr>
            <td> { name} </td>
            <td> {id} </td>
            <td> { company} </td>
            <td> { email} </td>
            <td> { age} </td>
            <td> { phone} </td>
            <td> { salary} </td>
        </tr>
  )
}
