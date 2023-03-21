import { Link } from "react-router-dom";
import Employee from "../Components/DataTable/CommonTable";
import { Box } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function EmployeeAttendance() {

    const head = ["Employee ID", 'Employee Name', "Position", "Status", "Punch IN", "Punch OUT", "Action"];

    const value = [{ ['Employee ID']: '1', ['Employee Name']: 'Rajesh', Position: 'Developer', Status: 'Active', ['Punch IN']: '10AM', ['Punch OUT']: "4.30PM", Action: <Box><EditIcon sx={{ color: 'blue' }} /><DeleteIcon sx={{ color: 'red' }} /></Box> },
    { ['Employee ID']: '2', ['Employee Name']: 'suresh', Position: 'Designer', Status: 'Active', ['Punch IN']: '9AM', ['Punch OUT']: "5.00PM", Action: <Box><EditIcon sx={{ color: 'blue' }} /><DeleteIcon sx={{ color: 'red' }} /></Box> },
    { ['Employee ID']: '3', ['Employee Name']: 'kumar', Position: 'Sales Executer', Status: 'Active', ['Punch IN']: '9.30AM', ['Punch OUT']: "5.30PM", Action: <Box><EditIcon sx={{ color: 'blue' }} /><DeleteIcon sx={{ color: 'red' }} /></Box> },
    { ['Employee ID']: '4', ['Employee Name']: 'Ashok', Position: 'CRM', Status: 'Active', ['Punch IN']: '10AM', ['Punch OUT']: "5.00PM", Action: <Box><EditIcon sx={{ color: 'blue' }} /><DeleteIcon sx={{ color: 'red' }} /></Box> }]
    return (
        <>


            <Employee head={head} value={value} path='/AttedanceForm' typo='Employee Attedance' />
            {/* <Link to='/create' style={{ textDecoration: 'none', color: 'white' }}>
                <Button size={'small'} style={{ maxWidth: '110px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', border: "none", backgroundColor: "#567aed", color: "#fff", padding: "20px 25px", fontSize: "14px", fontFamily: "sans-serif", borderRadius: "5px", textDecoration: "none", display: "flex", gap: "4px" }}><AddCircleOutlineIcon />Add</Button>
            </Link> */}
        </>
    )
}