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
            sortable: true,
            width: "15%"
        },
        {
            name: "Company Name",
            selector: row => row.companyName,
            sortable: true,
            width: "35%"
        },
        {
            name: "Country",
            selector: row => row.country,
            sortable: true,
            width: "30%"
        },
        {
            name: "CO\u2082 (in metric tons)",
            selector: row => row.co2,
            sortable: true,
            width: "20%",
            wrap: false,
            cell: data => data.co2.toLocaleString()
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
        <>
            <div className="row justify-content-evenly py-3 py-xl-4">
                <div className="col-lg-3 fs-5"><input type="text" id="companySearch" onChange={handleFilter} placeholder="Search Company"/></div>
                <div className="col-lg-3 fs-5 mt-3 mt-lg-0"><input type="text" id="countrySearch" onChange={handleFilter2} placeholder="Search Country"/></div>
            </div>
            <div className="row mt-4">
                <DataTable
                    columns={columns}
                    data={polluters}
                    noDataComponent="Sorry, I haven't found any records for that. Please check the spelling."
                    striped={true}
                    pagination
                    fixedHeader
                    customStyles={{
                        rows: {
                            style: {
                                backgroundColor: "#fff",
                              },
                              stripedStyle: {
                                backgroundColor: "#f6f9fc"
                              }
                        },
                      }}
                />
            </div>
        </>
    )
}

export default CustomTable;