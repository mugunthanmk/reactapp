import React, {useContext} from 'react'
import { ContextNews } from '../../context/newsContext';
import {useNavigate} from "react-router-dom"
import { Button} from '@mui/material';

export default function Home(props) {

    const [state] = useContext(ContextNews);
    const navigate=useNavigate();

    const handleClick=(id)=>{
        navigate(`/${id}`);
    }

    return (
        <>
         {
             Object.keys(state).map((item,index)=>{
                 return(
                         <Button key={index} sx={{m:2}} variant='contained' onClick={()=>handleClick(item)}>
                         {item}
                         </Button>
                 );
             })
         }
        </>
    )
}
