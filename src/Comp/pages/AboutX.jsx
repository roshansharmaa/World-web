import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import CardDetail from "../Single Card/CardDetail";
import { getapiogdata } from "../Api/Apiurl";

function AboutX() {
  let [countrydata, setcountrydata] = useState(false);
  let [arraydaat, setarraydaat] = useState([]);
  useEffect(() => {
    setcountrydata(async () => {
      let x = await getapiogdata();
      console.log(x);
      setarraydaat(x.data);
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          mt: "2rem",
        }}
      >
        <Typography variant="h3" color="initial">
          All Countries
        </Typography>
        <Box  sx={{
          display: "flex",
          flexWrap: "wrap",
          margin: "1rem auto 2rem",
          justifyContent: "center",
          gap: "2rem",
        }}>

          {arraydaat.map((e,i) => (
          <CardDetail e={e} key={i}/>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default AboutX;
