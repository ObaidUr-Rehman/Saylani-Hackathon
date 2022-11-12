import React, { useState ,useEffect} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import { initializeApp } from "firebase/app";

import { 
  getFirestore, collection,
  addDoc, getDocs, doc,
  onSnapshot, query, serverTimestamp,
  orderBy, deleteDoc, updateDoc

} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCqNpZiGhh3lqNOX6kYbYfmLTGJRjIlkLg",
  authDomain: "hackhathon-69b70.firebaseapp.com",
  projectId: "hackhathon-69b70",
  storageBucket: "hackhathon-69b70.appspot.com",
  messagingSenderId: "512449210479",
  appId: "1:512449210479:web:e77592bbc81669e430c59a",
  measurementId: "G-CTXQC66Y8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



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

const Student=()=>{
    const [studname, setstudname] = useState("")
    const [fathname, setfathname] = useState("")
    const [cnic, setcnic] = useState("")
    const [contact, setcontact] = useState("")
    const [rollno, setrollno] = useState("")
    const [batch, setbatch] = useState("")



    const [std, setstd] = useState([]);


    useEffect(() => {


        const getData = async () => {
          const querySnapshot = await getDocs(collection(db, "students"));
    
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => `, doc.data());
    
            setstd((prev) => {
              let newArray = [...prev, doc.data()];
              return newArray
            });
    
          });
        }
        // getData();
    
        let unsubscribe = null;
        const getRealtimeData = async () => {
    
          const q = query(collection(db, "students"));
    
          unsubscribe = onSnapshot(q, (querySnapshot) => {
            const stu = [];
    
            querySnapshot.forEach((doc) => {
              // posts.unshift(doc.data());
              // posts.push(doc.data());
    
              stu.push({ id: doc.id, ...doc.data() });
    
            });
    
            setstd(stu);
            console.log("students: ", stu);
          });
    
        }
        getRealtimeData();
    
        return () => {
          console.log("Cleanup function");
          unsubscribe();
        }
    
      }, [])










    const Addstd = async () => {
      console.log("okay");
      try {
        const docRef = await addDoc(collection(db, "students"), {
          stdname:studname,
          fathername:fathname,
          CNIC:cnic,
          Contact:contact,
          RollNo:rollno,
          BatchNo:batch
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }



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
      <Button style={{textAlign:"center"}} variant="contained"onClick={handleOpen}>Register Student</Button>
    
      
  
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600,}}>

        <TextField onChange={(e)=>{
          setstudname(e.target.value)
        }}  style={{margin:"10px"}} id="outlined-basic" label="Student Name" variant="outlined" placeholder='Enter Student Name' />
        <TextField onChange={(e)=>{
          setfathname(e.target.value)
        }}style={{margin:"10px"}} id="outlined-basic" label="Father Name" variant="outlined" placeholder= 'Enter Father Name'  />
        <TextField onChange={(e)=>{
          setcnic(e.target.value)
        }}style={{margin:"10px"}} id="outlined-basic" label="CNIC" variant="outlined" placeholder= 'Enter CNIC' />
        <TextField onChange={(e)=>{
          setrollno(e.target.value)
        }}style={{margin:"10px"}} id="outlined-basic" label="Roll No" variant="outlined" placeholder= 'Enter Roll No'/>
        <TextField onChange={(e)=>{
          setcontact(e.target.value)
        }}style={{margin:"10px"}} id="outlined-basic" label="Contact" variant="outlined" placeholder='Enter Contact No' />
        <TextField onChange={(e)=>{
          setbatch(e.target.value)
        }}style={{margin:"10px"}} id="outlined-basic" label="Batch" variant="outlined" placeholder= 'Enter Batch No'  />

        <Button onClick={()=>  {Addstd() 
          handleClose()
          }} style={{textAlign:"center"}} variant="contained" >Add Student</Button>        

        </Box>
      </Modal>



      <div className='mydiv'>

{
    std.map((ele,i)=>{
        return(
          <div className="myCard">
          <div className="card" style={{width: "18rem"}} key={i}>
          <div className="card-body">
            <h5 className="card-title">{ele.stdname}</h5>
            <p className="card-text">{ele.fathername}</p>
            <p className="card-text">{ele.contact}</p>
            <p className="card-text">{ele.RollNo}</p>
            <p className="card-text">{ele.BatchNo}</p>
          </div>
        </div>
        </div>
      )
  })
}
</div>

    </div>
  );
}

export default Student;