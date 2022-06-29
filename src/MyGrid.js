import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getData } from "./data";
import { Stack } from '@mui/material';
import Add from "./Add";
import Analytical from "./Analytical";
import DelData from "./DelData";
import EditData from "./EditData";
import Search from "./Search";
import Predict from "./Predict";
import RefreshIcon from '@mui/icons-material/Refresh';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


 const MyGrid = (props) => {
   
    const columns = [
        { field: 'Sl_no', headerName: 'Sl_no', width: 100, color: 'white' },
        { field: 'Business_code', headerName: 'Business_code', width: 150 },
        { field: 'Cust_number', headerName: 'Cust_number', width: 150 },
        { field: 'Clear_date', headerName: 'Clear_date', width: 100 },
        { field: 'Buisness_year', headerName: 'Buisness_year', width: 150 },
        { field: 'Doc_id', headerName: 'Doc_id', width: 100 },
        { field: 'Posting_date', headerName: 'Posting_date', width: 150 },
        { field: 'Document_create_date', headerName: 'Document_create_date', width: 175 },
        { field: 'Document_create_date1', headerName: 'Document_create_date1', width: 175, },
        { field: 'Due_in_date', headerName: 'Due_in_date', width: 150, },
        { field: 'Invoice_currency', headerName: 'Invoice_currency', width: 150, },
        { field: 'Document_type', headerName: 'Document_type', width: 150, },
        { field: 'Posting_id', headerName: 'Posting_id', width: 120, },
        { field: 'Area_business', headerName: 'Area_business', width: 150, },
        { field: 'Total_open_amount', headerName: 'Total_open_amount', width: 150, },
        { field: 'Baseline_create_date', headerName: 'Baseline_create_date', width: 175, },
        { field: 'Cust_payment_terms', headerName: 'Cust_payment_terms', width: 175, },
        { field: 'Invoice_id', headerName: 'Invoice_id', width: 150, },
        { field: 'IsOpen', headerName: 'IsOpen', width: 150, },
        { field: 'Aging_bucket', headerName: 'Aging_bucket', width: 150, },
        { field: 'Is_deleted', headerName: 'is_deleted', width: 150, }
    ]
    
    
    const [selectedrows, setselectedrows] = useState([])
    const [data, setdata] = useState([]);
    const [pageSize, setPageSize] = React.useState(10);
    const [openAdvSearch, setAdvSearch] = React.useState(false);
    const [invoice_id, setInvoice_id] = useState('');
  const [doc_id, setDoc_id] = useState('');
  const [cust_number, setCust_number] = useState('');
  const [buisness_year, setBuisness_year] = useState('');
  const handleinvoice_id = (event) => {
    setInvoice_id(event.target.value);
  };
  const handledoc_id = (event) => {
    setDoc_id(event.target.value);
  };
  const handlecust_number = (event) => {
    setCust_number(event.target.value);
  };
  const handlebuisness_year = (event) => {
    setBuisness_year(event.target.value);
  };
    const handleAdvanceSearch = () => {
        // setAdvSearch(false);
        if (
    
    
          cust_number !== '' &&
    
          buisness_year !== '' &&
          doc_id !== '' &&
    
    
          invoice_id !== ''
    
        ) {
          fetch(`http://localhost:8080/Highradiusjava/AdvanceSearch?invoice_id=${invoice_id}&doc_id=${doc_id}&cust_number=${cust_number}&buisness_year=${buisness_year}`)
            .then((data) => data.json())
            .then((data) => setdata(data))
          setAdvSearch(false)
    
        }
    
    
      }
  const handleAdvanceSearchOpen = () => {
    setAdvSearch(true);
  }
  const handleAdvanceSearchClose = () => {
    setAdvSearch(false);
  }
    const update = async () => setdata(await getData());
    useEffect(update, []);

    return (

        <div style={{ height: '600px', width: '100%', color: 'white' }}>
            <Stack  direction="row"><Predict/><Analytical/><Button onClick={handleAdvanceSearchOpen} style={{ width: '180px' }} variant="outlined">ADVANCE SEARCH </Button><Button variant='outlined' onClick={update}>
        <RefreshIcon /></Button><Search/><Add data={selectedrows}/> <EditData data={selectedrows}/><DelData data={selectedrows}/></Stack>



        
            <DataGrid
                columns={columns}
                classes={{ columnHeaderTitle: 'Datagrid', cellContent: 'Datagrid' }}
                rows={data}
                // pageSize={10}
                checkboxSelection
                getRowId={(data) => data.Sl_no}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 20, 30]}
                pagination
                onSelectionModelChange={(rows) => setselectedrows(rows)}/>

<>
        <Dialog open={openAdvSearch} onClose={handleAdvanceSearchClose}>
          <DialogTitle className='dialog'>ADVANCE SEARCH</DialogTitle>
          <DialogContent className='dialog'>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1.6, width: "27ch" }
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-multiline-flexible"
                label="Document ID"
                multiline
                maxRows={4}
                variant="filled"
                name="doc_id"
                value={doc_id}
                onChange={(e) => handledoc_id(e)}

              />
              <TextField
                id="outlined-multiline-flexible"
                label="Invoice Id"
                multiline
                maxRows={4}
                variant="filled"
                name="invoice_id"
                value={invoice_id}
                onChange={(e) => handleinvoice_id(e)}

              />
              <TextField
                id="outlined-multiline-flexible"
                label="Customer Number"
                multiline
                maxRows={4}
                variant="filled"
                name="cust_number"
                value={cust_number}

                onChange={(e) => handlecust_number(e)}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Business Year"
                multiline
                maxRows={4}
                variant="filled"
                name="buisness_year"
                value={buisness_year}
                onChange={(e) => handlebuisness_year(e)}

              />
            </Box>
          </DialogContent>
          <DialogActions className='dialog'>
            <Button style={{ width: '300px' }} variant='outlined' className='dialog' onClick={handleAdvanceSearch}>SEARCH</Button>
            <Button onClick={handleAdvanceSearchClose} className='dialog' style={{ width: '300px' }} variant='outlined'>Cancel</Button>
          </DialogActions>
        </Dialog>
      </>
               
        </div>
    );
}
export default MyGrid;