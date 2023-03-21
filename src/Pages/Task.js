import { Link } from "react-router-dom";
import Employee from "../Components/DataTable/CommonTable";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from "@mui/system";
import { color } from "echarts";





export default function Task() {

    const head = ["Task Name", 'Task id', "Start date", "End date", "Delay reason", "Employee name", "Employee id", "Status", "Action"];


    const value = [{ ["Task Name"]: 'Table', ["Task id"]: 'A1', ["Start date"]: '11/12/23', ["End date"]: '20/12/23', ["Delay reason"]: "Nil", ["Employee name"]: "Ashok", ["Employee id"]: "A104", ["Status"]: "Completed", Action: <Box><EditIcon sx={{ color: "blue" }} /><DeleteIcon sx={{ color: "red" }} /></Box> },
    { ["Task Name"]: 'Navbar', ["Task id"]: 'A2', ["Start date"]: '11/12/23', ["End date"]: '20/12/23', ["Delay reason"]: "Nil", ["Employee name"]: "Ashok", ["Employee id"]: "A104", ["Status"]: "Completed", Action: <Box><EditIcon sx={{ color: "blue" }} /><DeleteIcon sx={{ color: "red" }} /></Box> },
    { ["Task Name"]: 'Sidebar', ["Task id"]: 'A3r', ["Start date"]: '11/12/23', ["End date"]: '20/12/23', ["Delay reason"]: "Nil", ["Employee name"]: "Ashok", ["Employee id"]: "A104", ["Status"]: "Completed", Action: <Box><EditIcon sx={{ color: "blue" }} /><DeleteIcon sx={{ color: "red" }} /></Box> },
    { ["Task Name"]: 'Chart', ["Task id"]: 'A4', ["Start date"]: '11/12/23', ["End date"]: '20/12/23', ["Delay reason"]: "Nil", ["Employee name"]: "Ashok", ["Employee id"]: "A104", ["Status"]: "Completed", Action: <Box><EditIcon sx={{ color: "blue" }} /><DeleteIcon sx={{ color: "red" }} /></Box> }]
    return (
        <>

            <Employee head={head} value={value} typo='Task' />
            {/* <Link to='/create' style={{ textDecoration: 'none', color: 'white' }}>
                <Button size={'small'} style={{ maxWidth: '110px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', border: "none", backgroundColor: "#567aed", color: "#fff", padding: "20px 25px", fontSize: "14px", fontFamily: "sans-serif", borderRadius: "5px", textDecoration: "none", display: "flex", gap: "4px" }}><AddCircleOutlineIcon />Add</Button>
            </Link> */}
        </>
    )
}