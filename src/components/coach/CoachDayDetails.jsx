import React from "react";
import stylo from "./Coach.module.css";
import { useParams, useLocation , useNavigate , Navigate} from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
function CoachDayDetails() {
  const nav = useNavigate()
  const loc = useLocation();
  const data = loc.state;
  console.log(data);
  if(!data){
    return <Navigate to='/not-found'  />

  }
  const meal = data.details;

  function go (){
    nav('/meals')
  }
  const redirectToYoutube = () => {
    window.open(data.details.ex, '_blank');
  };
  const stylee = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid white !important",
    borderRadius: "17px",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  return (
    <>
      <div className={stylo.dayDetailsContainer}>
        <h4 className={stylo.text}>Discover your Exercise today !</h4>
        <div
          className={stylo.VertCard}
          style={{
            width: 400,
            height: 120,
            paddingLeft: 70,
            paddingRight: 70,
            paddingTop: 15,
            paddingBottom: 15,
            background: "white",
            borderRadius: 12,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 16,
            display: "inline-flex",
          }}
        >
          <div
            className="ConstructiveAndDestructiveWaves"
            style={{
              alignSelf: "stretch",
              color: "#2A282F",
              fontSize: 15,
              fontFamily: "Inter",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Click the button to Watch the Video
          </div>
          <div
            className="Tag"
            style={{
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 4,
              paddingBottom: 4,
              background: "#735BF3",
              borderRadius: 20,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              display: "inline-flex",
              textAlign:"center",
              // alignItems:"center",
              position:"relative",
              top:"10px",
              left:"190px"
            }}
          >
            <div
              className={stylo.link}
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "500",
                wordWrap: "break-word",
                backgroundColor: "#735BF3",
                border: "none",
                textDecorationLine: "none",
              
              }}
              onClick={redirectToYoutube}
            >
              Click
            </div>
          </div>
        </div>

        <h4 className={stylo.text}>Discover your meals !</h4>
        <div className={stylo.twoDives}>
          <figure className={stylo.figure} onClick={handleOpen}>
            <img
              // src={meal.dinner.imageFile}
              src={meal.dinner.imageFile}              
              className={stylo.smiling}
              alt=""
            />
            <figcaption className={stylo.figcaption}>
              Dinner <br />
              {meal.dinner.title}
            </figcaption>
          </figure>

          <figure className={stylo.figure} onClick={handleOpen2}>
            <img
              src={meal.lunch.imageFile}
              className={stylo.smiling}
              alt=""
            />
            <figcaption className={stylo.figcaption}>
              Lunch <br />
              {meal.lunch.title}
            </figcaption>
          </figure>
        </div>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={stylee} className={stylo.modal1}>
            <span
              aria-label="close"
              onClick={handleClose} // Call handleClose function when clicked
              sx={{ position: "absolute", top: 0, right: 0, m: 1 }}
            >
              <i
                className="fa-solid fa-xmark"
                style={{
                  color: "black",
                  marginBottom: "8px",
                  position: "relative",
                  left: "330px",
                  cursor: "pointer",
                  fontSize: "26px",
                }}
              ></i>
            </span>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <h5 className={stylo.head}>Meal Details</h5>
              <p style={{marginBottom:"6px"}}>Title : {meal.dinner.title}</p>
              <p style={{marginBottom:"6px"}}>Category : {meal.dinner.category}</p>
              <p style={{marginBottom:"6px" , lineHeight:"18px"}}>Ingrediants : {meal.dinner.description}</p>
              <p style={{marginBottom:"6px"}}>Price : {meal.dinner.price}$</p>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <button className={stylo.addCart} onClick={()=>{go()}}>
                {/* <i className="fa-solid fa-cart-shopping"></i> */}
                 Explore menu
              </button>
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open2}
        // onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open2}>
          <Box sx={stylee} className={stylo.modal1}>
            <span
              aria-label="close"
              onClick={handleClose2} // Call handleClose function when clicked
              sx={{ position: "absolute", top: 0, right: 0, m: 1 }}
            >
              <i
                className="fa-solid fa-xmark"
                style={{
                  color: "black",
                  marginBottom: "8px",
                  position: "relative",
                  left: "330px",
                  cursor: "pointer",
                  fontSize: "26px",
                }}
              ></i>
            </span>
            <Typography variant="h6" component="h2">
            <h5 className={stylo.head}>Meal Details</h5>
              <p style={{marginBottom:"6px"}}>Title : {meal.lunch.title}</p>
              <p style={{marginBottom:"6px"}}>Category : {meal.lunch.category}</p>
              <p style={{marginBottom:"6px" , lineHeight:"18px"}}>Ingrediants : {meal.lunch.description}</p>
              <p style={{marginBottom:"6px"}}>Price : {meal.lunch.price}$</p>
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <button className={stylo.addCart} onClick={()=>{go()}}>
                {/* <i className="fa-solid fa-cart-shopping"></i> */}
              Explore menu</button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default CoachDayDetails;
