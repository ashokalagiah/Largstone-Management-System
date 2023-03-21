

import { Box } from '@mui/system';
import Employee from '../Components/DataTable/CommonTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function EmployeeDetails() {
    const header = ["Employee Id", "Employee Name", "Designation", "Status", "Contact", "Address", "Location",];

    const value = [{ ["Employee Id"]: 'E1101', ["Employee Name"]: 'Yuvaraj', Designation: 'Developer', Status: 'Active', Contact: 'Yuvaraj124@gmail.com', Address: '24,AQ Flat,Padappai', Location: 'Chennai', },
    { ["Employee Id"]: 'E1104', ["Employee Name"]: 'Karthick', Designation: 'Software Engineer', Status: 'Active', Contact: 'KarthickEms01@gmail.com', Address: '121, F1 street,siripuram', Location: 'madurai', },
    { ["Employee Id"]: 'E1121', ["Employee Name"]: 'Vikram', Designation: 'Software Developer', Status: 'Active', Contact: 'Vikram007@gmail.com', Address: '24,East tambaram street', Location: 'kancheepuram', }

    ]
    return (

        <Employee head={header} value={value} path="/EmployeeForm" typo="Employee Details" />
    )
}