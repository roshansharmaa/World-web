import React from "react";
import {
  Box,
  TextField,
  Typography,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  styled,
} from "@mui/material";
import giticon from "../../assets/git.png";

function Contect() 
{
  const CustomTextField = styled(TextField)({
    m: "0",
    p: "0",
    "& input": { color: "black",fontWidth:'700' }, // Text color
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "black" }, // Border color
      "&.Mui-focused fieldset": { borderColor: "white" }, // Focus color
    },
    "& .MuiInputLabel-root": { color: "black  " }, // Label color
  });
  
  return (
    <>
    <Box>
      <Typography variant="h2" sx={{color:'white'}}>‎</Typography>
    </Box>

      <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr' ,sm:'60% 40%'},justifyContent:'center', width:'80%',placeContent:'center',alignItems:'center', bgcolor:'#eeba00', margin:'0 auto', padding:'1rem' ,gap:'1rem',borderRadius:'10px'}}>

        <Box sx={{padding:'0rem',margin:'0 auto'}}>
          <CustomTextField
            label="Name"
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <CustomTextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <CustomTextField
            label="Multiline Textarea"
            multiline
            rows={4} // Number of visible rows
            fullWidth
            variant="outlined"
            placeholder="Enter your text here..."
            margin="normal"
          />
          <Button size="large" fullWidth  sx={{bgcolor:"#cf8a00"}} variant="contained">
            Send
          </Button>
        </Box>
        <Box bgcolor={"#f9c508"} color={"#000"}  sx={{padding:'1rem 0' ,margin:'0 auto',display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',}}>
          <Box
            component="img"
            src={giticon}
            alt="Example Image"
            sx={{ width: 35 }}
            m={'0 auto'}
            bgcolor={'white'}
            padding={'.5rem'}
            borderRadius={'50%'}
          />
          <Typography variant="h5">Hi there!</Typography>
          <Typography variant="h6">Click Here</Typography>
          <Typography variant="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, ad
            vel facilis magnam tempora asperiores dolore temporibus atque
            consequatur doloribus ex, architecto dolor quis dolores consequuntur
            omnis provident quidem nesciunt!
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Contect;
