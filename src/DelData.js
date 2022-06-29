import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './Header.css'
import Box from "@mui/material/Box";
import Button from '@mui/material/Button'
import axios from "axios";

export default function DelData(props) {
  
  const [openDel, setDel] = useState(false);
  const handleCloseDel = () => {
    setDel(false)
  }
  const handleOpenDel = () => {
    setDel(true);
  }
  const sl_no = props.data[0]
  // console.log(sl_no)
 
  const get_id=props.data
  const isDisabledDelButton = (get_id.length !== 1);
  const handleDel = () => {
      setDel(false)
         
    if(
        sl_no !== '' 
       

    ) {
        axios.post('http://localhost:8080/Highradiusjava/DelData',sl_no)
      
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
        
    }
}


  return (
    <>
      
        <Button className='btn' id='delbtn'  onClick={handleOpenDel} disabled={isDisabledDelButton} variant='outlined'>DELETE</Button>
        <Dialog open={openDel} onClose={handleCloseDel}       >
          <DialogTitle className='dialog' style={{ color: 'white' }}>
            Delete Records ?
          </DialogTitle>
          <DialogContent className='dialog'>
            <DialogContentText >
              <Box style={{ color: 'white' }}>
                Are you sure you want to delete these records[s] ?
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions className='dialog'>
            <Button style={{ width: '50%' , borderColor:"white" }} variant='outlined' onClick={handleDel}>DELETE </Button>
            <Button onClick={handleCloseDel} variant='outlined' style={{ width: '50%' , borderColor:"white" }}>CANCEL</Button>

          </DialogActions>
        </Dialog>


      
    </>
  );
}