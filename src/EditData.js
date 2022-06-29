import React,{ useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import './Header.css'
import TextField from "@mui/material/TextField";
import axios from "axios";

export default function EditData(props) {

    
    
    
    const [openEdit, setEdit] = React.useState(false);
    const [invoice_currency, setInvoice_currency] = useState('');
    const [cust_payment_terms, setCust_payment_terms] = useState('');
    const [sl_no, setSl_no] = useState(0);
     
    const get_id=props.data
    const isDisabledEditButton = (get_id.length !== 1);
  
    const handleEditOpen = ()=>{
        setEdit(true);
    }
   
    const handleinvoice = (event) => {
      
        setInvoice_currency(event.target.value);
        setSl_no(props.data[0]);
    };
    const updatecust_terms= (event) => {
        
        setCust_payment_terms(event.target.value);
    };
    const handleEditClose= () =>{
        setEdit(false)
    }
   
    const handleEdit = () => {
        
        setEdit(false)         
        if(
            sl_no !== '' &&
            invoice_currency !== '' &&
            cust_payment_terms !== '' 
    
        ) {
            axios.get(
                'http://localhost:8080/Highradiusjava/EditData?', 
                {params:{
                    sl_no, 
                    invoice_currency,
                    cust_payment_terms
                }
                   
                }
            )
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
          <Button className='btn' id='editbtn'   onClick={handleEditOpen} disabled={isDisabledEditButton} variant='outlined'>EDIT</Button>
            
            <div>
                <Dialog open={openEdit} onClose={handleEditClose}>
                    <DialogTitle className='dialog'>EDIT</DialogTitle>
                    <DialogContent className='dialog' >
                        <Box
                            component="form"
                            sx={{
                                "& .MuiTextField-root": { m: 1.6, width: "27ch" }
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                className="outlined-multiline-flexible"
                                label="Invoice Currency"
                                multiline
                                name='invoice_currency'
                                value={invoice_currency}
                                maxRows={4}
                                onChange={(e) => handleinvoice(e)}

                            />
                            <TextField
                                className="outlined-multiline-flexible"
                                label="Customer Payment Terms"
                                multiline
                                name='cust_payment_terms'
                                value={cust_payment_terms}
                                maxRows={4}
                                onChange={(e) => updatecust_terms(e)}

                            />

                        </Box>

                    </DialogContent>
                    <DialogActions className='dialog'>
                        <Button style={{ width: '50%' , borderColor:"white" }}variant='outlined' onClick={handleEdit}>EDIT</Button>
                        <Button style={{ width: '50%' , borderColor:"white" }} variant='outlined'onClick={handleEditClose}>Cancel</Button>
                    </DialogActions>

                </Dialog>
            </div>
        </>)
}