import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Class=()=>{
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button style={{textAlign:"Center"}} </Button> */}
      <Button style={{textAlign:"center"}} variant="contained"onClick={handleOpen}>Register Class</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600,}}>

        <TextField style={{margin:"10px"}} id="outlined-basic" label="Teacher Name" variant="outlined" placeholder='Enter Teacher Name' />
        <TextField style={{margin:"10px"}} id="outlined-basic" label="Section Name" variant="outlined" placeholder= 'Enter Section Name'  />
        <TextField style={{margin:"10px"}} id="outlined-basic" label="Course Name" variant="outlined" placeholder= 'Enter Course Name' />
        <TextField style={{margin:"10px"}} id="outlined-basic" label="Batch Name" variant="outlined" placeholder= 'Enter Batch Name'/>
        <Button style={{textAlign:"center"}} variant="contained">Add Class</Button>        

        </Box>
      </Modal>
    </div>
  );
}

export default Class;