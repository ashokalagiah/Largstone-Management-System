
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Grid, TextField, Typography, Box, Button, InputAdornment, MenuItem } from "@mui/material";
import { styled } from "@mui/system";



export default function Loginpage() {

    const [EmployeeID, EmployeeIDChange] = useState(" ");
    const [FirstName, FirstNameChange] = useState(" ");
    const [LastName, LastNameChange] = useState(" ");
    const [Designation, DesignationChange] = useState(" ");
    const [Status, StatusChange] = useState(" ");
    const [Email, EmailChange] = useState(" ");
    const [Address, AddressChange] = useState(" ");
    const [Location, LocationChange] = useState(" ");

    console.log(EmployeeID)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const OnSubmit = (data) => console.log(data);
    console.log(errors);

    const handlesubmit = (e) => {
        e.preventDefault();

    }
    const StyledTextField = styled(TextField, {
        name: "StyledTextField",
    })({
        width: 300,
        height: 40

    });
    const form = (
        <form onSubmit={handleSubmit(OnSubmit)} style={{ marginTop: '40px' }}>
            <Typography variant="h4" sx={{ color: "#53687c", backgroundColor: "", borderRadius: "15px", textAlign: "center", fontWeight: "600", fontFamily: "cursive", }}>Employee Form</Typography>

            <Grid container spacing={3} sx={{ p: 2 }}>
                <Grid item sm={6} md={4} xs={12} >
                    <TextField
                        id="standard-textarea"
                        label="EmployeeID"
                        multiline
                        variant="outlined"
                        name="EmployeeID"
                        error={Boolean(errors.EmployeeID)} helperText={errors.EmployeeID?.message}
                        {...register("EmployeeID", { required: "Enter the EmployeeID", pattern: { value: /^[A-Z][0-9]{4}$/, message: 'EmployeeID should start with one Capital & End with integer ' }, maxLength: { value: 5, message: 'Enter maximum 5 character' } })}
                        fullWidth size="small" placeholder="EmployeeID" onChange={e => EmployeeIDChange(e.target.value)}
                    />
                </Grid>

                <Grid item sm={6} md={4} xs={12} >
                    <TextField
                        id="standard-textarea"
                        label="FirstName"
                        multiline
                        variant="outlined"
                        name="FirstName"
                        error={Boolean(errors.FirstName)} helperText={errors.FirstName?.message}
                        {...register("FirstName", { required: "Enter the FirstName", pattern: { value: /^[A-Za-z]+/, message: 'FirstName should start with Upper Case and End with integer ' }, maxLength: '15' })}
                        fullWidth size="small" placeholder="FirstName" onChange={e => FirstNameChange(e.target.value)}
                    />
                </Grid>
                <Grid item sm={6} md={4} xs={12}  >
                    <TextField
                        id="standard-textarea"
                        label="LastName"
                        multiline
                        variant="outlined"
                        name="LastName"
                        error={Boolean(errors.LastName)} helperText={errors.LastName?.message}
                        {...register("LastName", { required: "Enter the LastName", pattern: { value: /^[A-Za-z]+/, message: 'LastName should start with Upper Case and End with integer ' }, maxLength: '15' })}
                        fullWidth size="small" placeholder="LastName" onChange={e => LastNameChange(e.target.value)}
                    />
                </Grid>

                <Grid item sm={6} md={4} xs={12}  >
                    <TextField
                        select
                        id="standard-textarea"
                        label="Status"
                        multiline
                        variant="outlined"
                        name="Status"
                        error={Boolean(errors.Status)} helperText={errors.Status?.message}
                        {...register("Status", { required: "Select the Status", pattern: { value: /^[A-Za-z]+/, }, maxLength: '15' })}
                        fullWidth size="small" placeholder="Status" onChange={e => StatusChange(e.target.value)}
                    >
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="Inactive">Inactive</MenuItem>
                    </TextField>
                </Grid>
                <Grid item sm={6} md={4} xs={12}  >

                    <TextField
                        id="standard-textarea"
                        label="Address"
                        multiline
                        variant="outlined"
                        name="Address"
                        error={Boolean(errors.Address)} helperText={errors.Address?.message}
                        {...register("Address", { required: "Enter the Address", pattern: { value: /[a-zA-z]\s/ }, maxLength: { value: '50', message: 'Enter Maximum Character' } })}
                        fullWidth size="small" placeholder="Address" onChange={e => AddressChange(e.target.value)}
                    />
                </Grid>
                <Grid item sm={6} md={4} xs={12}  >
                    <TextField
                        id="standard-textarea"
                        label="Email"
                        multiline
                        variant="outlined"
                        name="Email"
                        error={Boolean(errors.Email)} helperText={errors.Email?.message}
                        {...register("Email", { required: "Enter the Email", pattern: { value: /^[a-z0-9]+[@][a-z]{5}\.com$/, message: 'please check the mail format ' }, maxLength: '50' })}
                        fullWidth size="small" placeholder="Email" onChange={e => EmailChange(e.target.value)}
                    />
                </Grid>


                <Grid item sm={6} md={4} xs={12}  >
                    <TextField
                        id="standard-textarea"
                        label="Location"
                        multiline
                        variant="outlined"
                        name="Location"
                        error={Boolean(errors.Location)} helperText={errors.Location?.message}
                        {...register("Location", { required: "Enter the Location", pattern: { value: /^[a-zA-z]+\s/, }, maxLength: '15' })}
                        fullWidth size="small" placeholder="Location" onChange={e => LocationChange(e.target.value)}
                    />
                </Grid>
                <Grid item sm={6} md={4} xs={12}  >
                    <TextField
                        id="standard-textarea"
                        label="Designation"
                        multiline
                        variant="outlined"
                        name="Designation"
                        error={Boolean(errors.Designation)} helperText={errors.Designation?.message}
                        {...register("Designation", { required: "Enter the Designation", pattern: { value: /^[A-Z]{1}[A-Za-z]+\s/, message: 'Designation should start with uppercase' }, })}
                        fullWidth size="small" placeholder="Designation" onChange={e => DesignationChange(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Button variant="contained" type='submit' disableRipple disableElevation sx={{ my: 4, mx: 4, background: 'rgba(26,188,156,255)' }}>Add</Button>

        </form>

    )

    return (
        <Box>

            {form}
        </Box>


    )
}