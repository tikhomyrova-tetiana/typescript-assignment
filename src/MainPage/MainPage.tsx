import React, { useState } from 'react'
import CompanyItem from '../CompanyItem/CompanyItem'

type Company = {id: number, name: string}

export default function MainPage() {

    const [companies, setCompanies] = useState<Company[]>([
        { "id": 145, "name": "Google" },
        { "id": 496, "name": "Amazon" },
        { "id": 129, "name": "Facebook" },
        { "id": 593, "name": "Apple" },
        { "id": 952, "name": "Samsung" },
        { "id": 819, "name": "Microsoft" },
        { "id": 427, "name": "Tesla" },
        { "id": 901, "name": "Alibaba" }])

    const [input, setInput] = useState<string>("")

    const onClickAdd = (input: string) => {
        setCompanies([...companies, {id: companies.length + 1, name: input}])
    }
    console.log(companies)

  return (
    <div>
        <input placeholder="New company" value={input} onChange={(event) => setInput(event.target.value)}/>
        <button onClick={() => 
            {onClickAdd(input)
            setInput("")}}>➕</button>
            
        {companies
        .map(c => (
        <CompanyItem id={c.id} name={c.name}/>
        ))}
        </div>
  )
}
