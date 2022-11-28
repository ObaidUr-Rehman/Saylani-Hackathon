import React ,{useState,useEffect} from 'react'
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

const Class=()=>{

    const [thname, sethname] = useState("")
    const [section, setsection] = useState("")
    const [course, setcourse] = useState("")
    const[batch,setbatch]=useState("")
    const [posts, setPosts] = useState([]);


    useEffect(() => {


        const getData = async () => {
          const querySnapshot = await getDocs(collection(db, "classes"));
    
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => `, doc.data());
    
            setPosts((prev) => {
              let newArray = [...prev, doc.data()];
              return newArray
            });
    
          });
        }
        // getData();
    
        let unsubscribe = null;
        const getRealtimeData = async () => {
    
          const q = query(collection(db, "classes"));
    
          unsubscribe = onSnapshot(q, (querySnapshot) => {
            const posts = [];
    
            querySnapshot.forEach((doc) => {
              // posts.unshift(doc.data());
              // posts.push(doc.data());
    
              posts.push({ id: doc.id, ...doc.data() });
    
            });
    
            setPosts(posts);
            console.log("posts: ", posts);
          });
    
        }
        getRealtimeData();
    
        return () => {
          console.log("Cleanup function");
          unsubscribe();
        }
    
      }, [])





    const Addclass= async()=>{
        console.log("okay");
          try {
            const docRef = await addDoc(collection(db, "classes"), {
              TeacherName:thname,
              Section:section,
              CourseName:course,
              BatchNo:batch,
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
    <div className='container'>
      {/* <Button style={{textAlign:"Center"}} </Button> */}
      <div className='mybtn'>
      <Button variant="contained"onClick={handleOpen}>Register Class</Button>
      </div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600,}}>

        <TextField onChange={(e)=>{
          sethname(e.target.value)
        }} style={{margin:"10px"}} id="outlined-basic" label="Teacher Name" variant="outlined" placeholder='Enter Teacher Name' />

        <TextField onChange={(e)=>{
          setsection(e.target.value)
        }} style={{margin:"10px"}} id="outlined-basic" label="Section Name" variant="outlined" placeholder= 'Enter Section Name'  />

        <TextField onChange={(e)=>{
          setcourse(e.target.value)
        }} style={{margin:"10px"}} id="outlined-basic" label="Course Name" variant="outlined" placeholder= 'Enter Course Name' />

        <TextField onChange={(e)=>{
          setbatch(e.target.value)
        }} style={{margin:"10px"}} id="outlined-basic" label="Batch Name" variant="outlined" placeholder= 'Enter Batch Name'/>

        <Button onClick={()=>  {Addclass() 
          handleClose()
          }} style={{textAlign:"center"}}variant="contained">Add Class</Button>        

        </Box>
      </Modal>

<div className='mydiv'>

      {
          posts.map((ele,i)=>{
              return(
                <div className="myCard">
                <div className="card" style={{width: "18rem"}} key={i}>
                <div className="card-body">
                  <h5 className="card-title">{ele.CourseName}</h5>
                  <p className="card-text">{ele.BatchNo}</p>
                  <p className="card-text">{ele.Section}</p>
                  <p className="card-text">{ele.TeacherName}</p>
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

export default Class;
