import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import HistoryToggleOffRoundedIcon from '@mui/icons-material/HistoryToggleOffRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const array = [
    {
        h3: 'Budget',
        h1: '$750.90',
        span: '30%',
        arrow: <ArrowUpwardIcon sx={{ fontSize: '14px', margin: '-2px 3px' }} />,
        p: 'Since last month',
        icon: <CreditCardRoundedIcon sx={{ width: '48px', height: '48px', backgroundColor: '#ff579a', borderRadius: '50%', padding: '13px' }} />
    }, {
        h3: 'NewProjects',
        h1: '215',
        arrow: <ArrowUpwardIcon sx={{ fontSize: '14px', margin: '-2px 3px' }} />,
        span: '23%',
        p: 'Since last week',
        icon: <GroupRoundedIcon sx={{ width: '48px', height: '48px', backgroundColor: '#8957ff', borderRadius: '50%', padding: '13px' }} />
    },
    {
        h3: 'Total hours',
        h1: '1.400',
        span: '-10%',
        arrow: <ArrowDownwardIcon sx={{ fontSize: '14px', margin: '-3px 3px' }} />,
        p: 'Since last month',
        icon: <HistoryToggleOffRoundedIcon sx={{ width: '48px', height: '48px', backgroundColor: '#33adff', borderRadius: '50%', padding: '13px' }} />
    },
    {
        h3: 'Work load',
        h1: '95%',
        arrow: <ArrowUpwardIcon sx={{ fontSize: '14px', margin: '-2px 3px' }} />,
        span: '15%',
        p: 'Since yesterday',
        icon: <ShoppingCartRoundedIcon sx={{ width: '48px', height: '48px', backgroundColor: '#ffa333', borderRadius: '50%', padding: '13px' }} />
    }
];



export default function BasicGrid() {

    return (


        <Grid container spacing={2} sx={{ margin: 0, background: '#fff', width: '100%' }}>
            {array.map((a) => {
                let bg = '#ccf5e7'
                let clr = 'green'

                if (a.span.includes('-')) {
                    bg = '#ffd6e0'
                    clr = 'red'
                }
                else {
                    bg = '#ccf5e7'
                    clr = '#00cc88'
                }

                return (
                    <>
                        <Grid md={6} sm={6} lg={3} xs={12} >
                            <Item sx={{ lineHeight: '17px', textAlign: 'left', borderRadius: '15px', boxShadow: 'none', border: '1px solid #efeaf0', paddingBottom: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <h3 style={{ fontSize: '14px' }}>{a.h3}</h3>
                                        <h1 style={{ color: 'black', fontSize: '24px' }}>{a.h1}</h1>
                                    </div>
                                    <div style={{ width: '40px', height: '40px', color: 'white', position: 'relative', top: '10px', left: '-17px' }}>
                                        {a.icon}
                                    </div>
                                </div>
                                <span style={{ fontSize: '10px', fontWeight: '700', color: clr, backgroundColor: bg, padding: '6px 9px', borderRadius: '8px' }}><span style={{ fontSize: '20px', m: '-3px 3px' }}>{a.arrow}</span>{a.span}</span><span style={{ fontSize: '12px', padding: '8px' }}>{a.p}</span>
                            </Item>
                        </Grid>

                    </>
                )
            })}
        </Grid>

    )

}