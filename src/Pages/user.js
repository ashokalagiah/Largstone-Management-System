import { Box } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Employee from '../Components/DataTable/CommonTable';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function User() {

    const [Ans, setAns] = useState('');



    useEffect(() => {
        axios.post('http://localhost:3001/master/user/View').then((res) => {
            // console.log(res)

            setAns([...res.data.result])
        })
    }, [])
    // console.log(Ans)
    const head = ["CompanyID", "EmployeeName", "Role", "EmailId", "Contact", "Status", "Address", "Location"];

    const value = [...Ans]


    return (
        <>
            <Employee head={head} value={value} path="/userform" typo="User" />

        </>

    )
}