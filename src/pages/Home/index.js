import axios from 'axios'
import React, { useEffect,useContext} from 'react'
import { ContextNews } from '../../context/newsContext';
import {useNavigate} from "react-router-dom"
import { Button, Container } from '@mui/material';

export default function Home(props) {

    const [state,setState] = useContext(ContextNews);
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get(process.env.REACT_APP_JSON_URL);
                const data=response.data;
                if(Array.isArray(data)){
                    let newData={};
                    data.forEach(item=>{
                        const publisher=item.PUBLISHER.replaceAll("\\","");;
                        item.PUBLISHER=publisher;

                        if(newData[publisher]){
                            newData[publisher]=[...newData[publisher],item]
                        }
                        else{
                            newData[publisher]=[item] 
                        }
                    })
                    console.log(newData);
                    setState(newData);
                }
            }
            catch(e){
                console.log(e)
            }
        }
        if(!Object.keys(state).length){
            fetchData();
        }
    },[])

    const handleClick=(id)=>{
        navigate(`/${id}`);
    }

    return (
        <>
         {
             Object.keys(state).map(item=>{
                 return(
                         <Button sx={{m:2}} variant='contained' onClick={()=>handleClick(item)}>
                         {item}
                         </Button>
                 );
             })
         }
        </>
    )
}
