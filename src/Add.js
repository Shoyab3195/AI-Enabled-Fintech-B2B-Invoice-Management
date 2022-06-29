import { makeStyles } from "@material-ui/core/styles";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from 'react';
import axios from "axios";
import './Header.css'
import Button from '@mui/material/Button'
export default function Add() {
   

    const useStyles = makeStyles(() => ({
        dialog: {

            width: "150%",
            maxWidth: "2000px",
            maxHeight: "500px",
            backgroundColor: '#37474f'

        }
    }));
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleAddOpen = () => {
        setOpen(true);
    };
    const handleAddClose = () => {
        setOpen(false);
    };
    const [business_code, setBusiness_code] = useState('');
    const [cust_number, setCust_number] = useState('');
    const [clear_date, setClear_date] = useState('');
    const [buisness_year, setBuisness_year] = useState('');
    const [doc_id, setDoc_id] = useState('');
    const [posting_date, setPosting_date] = useState('');
    const [document_create_date, setDocument_create_date] = useState('');
    const [due_in_date, setDue_in_date] = useState('');
    const [invoice_currency, setInvoice_currency] = useState('');
    const [document_type, setDocument_type] = useState('');
    const [posting_id, setPosting_id] = useState('');
    const [total_open_amount, setTotal_open_amount] = useState('');
    const [baseline_create_date, setBaseline_create_date] = useState('');
    const [cust_payment_terms, setCust_payment_terms] = useState('');
    const [invoice_id, setInvoice_id] = useState('');
   
    const handlebusiness_code = (event) => {
        setBusiness_code(event.target.value);
    };
    const handlecust_number = (event) => {
        setCust_number(event.target.value);
    };
    const handleclear_date = (event) => {
        setClear_date(event.target.value);
    };
    const handlebuisness_year = (event) => {
        setBuisness_year(event.target.value);
    };
    const handledoc_id = (event) => {
        setDoc_id(event.target.value);
    };
    const handleposting_date = (event) => {
        setPosting_date(event.target.value);
    };
    const handledocument_create_date = (event) => {
        setDocument_create_date(event.target.value);
    };
    const handledue_in_date = (event) => {
        setDue_in_date(event.target.value);
    };
    const handleinvoice_currency = (event) => {
        setInvoice_currency(event.target.value);
    };
    const handleposting_id = (event) => {
        setPosting_id(event.target.value);
    };
    const handletotal_open_amount = (event) => {
        setTotal_open_amount(event.target.value);
    };
    const handlecust_payment_terms = (event) => {
        setCust_payment_terms(event.target.value);
    };
    const handleinvoice_id = (event) => {
        setInvoice_id(event.target.value);
    };
    const handlebaseline_create_date = (event) => {
        setBaseline_create_date(event.target.value);
    };
    const handledocument_type = (event) => {
        setDocument_type(event.target.value);
    };
    const handleAddButton = () => {
        if(
            business_code !== '' && 
            cust_number !== '' &&
            clear_date !== '' &&
            buisness_year !== '' &&
            doc_id !== '' &&
            posting_date !== '' &&
            document_create_date !== '' &&
            due_in_date !== '' &&
            invoice_currency !== '' &&
            document_type !== '' &&
            posting_id !== '' &&
            total_open_amount !== '' &&
            baseline_create_date !== '' &&
            cust_payment_terms !== '' &&
            invoice_id !== ''
    
        ) {
            axios.post(
                'http://localhost:8080/Highradiusjava/Add', 
                {
                  business_code, 
                  cust_number,
                  clear_date,
                  buisness_year,
                  doc_id,
                  posting_date,
                  document_create_date,
                  due_in_date,
                  invoice_currency,
                  document_type,
                  posting_id,
                  total_open_amount,
                  baseline_create_date,
                  cust_payment_terms,
                  invoice_id
                }
            )
            .then((response) => {
                console.log(response);
                // setData([])
                // setDataPageCount(0);
                setOpen(false)
            })
            .catch((error) => {
                console.log(error);
            });
            
        }
    }


    return (
        <>
           <Button className='btn' id='add' onClick={handleAddOpen} variant='outlined'>ADD</Button>
           
            

            <Dialog open={open} onClose={handleAddClose} classes={{ paper: classes.dialog }} style={{
                backgroundColor: 'transparent',
                boxShadow: 'blue',
                color: 'blue'

            }} fullWidth={true} maxWidth={'md'}>
                <DialogTitle className="dialog">ADD</DialogTitle>
                <DialogContent className="dialog">

                    <Box
                        component="form"
                        sx={{
                            "& .MuiTextField-root": { m: 1.6, width: "28ch" }
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <div>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Business Code"
                                multiline
                                maxRows={4}
                                variant="filled"
                                required
                                value={business_code}
                                onChange={(e) => handlebusiness_code(e)}
                                name="business_code"
                                style={{width:'23%'}}
          
                                

                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Customer Number"
                                multiline
                                maxRows={4}
                                variant="filled"
                                required
                                name="cust_number"
                                value={cust_number}

                                onChange={(e) => handlecust_number(e)}
                                style={{width:'23%'}}
          




                            />
                            <TextField
                                id="date"
                                label="Clear Date"
                                type="date"
                                defaultValue="2022-05-11"
                                sx={{ width: 280 }}
                                variant="filled"
                                required
                                name="clear_date"
                                value={clear_date}
                                onChange={(e) => handleclear_date(e)}
                                style={{width:'23%'}}
          
                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Buisness Year"
                                multiline
                                maxRows={4}
                                variant="filled"
                                required
                                name="buisness_year"
                                value={buisness_year}
                                onChange={(e) => handlebuisness_year(e)}
                                style={{width:'23%'}}
          

                            />
                            </div>
                            <div>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Document id"
                                multiline
                                maxRows={4}
                                variant="filled"
                                required
                                name="doc_id"
                                value={doc_id}
                                onChange={(e) => handledoc_id(e)}
                                style={{width:'23%'}}
          

                            />
                            <TextField
                                id="date"
                                label="Posting Date"
                                type="date"
                                defaultValue="2022-05-11"
                                sx={{ width: 500 }}
                                variant="filled"
                                required
                                name="posting_date"
                                value={posting_date}
                                onChange={(e) => handleposting_date(e)}
                                style={{width:'23%'}}
          
                            />
                            <TextField
                                id="date"
                                label="Document Create Date"
                                type="date"
                                defaultValue="2022-05-11"
                                sx={{ width: 280 }}
                                variant="filled"
                                required
                                name="document_create_date"
                                value={document_create_date}
                                onChange={(e) => handledocument_create_date(e)}
                                style={{width:'23%'}}
          
                            />
                            <TextField
                                id="date"
                                label="Due Date"
                                type="date"
                                defaultValue="2022-05-11"
                                sx={{ width: 280 }}
                                variant="filled"
                                required
                                name="due_in_date"
                                value={due_in_date}
                                onChange={(e) => handledue_in_date(e)}
                                style={{width:'23%'}}
          


                            />
                            </div>
                            <div>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Invoice Currency"
                                multiline
                                maxRows={4}
                                variant="filled"
                                required
                                name="invoice_currency"
                                value={invoice_currency}
                                onChange={(e) => handleinvoice_currency(e)}
                                style={{width:'23%'}}
          

                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Document type"
                                multiline
                                maxRows={4}
                                variant="filled"
                                required
                                name="document_type"
                                value={document_type}
                                onChange={(e) => handledocument_type(e)}
                                style={{width:'23%'}}
          

                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Posting Id"
                                multiline
                                maxRows={4}
                                variant="filled"
                                required
                                name="posting_id"
                                value={posting_id}
                                onChange={(e) => handleposting_id(e)}
                                style={{width:'23%'}}
          

                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Total open amount"
                                multiline
                                maxRows={4}
                                variant="filled"
                                required
                                name="total_open_amount"
                                value={total_open_amount}
                                onChange={(e) => handletotal_open_amount(e)}
                                style={{width:'23%'}}
          

                            />
                            </div>
                            <div>
                            <TextField
                                id="date"
                                label="Baseline Create Date"
                                type="date"
                                defaultValue="2022-05-11"
                                sx={{ width: 280 }}
                                variant="filled"
                                required
                                name="baseline_create_date"
                                value={baseline_create_date}
                                onChange={(e) => handlebaseline_create_date(e)}
                                style={{width:'23%'}}
          
                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Customer Payment Terms"
                                multiline
                                maxRows={4}
                                variant="filled"
                                required
                                name="cust_payment_terms"
                                value={cust_payment_terms}
                                onChange={(e) => handlecust_payment_terms(e)}
                                style={{width:'23%'}}
          

                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Invoice Id"
                                multiline
                                maxRows={4}
                                variant="filled"
                                required
                                name="invoice_id"
                                value={invoice_id}
                                onChange={(e) => handleinvoice_id(e)}
                                style={{width:'23%'}}
          
                            />
                            </div>
                        </div>
                    </Box>

                </DialogContent>
                <DialogActions className="dialog">
                    <Button id='border' onClick={handleAddClose} className="dialogbox" style={{ width: '900px' , borderColor:"white"  } }variant='outlined'>Cancel</Button>
                    <Button style={{ width: '900px' , borderColor:"white" }} onClick={handleAddButton} variant='outlined'>ADD</Button>
                </DialogActions>
            </Dialog>

        </>

    );
}