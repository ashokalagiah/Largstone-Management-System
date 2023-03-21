import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Grid, TextField, Typography, Box, Button, } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";
import { useNavigate } from "react-router-dom";




export default function Userform() {

    const navigate = useNavigate()
    const [CompanyID, CompanyIDchange] = useState("");
    const [Role, Rolechange] = useState("");
    const [Firstname, Firstnamechange] = useState("");
    const [Lastname, Lastnamechange] = useState("");
    const [EmailId, EmailIdchange] = useState("");
    const [Contact, Contactchange] = useState("");
    const [Password, PasswordChange] = useState(" ");
    const [Status, Statuschange] = useState(" ");
    const [Address, Addresschange] = useState(" ");
    const [Location, Locationchange] = useState(" ");




    const { register, handleSubmit, formState: { errors } } = useForm();
    const OnSubmit = (data) => {
        axios.post('http://localhost:3001/master/user/post', userdata).then((res) => {

            (res.data.result ? navigate('/user') : alert(res.data.result))

        })

    }

    const handlesubmit = (e) => {
        e.preventDefault();
    }
    const EmployeeName = Firstname + Lastname;
    const userdata = { CompanyID, Role, EmployeeName, EmailId, Contact, Password, Status, Address, Location };



    const form = (
        < Box sx={{ marginTop: '35px', py: 3, borderRadius: "2px", width: "100%", height: "100%" }}>
            <Typography variant="h4" sx={{ color: "#53687c", textAlign: "center", fontWeight: "600", fontFamily: "cursive" }}>User Details</Typography>

            <form onSubmit={handleSubmit(OnSubmit)} sx={{ padding: "5px", display: "flex" }}>


                <Grid container spacing={3} sx={{ p: 2 }}>
                    <Grid item sm={6} xs={12} md={4} >
                        <TextField
                            id="standard-textarea"
                            label="CompanyID"
                            multiline
                            variant="outlined"
                            name="CompanyID"
                            error={Boolean(errors.CompanyID)} helperText={errors.CompanyID?.message}
                            {...register("CompanyID", { required: "Enter the CompanyID", pattern: { value: /^[A-Z][0-9]{3}$/, message: 'CompanyID should start with Upper Case and Must contain three number ' }, maxLength: '15' })}
                            fullWidth size="small" placeholder="CompanyID" onChange={e => CompanyIDchange(e.target.value)}

                        />
                    </Grid>
                    <Grid item sm={6} xs={12} md={4} >
                        <TextField
                            id="standard-textarea"
                            label="Firstname"
                            name="Firstname"
                            type="text"
                            variant="outlined"
                            {...register("Firstname", { required: "Enter the Firstname", pattern: { value: /^[A-Z]{1}[a-z]{4,11}$/, message: 'Firstname must start with Captial letter' }, maxLength: { value: 12, message: 'maximum length is 12 ' }, })}
                            error={Boolean(errors.Firstname)} helperText={errors.Firstname?.message}
                            fullWidth size="small" placeholder="Firstname" onChange={e => Firstnamechange(e.target.value)}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12} md={4} >

                        <TextField
                            id="standard-textarea"
                            label="Lastname"
                            name="Lastname"
                            type="text"
                            variant="outlined"
                            {...register("Lastname", { required: "Enter the Lastname", pattern: { value: /^[A-Za-z]{3,12}$/, message: 'Lastname must start with Captial letter' }, maxLength: { value: 12, message: 'maximum length is 12 ' }, })}
                            error={Boolean(errors.Lastname)} helperText={errors.Lastname?.message}
                            fullWidth size="small" placeholder="Lastname" onChange={e => Lastnamechange(e.target.value)}
                        />
                    </Grid>
                    <Grid item sm={6} md={4} xs={12} >
                        <TextField
                            select
                            id="standard-textarea"
                            label="Role"
                            name="Role"
                            type="text"
                            variant="outlined"
                            {...register("Role", { required: "Enter the Role", pattern: { message: 'Select the role' }, maxLength: { value: 7, message: 'maximum length is 7 ' }, })}
                            error={Boolean(errors.Role)} helperText={errors.Role?.message}
                            fullWidth size="small" placeholder="Role" onChange={e => Rolechange(e.target.value)}>
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
                            // type="email"
                            name="EmailId"
                            error={Boolean(errors.EmailId)} helperText={errors.EmailId?.message}
                            {...register("EmailId", { required: "Enter the EmailId", pattern: { value: /^[a-z0-9]+[@][a-z]{5}\.com$/, message: 'Email Id must be in lower Case and end with .com ' }, maxLength: '100' })}
                            fullWidth size="small" placeholder="EmailId" onChange={e => EmailIdchange(e.target.value)}
                        />
                    </Grid>

                    <Grid item sm={6} xs={12} md={4} >
                        <TextField
                            id="standard-textarea"
                            label="Contact"
                            name="Contact"
                            type="text"
                            variant="outlined"
                            {...register("Contact", { required: "Enter the Contact number", pattern: { value: /^[0-9]{10}$/, message: 'Contact must have 10 numbers' }, maxLength: { value: 12, message: 'maximum length is 12 ' }, })}
                            error={Boolean(errors.Contact)} helperText={errors.Contact?.message}
                            fullWidth size="small" placeholder="Contact" onChange={e => Contactchange(e.target.value)}
                        />
                    </Grid>

                    <Grid item sm={6} xs={12} md={4} >
                        <TextField sx={{}}
                            id="standard-password-input"
                            label="Password"
                            name="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            {...register("Password", { required: "Enter the Password", pattern: { value: /^[a-zA-Z]+(?=.*[@#!$%&*()_-])[0-9]+/, message: 'password must contain letters,number and special character' }, maxLength: { value: 15, message: 'maximum length is 15 ' }, })}
                            error={Boolean(errors.Password)} helperText={errors.Password?.message}
                            fullWidth size="small" placeholder="Password" onChange={e => PasswordChange(e.target.value)}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12} md={4} >
                        <TextField
                            select
                            id="standard-password-input"
                            label="Status"
                            name="Status"
                            type="text"
                            autoComplete="current-Status"
                            variant="outlined"
                            {...register("Status", { required: "Enter the Status", pattern: { value: /^[A]\ctive || ^[I]\nactive/, }, maxLength: { value: 10, message: 'maximum length is 10 ' }, })}
                            error={Boolean(errors.Status)} helperText={errors.Status?.message}
                            fullWidth size="small" placeholder="Status" onChange={e => Statuschange(e.target.value)}
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
                            variant="outlined"
                            name="Address"
                            error={Boolean(errors.Address)} helperText={errors.Address?.message}
                            {...register("Address", { required: "Enter the Address", pattern: { value: /^[A-Za-z1-9]+\s*/, message: 'enter the valid Address  ' }, maxLength: '60' })}
                            fullWidth size="small" placeholder="Address" onChange={e => Addresschange(e.target.value)}

                        />
                    </Grid>
                    <Grid item sm={6} xs={12} md={4} >
                        <TextField sx={{}}
                            id="standard-textarea"
                            label="Location"
                            multiline
                            variant="outlined"
                            name="Location"
                            error={Boolean(errors.Location)} helperText={errors.Location?.message}
                            {...register("Location", { required: "Enter the Location", pattern: { value: /^[A-Za-z]{4,15}/, message: 'Location should start with Upper Case and End with integer ' }, maxLength: '15' })}
                            fullWidth size="small" placeholder="Location" onChange={e => Locationchange(e.target.value)}

                        />
                    </Grid>
                </Grid>
                <Grid item sx={{ p: 1, marginLeft: "12px" }}>
                    <Button variant="contained" type='submit' disableRipple disableElevation sx={{ my: 5, background: 'rgba(26,188,156,255)' }}>Add</Button>
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