import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Breadcrumbs, Button, Divider, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import BasicGrid from '../../Components/Card/Card';
import Echarts from '../../Components/Chart/Chart';


export default function Dashboard() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const btn = [
        {
            height: '30px', cursor: 'pointer', padding: '5px 8px', backgroundColor: 'white', color: 'black', border: '1px solid #e7eaf0', marginTop: '20px', marginRight: '28px',
            "&:hover": { backgroundColor: '#e7eaf0', border: '1px solid #e7eaf0' }
        }
    ]

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    const breadcrumbs = [
        <a underline="hover" key="1" color="inherit" onClick={handleClick}>
            Dashboard
        </a>,
        <Typography sx={{ fontSize: '14px' }}>
            Default
        </Typography>,
    ];

    return (
        <Box sx={{ width: '100%', padding: '44px 20px', background: '#fff' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', xs: { flexDirection: 'column' } }}>
                <div sx={{ padding: '7px', background: 'transparent' }}>
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#706f9a' }}> Dashboard</span>

                </div>

                <Box sx={{ display: '' }}>
                    <ListItemButton sx={{ backgroundColor: '#567aed', "&:hover": { background: '#4a4dc4', boxShadow: '0px 0px 12px #4a4dc4' }, color: 'white', padding: '5px', border: 'none', borderRadius: '8px' }}>
                        <ListItemIcon sx={{ color: 'white', minWidth: '10px' }}></ListItemIcon><span style={{ fontSize: '14px', textAlign: 'center', padding: '8px 0px' }}>Create Report</span>
                    </ListItemButton>
                </Box>
            </Box>
            <Box style={{ width: '257px' }}>
                <Stack spacing={2}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ color: '#59748a', fontSize: '14px' }}>
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>
            </Box>

            < Box sx={{ padding: '15px 0' }}>
                <Grid container rowSpacing={1} columnSpacing={2} >
                    <Grid md={12} sm={12} xs={12} lg={8} >
                        <Item sx={{ height: '385px', borderRadius: '10px', border: '1px solid #e7eaf0', boxShadow: 'none', border: '1px solid #efeaf0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', padding: '0 10px' }}>Orders</p>
                                <Button sx={btn} variant="outlined" >
                                    Export
                                </Button>
                            </div>
                            <Divider />
                            <Echarts />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <BasicGrid />
            {/* <DataTable /> */}
        </Box >
    );
}

