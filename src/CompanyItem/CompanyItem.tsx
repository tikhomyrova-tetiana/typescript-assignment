import React from 'react'

interface Props {
    id: number,
    name: string
}

export default function CompanyItem(props: Props) {
    const {id, name} = props
  return (
    <div>
        <p>{name}</p>
        <button>🗑️</button>
    </div>
  )
}
