import React, { useState } from 'react'
import CompanyItem from '../CompanyItem/CompanyItem'
import "./styles.css"

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
        // console.log(companies)

    const [input, setInput] = useState<string>("")
    const [search, setSearch] = useState<string>("")
    const [sort, setSort] = useState<string>("")

    const onClickAdd = (input: string) => {
        setCompanies([...companies, {id: Math.max(...companies.map(c => c.id)) + 1, name: input}])
    }

    const onClickRemove = (idToRemove: number) => {
        const updatedList = companies.filter((company: Company) => company.id !== idToRemove)
        setCompanies(updatedList)
    }

    const compare_name = (company1: Company, company2: Company) => {
        return company1.name.localeCompare(company2.name)
    }
    const compare_name_reverse = (company1: Company, company2: Company) => {
        return company2.name.localeCompare(company1.name)
    }
    const sortedCompanies = [...companies].sort(sort === "" ? compare_name_reverse : compare_name)

    const sorting = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(event.target.value)
              }

  return (
    <div>
        <input placeholder="🔍  Search" value={search} onChange={(event) => setSearch(event.target.value)}/>
        <input placeholder="New company" value={input} onChange={(event) => setInput(event.target.value)}/>
        <button onClick={() => 
            {onClickAdd(input)
            setInput("")}}>➕</button>
        <table>
            <thead >
                Company name
                <select value={sort} onChange={sorting}>
                    <option value="name"> A-Z </option>
                    <option value=""> Z-A </option>
                </select>
            </thead>
            <tbody>
            {sortedCompanies
            .filter((company) => company.name.toLowerCase().includes(search.toLowerCase()))
            .map(company => (
                <tr key={company.id}>
                    <CompanyItem id={company.id} name={company.name} onClickRemove={onClickRemove}/>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
  )
}
