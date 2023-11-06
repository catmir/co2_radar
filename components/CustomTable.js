import data from '@/public/data.json'
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const CustomTable = () => {
    const [polluters, setPolluters] = useState([]);
    const [filteredPolluters, setFilteredPolluters] = useState([]);

    const getPolluters = () => {
        setPolluters(data);
        setFilteredPolluters(data);
    }

    const columns = [
        {
            name: "Rank",
            selector: row => row.rank,
            sortable: true
        },
        {
            name: "Company Name",
            selector: row => row.companyName,
            sortable: true
        },
        {
            name: "Country",
            selector: row => row.country,
            sortable: true
        },
        {
            name: "CO2 (in metric tons)",
            selector: row => row.co2,
            sortable: true
        }
    ]

    useEffect(() => {
        getPolluters();
    },[])

    const handleFilter = (event) => {
        const chosenPolluters = filteredPolluters.filter(row => row.companyName.toLowerCase().includes(event.target.value.toLowerCase()));
        setPolluters(chosenPolluters);
    }
 
    const handleFilter2 = (event) => {
        const chosenPolluters = filteredPolluters.filter(row => row.country.toLowerCase().includes(event.target.value.toLowerCase()));
        setPolluters(chosenPolluters);
    }
    
    
    return (
        <div>
            <span><input type="text" id="companySearch" onChange={handleFilter} placeholder="Search Company"/></span>
            <span><input type="text" id="countrySearch" onChange={handleFilter2} placeholder="Search Country"/></span>
            <DataTable
                columns={columns}
                data={polluters}
                striped={true}
                pagination
                fixedHeader
            />
        </div>
    )
}

export default CustomTable;