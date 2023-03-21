
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Grid, TextField, Typography, Box, Button, InputAdornment } from "@mui/material";
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';
// import { Link } from "react-router-dom";

export default function Loginpage() {

    const [Username, UsernameChange] = useState(" ");
    const [Password, PasswordChange] = useState(" ");

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const OnSubmit = (data) => console.log(data);
    console.log(errors);

    const handlesubmit = (e) => {
        e.preventDefault();

    }

    const form = (
        <Box sx={{ marginTop: '35px', py: 1, backgroundColor: "rgba(26,188,156,255)", borderRadius: "2px", width: "100%", height: "100%" }}>
            <form onSubmit={handleSubmit(OnSubmit)}>
                <Grid container justifyContent={'center'} sx={{ mt: 3, height: '198px' }}>
                    <Grid item sm={10} md={6} xs={12} sx={{ m: 3, backgroundColor: "#fff", padding: '20px', borderRadius: '20px', display: 'flex', alignItems: 'center', flexDirection: 'column', boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px ' }}>
                        <Typography variant="h4" sx={{ color: "#53687c", backgroundColor: "", borderRadius: "15px", textAlign: "center", fontWeight: "600", fontFamily: "cursive", }}>Loginpage</Typography>

                        <Grid item sm={6} md={6} xs={12} sx={{ m: 2 }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <PersonIcon sx={{ mt: 2, mx: 2 }} />
                                <TextField sx={{}}
                                    id="standard-textarea"
                                    label="Username"
                                    multiline
                                    variant="standard"
                                    name="Username"
                                    error={Boolean(errors.Username)} helperText={errors.Username?.message}
                                    {...register("Username", { required: "Enter the Username", pattern: { value: /^[A-Z]{1}[A-Za-z]+\d+/, message: 'Username should start with Upper Case and End with integer ' }, maxLength: '15' })}
                                    fullWidth size="small" placeholder="Username" onChange={e => UsernameChange(e.target.value)}

                                />
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12} sx={{ m: 1 }}>
                            <div style={{ display: 'flex' }}>
                                <BadgeIcon sx={{ mt: 2, mx: 2 }} />
                                <TextField sx={{}}
                                    id="standard-password-input"
                                    label="Password"
                                    name="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="standard"
                                    {...register("Password", { required: "Enter the Password", pattern: { value: /^[0-9]+$/, message: 'password must be a integer' }, maxLength: { value: 6, message: 'maximum length is 6 ' }, })}
                                    error={Boolean(errors.Password)} helperText={errors.Password?.message}
                                    fullWidth size="small" placeholder="Password" onChange={e => PasswordChange(e.target.value)}
                                />
                            </div>
                        </Grid>

                        <Grid item sx={{ display: "flex", justifyContent: "center", p: 1 }}>
                            <Button variant="contained" type='submit' disableRipple disableElevation sx={{ my: 5, background: 'rgba(26,188,156,255)' }}>Login</Button>
                        </Grid>
                    </Grid >
                </Grid>
            </form>
        </Box >
    )

    return (
        <Grid container>
            {form}
        </Grid>
    )
}