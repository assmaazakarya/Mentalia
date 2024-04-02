import React, { useEffect, useState } from "react";
import style from "./Schedules.module.css";
import {useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Day from "./Day";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { instanceAxios } from "../../Axios/instance";
import { useSelector } from "react-redux";



function Schedules() {
  const [newSchedule, setNew] = useState('')
  const handleChange = (event) => {
    setNew(event.target.value);
  };
  // console.log(newSchedule);
  const user = useSelector((state) => state.auth);
  const [days, setdays] = useState([]);
  const [clicked, setClicked] = useState(false);
  //modal handler
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const nav = useNavigate()

  let answers = localStorage.getItem('asnwers')
  let an = JSON.parse(answers)
  an.day = newSchedule
  let NEW = an 
    if(clicked){
    instanceAxios.post(`http://localhost:3000/schedule/addSchedule/${user._id}`,NEW).then((response) => {
      console.log(response.data);
      if(response.data.items==[]){
        nav('/loader')
       }else{
        nav('/userDashboard')
       }
    }).catch(err => {
      console.log(err);
    })
    }
  useEffect(() => {
    instanceAxios
      .post(
        `http://localhost:3000/schedule/getalldays/${user._id}`
      )
      .then((response) => {
        setdays([...response.data]);
      });
  }, []);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={{ minWidth: 120 }} className={style.box}>
          <FormControl className={style.FormControl} variant="standard">
            <h2 className={style.h2}>Select a Day</h2>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newSchedule}
              color="secondary"
              className={style.day}
              onChange={handleChange}
            >
              <MenuItem value="Saturday">Saturday</MenuItem>
              <MenuItem value="Sunday">Sunday</MenuItem>
              <MenuItem value="Monday">Monday</MenuItem>
              <MenuItem value="Tuesday">Tuesday</MenuItem>
              <MenuItem value="Wednesday">Wednesday</MenuItem>
              <MenuItem value="Thursday">Thursday</MenuItem>
              <MenuItem value="Friday">Friday</MenuItem>
            </Select>
          </FormControl>
          <button className={style.btn} onClick={()=>{setClicked(true)}}>
            <span className={style.btn_span}>Send</span>
          </button>
        </Box>

      </Modal>




      <div className={style.cont}>
        <main className={style.table} id={style.customersTable}>
          <section className={style.tableHeader}>
            <h5>Daily Routines</h5>
            <button className={style.button} onClick={() => { handleOpen() }}>Generate New Day</button>
          </section>
          <section className={style.tableBody}>
            <table>
              <thead>
                <tr>
                  {/* <th> Check</th> */}
                  <th> Dayname </th>
                  <th> Status </th>
                  <th> Action </th>
                </tr>
              </thead>
              <tbody>
                {days.length > 0 &&
                  days.map((day) => {
                    return (
                      <tr key={day._id}>
                        <Day data={day} />
                      </tr>
                    );
                  })}{" "}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  );
}

export default Schedules;
