import React from 'react'
import "./styles.css"

interface Props {
    id: number,
    name: string,
    onClickRemove: any
}

export default function CompanyItem(props: Props) {
    const {id, name, onClickRemove} = props
  return (
    <div className="company">
        <p>{name}</p>
        <button onClick={() => onClickRemove(id)}>🗑️</button>
    </div>
  )
}
