import React, { useEffect, useState } from 'react'
import { instanceAxios } from '../../../Axios/instance';
import style from './cusere.module.css';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {TextField ,  IconButton} from '@mui/material'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'; 
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import img from "../../../assets/avatar.png";





function CUsere() {

  const [clicked, setClicked] = useState(false);

 
  const [meals,setMeals]= useState([])

  const [subscribers, setSubscribers] = useState([])

  const [ex,setEx]=useState('')

  const handleChange = (event) => {
    setEx(event.target.value);
  };
 console.log(ex);

   const [Dinner, setDinner] =useState('');

   const handelDinner=(event)=>{
    setDinner(event.target.value)
   }
   console.log(Dinner, "dinner")
 
   const [Lunch, setLunch] =useState('');

   const handelLunch=(event)=>{
    setLunch(event.target.value)
   }
   console.log(Lunch, "lunch");
 
  const id =localStorage.getItem("coash_id")
  const coach_id= JSON.parse(id)
  console.log(coach_id , "coach_id");
 
  const [userId, setUserId]=useState('')
  function UserId(id){
    setUserId(id)
  }
console.log(userId , "userid");
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  // request to get all the subscribers 
  useEffect(() => {
    instanceAxios.post(`http://localhost:3000/coach/getAllSubscribers/${coach_id}`).then((response) => {
      setSubscribers([...response.data.subscribers]);
    }).catch(err => {
      console.log(err)
    });
  }, []);


// request to get all the meals 
useEffect(()=>{
  instanceAxios.get('http://localhost:3000/meals/get-all').then((response)=>{
    setMeals([...response.data.items])
    }).catch(err => {
      console.log(err)
    });
},[])
 
// request to create schedule
useEffect(()=>{
  if(clicked)
  { 
   instanceAxios.post('http://localhost:3000/coach/createCoachSchedule',
   {userId:userId,coachId:coach_id,lunch:Lunch,dinner:Dinner,ex:ex})
   .then((response)=>{
  console.log(response.data , response.data.details);
  }).catch(err=>{
    console.log(err);
  })
}
},[clicked])

  return (
    <div className={style.cards}>

      {
        subscribers.map((subscriber) => {
          return (
            <>
              <div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className={style.box}>
                    <h3 className={style.h3}>Create a new schedule</h3>

                    <TextField
                      className={style.textField}
                      variant='standard'
                      color='secondary' margin='normal'
                      placeholder="Drop an Exercise Link Here"
                      value={ex} 
                      onChange={handleChange}
                    ></TextField>


      <FormControl className={style.FormControl} variant="standard">
      <InputLabel id="demo-simple-select-label" color='secondary'>Dinner</InputLabel>
        <Select
        className={style.select}
          color='secondary'
          value={Dinner}
          onChange={handelDinner}
        >
      {
        meals.map((meal)=>{
          return(
            <MenuItem value={meal._id}>{meal.title}</MenuItem>
          )
        })
      }
        </Select>
      </FormControl>
      <FormControl className={style.FormControl} variant="standard">
      <InputLabel id="demo-simple-select-label" color='secondary'>Lunch</InputLabel>
        <Select
        className={style.select}
          color='secondary'
          value={Lunch}
          onChange={handelLunch}
        >
      {
        meals.map((meal)=>{
          return(
            <MenuItem value={meal._id}>{meal.title}</MenuItem>
          )
        })
      }
        </Select>
      </FormControl>
      <IconButton color='secondary' style={{position:"relative" , left:"360px"}} onClick={()=>{setClicked(true)}}>
        < EditCalendarIcon fontSize="large"  />
      </IconButton>
                  </Box>
                </Modal>
              </div>
              <article className={`${style.information} ${style.card}`}>
                <span className={style.tag}>Subscriber</span>
                <div className={style.userImg}>
                  <img src={img} alt="" />
                </div>
                <h2 className={style.title}>{subscriber.name}</h2>
                <div className={style.cont_btn}>
                  <Tooltip title="create schedule" arrow>
                    <button className={style.button} onClick={()=>{handleOpen();UserId(subscriber._id)}}>
                      <i class="fa-solid fa-calendar-plus" style={{ fontSize: '30px' }}></i>
                    </button>
                  </Tooltip>
                  {/* <Tooltip title="chat" arrow>
                    <button className={style.button}>
                      <i class="fa-solid fa-message" style={{ fontSize: '30px' }}></i>
                    </button>
                  </Tooltip> */}
                </div>
              </article>
            </>
          )
        })
      }
    </div>


  )
}

export default CUsere








// first get all meals done 
// show them in the select done 
// create a schedule
// first i have to hold the coashId (done), userId (done), Dinner , Lunch , Exersice(done) 




  //instanceAxios.post(`http://localhost:3000/coach/createCoachSchedule`,{userId:id,coachId:coash_id,lunch:Lunch,dinner:Dinner,exercises:ex})









