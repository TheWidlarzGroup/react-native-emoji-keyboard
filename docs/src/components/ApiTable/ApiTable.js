import React from 'react'
import './ApiTable.style.css'

export const ApiTable = ({ typeVal, defaultVal }) => {
  return (
    <table className="ApiTable">
      <tr>
        <th align="left">Type</th>
        <th align="left">Default</th>
      </tr>
      <tr>
        <td className="ApiTable_cell">{typeVal}</td>
        <td>{defaultVal}</td>
      </tr>
    </table>
  )
}
