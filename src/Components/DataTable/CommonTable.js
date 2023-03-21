import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { TableCell, TableRow, TableBody, TableHead, Table, Paper, TableContainer, Button, Grid, Typography, Box } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';


const Employee = (prop) => {

    const location = useLocation();
    const navigate = useNavigate();

    const [head, setHead] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        setHead([...prop.head])
        setData([...prop.value])

    }, [prop.head])
    // console.log(value)


    const add = () => {
        axios.post('http://localhost:3001/master/user/View').then((res) => {
            setData([...res.data.result])
            console.log(res)
        })
    }


    const Edit = ({ id }) => {
        navigate(`/editform/${id}`)
    }

    const Delete = ({ id }) => {
        axios.post(`http://localhost:3001/master${location.pathname}/delete`, { id: id }).then((res) => {

        })
        add();

    }
    const View = ({ id }) => {
        navigate(`/UserView/${id}`)


    }




    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        border: '1px solid black',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        right: '0px',
        top: '2px'
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 0, 0, 1),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '2px'
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 0, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '20ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));




    return (
        <Grid container sx={{ marginTop: '50px' }}>
            {/* <Typography style={{ marginLeft: "50px", marginTop: "", color: '#14256a', fontSize: '14px' }}>{prop.typo}</Typography> */}

            <Box sx={{ marginTop: "30px" }}>
                <Typography style={{ marginLeft: "50px", marginTop: "", color: '#14256a', fontSize: '14px' }}>{prop.typo}</Typography>

                <Typography style={{ textAlign: "start", marginLeft: "50px", color: '#14256a' }}>Data Table</Typography>
                <Box sx={{ display: 'flex', gap: "5px", marginLeft: "693px", paddingBottom: '25px' }}>
                    <Box sx={{ flexGrow: 0 }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                    <Link to={prop.path} style={{ textDecoration: 'none', color: 'white' }}>
                        <Button size={'small'} style={{ maxWidth: '110px', maxHeight: '28px', minWidth: '30px', minHeight: '28px', border: "none", backgroundColor: "#567aed", color: "#fff", padding: "18px 25px", fontSize: "14px", fontFamily: "sans-serif", borderRadius: "5px", position: 'relative', right: '0px', textDecoration: "none", display: "flex", gap: "4px" }}><AddCircleOutlineIcon />Add</Button>
                    </Link>
                </Box>
            </Box>
            <br />
            <Grid container>
                <Grid item xs={11} sx={{ marginLeft: "50px" }}>
                    {/* <TableContainer component={Paper}> */}
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: "#F8FAFF", color: "white", fontWeight: "bold" }}>
                            <TableRow sx={{ color: "white", fontWeight: "bold" }}>
                                {head.map((head) => {
                                    return (
                                        <TableCell sx={{ color: "#64c5b1", textAlign: "center", fontWeight: "bold", border: 'none' }}>{head}</TableCell>
                                    )
                                })}
                                <TableCell sx={{ color: "#64c5b1", textAlign: "center", fontWeight: "bold", border: 'none' }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ color: 'black' }}>

                            {data.map((value, index) => {

                                return (
                                    <>
                                        <TableRow>
                                            {head.map((pop) => {
                                                var bg = "yellow";
                                                if (pop.Status === 'Active') {
                                                    bg = "yellow";
                                                }
                                                else {
                                                    bg = 'red';
                                                }

                                                return (
                                                    <>
                                                        <TableCell sx={{ fontSize: '14px', textAlign: "center", color: '#888888', border: 'none', backgroundColor: { bg } }}>{value[pop]}</TableCell>
                                                    </>

                                                )

                                            })}
                                            <TableCell sx={{ fontSize: '14px', textAlign: "center", color: '#888888', border: 'none' }}>
                                                <button onClick={() => View(value)} style={{ border: 'none', color: '#64c5b1', background: 'white', cursor: 'pointer' }}><VisibilityIcon /></button>

                                                <button onClick={() => Edit(value)} style={{ border: 'none', color: 'blue', background: 'white' }}><EditIcon /></button>

                                                <button onClick={() => Delete(value)} style={{ border: 'none', color: 'red', background: 'white' }}><DeleteIcon /></button>
                                            </TableCell>
                                        </TableRow>
                                    </>
                                )
                            })}


                        </TableBody>
                    </Table>
                    {/* </TableContainer> */}
                </Grid>
            </Grid>
        </Grid >
    );
}
export default Employee;