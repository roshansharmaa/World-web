import React, { useEffect, useState } from "react";
import { Box, Divider, TextField, Typography } from "@mui/material";
import homeimg from "../../assets/home.png";
import homebg from "../../assets/homebg.png";
import AboutX from "./AboutX";
import { getapiogdata } from "../Api/Apiurl";
import CardX from "../Single Card/CardX";
import CardDetail from "../Single Card/CardDetail";
function HomeX() {
    let [countrydata, setcountrydata] = useState(false);
    let [arraydaat, setarraydaat] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        let x = await getapiogdata();
        const result = x.data.slice(0, 9);
        console.log(result, 'Fetched Data');
        setarraydaat(result);
      
      };
      fetchData();
    }, []);
    console.log(arraydaat,'new data')


  return (
    <>
      <Box
        variant="div"
        sx={{
          width: "100%",
          display: "flex",
          height: { xs: "0", sm: "85vh" },
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column-reverse", sm: "row" },
          padding: " 1rem  .5rem ",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{ color: "#eeba00", fontSize: { xs: "4rem", sm: "6rem" } }}
          >
            Explore the world
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#f9c508", fontSize: { xs: "2rem" } }}
          >
            A Comprehensive Guide to Global Statistics
          </Typography>
          <Typography variant="p">
            Discover detailed insights about every country in the world,
            <Typography variant="strong" sx={{ color: "#eeba00" }}>
              including population, languages, cultural diversity, and more.
            </Typography>
            Whether you're a student, traveler, or curious mind, this page
            offers a wealth of information to help you understand our planet
            better.
          </Typography>
        </Box>
        <Box
          component="img"
          src={homeimg}
          alt="Example Image"
          sx={{ width: { xs: "24rem", sm: "36rem" }, aspectRatio: "1" }}
        />
      </Box>
      <Divider sx={{ bgcolor: "yellow" }} />

<Typography variant="h4" color="initial" textAlign={'center'} m={'2rem 0'}>Populer Countries</Typography>
      <Box
        sx={{
          flexWrap: "wrap",
          margin: "1rem auto 2rem",
          justifyContent: "center",
          display: {
            xs:'grid',
            sm:'flex',
          },
          gridTemplateColumns:'1fr 1fr',
          gap: "2rem",
        }}
      >
        {arraydaat.map((e) => (
          <CardDetail e={e} key={e.name.common} />
        ))}
      </Box>
    </>
  );
}
export default HomeX;
