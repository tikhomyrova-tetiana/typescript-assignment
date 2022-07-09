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


  return (
    <div>{companies.map(c => (<CompanyItem id={c.id} name={c.name}/>))}</div>
  )
}
