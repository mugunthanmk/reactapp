import { Grid, Typography,Box, Card, CardContent, CardActions, Button, Stack, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContextNews } from '../../context/newsContext';
import { getFormattedDate } from '../../utils/helper';

export default function Publisher(props) {
    const {id}=useParams();
    const [gState]=useContext(ContextNews);
    const [state,setState]=useState([]);
    const [search,setSearch]=useState("");
    
    useEffect(()=>{
        const data=gState[id];
        if(Array.isArray(data)){
            data.sort((a,b)=>{
                return b.TIMESTAMP-a.TIMESTAMP
            })
            if(!search){
                setState(data);
            }
            else{
                const filterData=data.filter(item=>{
                    const title=item.TITLE.toLowerCase();
                    const s=search.toLowerCase();
                    return title.includes(s);
                })
                setState(filterData);
            }
        }
    },[search,gState]);

    const handleOnChange=(e)=>{
        setSearch(e.target.value);
    }

    return (
        <>
           <Typography mb={2} variant='h4'>{id}</Typography>
           <Stack mb={2} direction={"row"} justifyContent={"flex-end"}>
                <TextField variant="filled" value={search} onChange={handleOnChange} placeholder='search something...'/>
           </Stack>
           <Box>
                <Grid container spacing={2}>
                {
                state.map((item,index)=>(
                    <Grid item sm={6} xs={12} key={index}>
                       <Card>
                           <CardContent>
                               <Typography sx={{fontWeight:"bold"}}>{item.TITLE}</Typography>
                               <Stack spacing={2}>
                                    <Typography>{item.HOSTNAME}</Typography>
                                    <Typography>Category - {item.CATEGORY}</Typography>
                                    <Typography sx={{whiteSpace:"nowrap"}}>Updated on - {getFormattedDate(item.TIMESTAMP)}</Typography>
                               </Stack>
                           </CardContent>
                           <CardActions>
                           <Button target={"_blank"} href={item.URL} size="small">Learn More</Button>
                           </CardActions>
                       </Card>
                    </Grid>
                ))
                }
                </Grid>
           </Box>
          
        </>
    )
}
