
import { Grid, Table, TableCell, TableRow } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import Dashboard from "../Pages/Dashboard/DashboardPage";
import EmployeeDetails from "../Pages/Employeepage";
import EmployeeForm from "../Components/Forms/EmployeeForm";
import Userform from "../Components/Forms/userform";
import User from "../Pages/user";
import Loginpage from "../Components/Forms/EmployeeForm";
import ResponsiveDrawer from "../Components/SideBar";
import EmployeeAttendance from "../Pages/Employee_Attedance";
import Task from '../Pages/Task'
import Reuse from "../Components/Forms/UserEditform";
import UserView from "../Pages/UserViewpage";







export default function AdminPages() {
    return (
        <>
            <BrowserRouter>
                <Grid container>
                    <Grid item xs={12} >
                        <ResponsiveDrawer />
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container sx={{ marginLeft: { md: '258px', sm: '240px' }, width: 'auto', }}>
                            <Grid item xs={12} sm={12} md={12}>

                                <Routes>
                                    <Route path="/Dashboard" element={<Dashboard />}></Route>
                                    <Route path="/Employee Attedance" element={<EmployeeAttendance />}></Route>
                                    <Route path="/EmployeeDetails" element={<EmployeeDetails />}></Route>
                                    <Route path="/Task" element={<Task />}></Route>
                                    <Route path="/user" element={<User />}></Route>
                                    <Route path="/userform" element={<Userform />}></Route>


                                </Routes>

                                <Routes>
                                    <Route path="/EmployeeForm" element={<EmployeeForm />}></Route>
                                    <Route path="/editform/:id" element={<Reuse />}></Route>
                                    <Route path="/UserView/:id" element={<UserView />}></Route>



                                </Routes>
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
            </BrowserRouter>


        </>
    );
}


