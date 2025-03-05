import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  Typography,
  MenuItem,
  NativeSelect,
  FormHelperText,
  Select,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import CardX from "../Single Card/CardX";
import { getapiogdata } from "../Api/Apiurl";

function Country() {
  let [countrydata, setcountrydata] = useState(false);
  let [arraydaat, setarraydaat] = useState([]);
  let [inpval, setinpval] = useState("");
  useEffect(() => {
    setcountrydata(async () => {
      let x = await getapiogdata();
      // console.log(x);
      setarraydaat(x.data);
    });
  }, []);
  const filtered = arraydaat.filter((file) => {
    return file.name.common.toLowerCase().includes(inpval.toLowerCase());
  });

  console.log(filtered);
  let handleChange = () => {
    console.log("handleChange");
  };
  let handleInpChange = (e) => {
    setinpval(e.target.value);
    console.log(inpval);
  };
  useEffect(() => {}, [arraydaat]);
  return (
    <>
      <Box textAlign={"center"} mb={10}>
        <Typography variant="h2" color="initial">
          Counteris
        </Typography>
        <Box
          p={".5rem 1rem"}
          m={" 0 0 2rem 0"}
          sx={{
            display: "flex",
            bgcolor: "#242424  ",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
       
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <input
              type="text"
              onChange={handleInpChange}
              placeholder="Serch by Country name"
              style={{
                background: "#ffd129",
                color: "black",
                borderRadius: "20px",
                padding: ".5rem .3rem",
                border: "none",
                width:'max-content',

              }}
            />
            <SearchIcon
              sx={{
                bgcolor: "#ffd129",
                fontSize: "2rem",
                borderRadius: "50%",
                color: "black",
              }}
            />
          </Box>
        </Box>
        <Box
          mt={"2rem"}
          display={"flex"}
          justifyContent={"center"}
          margin={"0 auto"}
        >
          <Box
            sx={{
              display: {
                xs:'grid',
                sm:'flex',
              },
              gridTemplateColumns:'1fr 1fr',
              flexWrap: "wrap",
              margin: "0 auto",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            {inpval
              ? filtered.map((e, i) => <CardX e={e} key={i} />)
              : arraydaat.map((e, i) => <CardX e={e} key={i} />)}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Country;
