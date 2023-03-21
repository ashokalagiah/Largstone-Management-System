import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Grid, TextField, Typography, Box, Button, } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";




export default function Reuse() {
    const { id } = useParams();

    const navigate = useNavigate()
    const [com, setComp] = useState({});


    useEffect(() => {
        axios.post('http://localhost:3001/master/user/selectId', { id: id }).then((res) => {

            setComp({ ...res.data.result[0] })
        })
    }, [])
    // const EmployeeName = Firstname + Lastname;
    // const userdata = { Role: Role, EmployeeName: EmployeeName, EmailId: EmailId, Contact: Contact, Password: Password, Status: Status, Address: Address, Location: Location, id: id };

    const { register, handleSubmit, formState: { errors } } = useForm();

    const OnSubmit = (data) => {

        axios.post('http://localhost:3001/master/user/update', com).then((res) => {
            // console.log(res)

        })

    }
    const handlesubmit = (e) => {
        e.preventDefault();

    }



    const form = (
        < Box sx={{ marginTop: '35px', py: 3, borderRadius: "2px", width: "100%", height: "100%" }}>
            <Typography variant="h4" sx={{ color: "#53687c", textAlign: "center", fontWeight: "600", fontFamily: "cursive" }}>User Details</Typography>

            <form onSubmit={handleSubmit(OnSubmit)} sx={{ padding: "5px", display: "flex" }}>


                <Grid container spacing={3} sx={{ p: 2 }}>
                    <Grid item sm={6} xs={12} md={4} >
                        <TextField
                            disabled
                            id="standard-textarea"
                            label="CompanyID"
                            defaultValue={com.CompanyID}
                            multiline
                            variant="outlined"
                            name="CompanyID"
                            error={Boolean(errors.CompanyID)} helperText={errors.CompanyID?.message}
                            {...register("CompanyID", { required: "Enter the CompanyID", pattern: { value: /^[A-Z][0-9]{3}$/, message: 'CompanyID should start with Upper Case and Must contain three number ' }, maxLength: '15' })}
                            fullWidth size="small" placeholder="CompanyID" onChange={e => com.CompanyID = (e.target.value)}

                        />
                    </Grid>

                    {console.log(com)}
                    <Grid item sm={6} xs={12} md={4} >
                        <TextField
                            id="standard-textarea"
                            label="EmployeeName"
                            defaultValue={com.EmployeeName}
                            multiline
                            variant="outlined"
                            name="EmployeeName"
                            {...register("EmployeeName", { required: "Enter the EmployeeName", pattern: { value: /^[A-Z]{1}[a-z]+$/, message: 'EmployeeName must start with Captial letter' }, maxLength: { value: 12, message: 'maximum length is 12 ' }, })}
                            error={Boolean(errors.Firstname)} helperText={errors.Firstname?.message}
                            fullWidth size="small" placeholder="EmployeeName"
                            onChange={(e) => com.EmployeeName = (e.target.value)}
                        />
                    </Grid>

                    <Grid item sm={6} md={4} xs={12} >
                        <TextField
                            select
                            id="standard-textarea"
                            label="Role"
                            defaultValue={com.Role}
                            multiline
                            variant="outlined"
                            name="Role"
                            {...register("Role", { required: "Enter the Role", pattern: { message: 'Select the role' }, maxLength: { value: 7, message: 'maximum length is 7 ' }, })}
                            error={Boolean(errors.Role)} helperText={errors.Role?.message}
                            fullWidth size="small" placeholder="Role" onChange={e => com.Role = (e.target.value)}>
                            <MenuItem value='Admin'>Admin</MenuItem>
                            <MenuItem value='Manager'>Manager</MenuItem>
                        </TextField>
                    </Grid>


                    <Grid item sm={12} md={4} xs={12} >
                        <TextField
                            id="standard-textarea"
                            label="EmailId"
                            multiline
                            variant="outlined"
                            type="email"
                            name="EmailId"
                            defaultValue={com.EmailId}
                            error={Boolean(errors.EmailId)} helperText={errors.EmailId?.message}
                            {...register("EmailId", { required: "Enter the EmailId", pattern: { value: /^[a-z0-9]+[@][a-z]{5}\.com$/, message: 'Email Id must be in lower Case and end with .com ' }, maxLength: '100' })}
                            fullWidth size="small" placeholder="EmailId" onChange={e => com.EmailId = (e.target.value)}
                        />
                    </Grid>

                    <Grid item sm={6} xs={12} md={4} >
                        <TextField
                            id="standard-textarea"
                            label="Contact"
                            defaultValue={com.Contact}
                            multiline
                            variant="outlined"
                            name="Contact"
                            {...register("Contact", { required: "Enter the Contact number", pattern: { value: /^[0-9]{10}$/, message: 'Contact must have 10 numbers' }, maxLength: { value: 12, message: 'maximum length is 12 ' }, })}
                            error={Boolean(errors.Contact)} helperText={errors.Contact?.message}
                            fullWidth size="small" placeholder="Contact" onChange={e => com.Contact = (e.target.value)}
                        />
                    </Grid>

                    <Grid item sm={6} xs={12} md={4} >
                        <TextField
                            id="standard-password-input"

                            label="Password"
                            defaultValue={com.Password}
                            multiline
                            variant="outlined"
                            name="Password"
                            {...register("Password", { required: "Enter the Password", pattern: { value: /^[a-zA-Z]+(?=.*[@#!$%&*()_-])[0-9]+/, message: 'password must contain letters,number and special character' }, maxLength: { value: 15, message: 'maximum length is 15 ' }, })}
                            error={Boolean(errors.Password)} helperText={errors.Password?.message}
                            fullWidth size="small" placeholder="Password" onChange={e => com.Password = (e.target.value)}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12} md={4} >
                        <TextField
                            select
                            id="standard-password-input"
                            label="Status"
                            name="Status"
                            multiline
                            defaultValue={com.Status}
                            variant="outlined"
                            {...register("Status", { required: "Enter the Status", pattern: { value: /^[A]\ctive || ^[I]\nactive/, }, maxLength: { value: 10, message: 'maximum length is 10 ' }, })}
                            error={Boolean(errors.Status)} helperText={errors.Status?.message}
                            fullWidth size="small" placeholder="Status" onChange={e => com.Status = (e.target.value)}
                        >
                            <MenuItem value='Active'>Active</MenuItem>
                            <MenuItem value='Inactive'>Inactive</MenuItem>
                        </TextField>

                    </Grid>

                    <Grid item sm={6} xs={12} md={4} >
                        <TextField sx={{}}
                            id="standard-textarea"
                            label="Address"
                            multiline
                            defaultValue={com.Address}
                            variant="outlined"
                            name="Address"
                            error={Boolean(errors.Address)} helperText={errors.Address?.message}
                            {...register("Address", { required: "Enter the Address", pattern: { value: /^[A-Za-z1-9]+\s*/, message: 'enter the valid Address  ' }, maxLength: '60' })}
                            fullWidth size="small" placeholder="Address" onChange={e => com.Address = (e.target.value)}

                        />
                    </Grid>
                    <Grid item sm={6} xs={12} md={4} >
                        <TextField sx={{}}
                            id="standard-textarea"
                            label="Location"
                            defaultValue={com.Location}
                            multiline
                            variant="outlined"
                            name="Location"
                            error={Boolean(errors.Location)} helperText={errors.Location?.message}
                            {...register("Location", { required: "Enter the Location", pattern: { value: /^[A-Za-z]{4,15}/, message: 'Location should start with Upper Case and End with integer ' }, maxLength: '15' })}
                            fullWidth size="small" placeholder="Location" onChange={e => com.Location = (e.target.value)}

                        />
                    </Grid>
                </Grid>
                <Grid item sx={{ p: 1, marginLeft: "12px" }}>
                    <Button variant="contained" type='submit' disableRipple disableElevation sx={{ my: 5, background: 'rgba(26,188,156,255)' }}>UPDATE</Button>
                </Grid>

            </form>

        </Box >

    )
    return (
        <Box>
            {form}
        </Box>

    )




}