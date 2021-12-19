import React, { useContext,useEffect } from 'react'
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Publisher from './pages/Publisher';
import { ContextNews } from './context/newsContext';
import axios from 'axios';

export default function Main() {
    const [state,setState]=useContext(ContextNews);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get(process.env.REACT_APP_JSON_URL);
                const data=response.data;
                if(Array.isArray(data)){
                    let newData={};
                    data.forEach(item=>{
                        const publisher=item.PUBLISHER.replaceAll("\\","");
                        item.PUBLISHER=publisher;

                        if(newData[publisher]){
                            newData[publisher]=[...newData[publisher],item]
                        }
                        else{
                            newData[publisher]=[item] 
                        }
                    })
                    setState(newData);
                }
            }
            catch(e){
              alert(e.message||"error in fetching data");
            }
        }
        if(!Object.keys(state).length){
            fetchData();
        }
    },[])

    return (
        <Container sx={{bgcolor:"#28bbbb1a",p:2,minHeight:"100vh"}}>
        <Routes>
            <Route exact path={"/"} element={<Home/>}/>
            <Route path={"/:id"} element={<Publisher/>}/>
        </Routes>
      </Container>
    )
}
