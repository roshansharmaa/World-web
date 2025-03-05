import { Box, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { getapiogdata } from "../Api/Apiurl";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
function Viewpage() {
  // console.log(param)

  // let res=arraydaat.filter((e)=>{(population>10)});
  const { id } = useParams();

  let [countrydata, setcountrydata] = useState(false);
  let [arraydaat, setarraydaat] = useState([]);
  let [lastarr, setlastarr] = useState(null);
  useEffect(() => {
    setcountrydata(async () => {
      let x = await getapiogdata();
      setarraydaat(x.data);
      // console.log(arraydaat);
    });
  }, []);

  useEffect(() => {
    if (arraydaat.length > 0 && id) {
      const foundItem = arraydaat.find((e) => String(e.name.common) === id);
      if (foundItem) {
        setlastarr(foundItem); // Update state with the found object
      }
    }
  }, [arraydaat, id]);

  return (
    <>

      <Box sx={{margin:'5rem 0 0 2rem'}}>
        <Link to={'/country'}>
        <ArrowCircleLeftIcon  sx={{fontSize:'2rem', color:'black',bgcolor:'#ffd129' ,padding:'.2rem',borderRadius:'50%'}}/>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Box
          component="img"
          margin={"0 auto"}
          src={lastarr ? lastarr.flags.svg : "Error"}
          alt="Example Image"
          m={"0 auto"}
          height={"200px"}
          bgcolor={"white"}
        />
        <Box bgcolor={"black"}>
          <CardContent sx={{ p: 0, color: "white" }}>
            {/* Country Name */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1.5,
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: "1px",
                py: 0.5,
                borderRadius: "4px",
                position: "relative",
              }}
            >
              {lastarr ? lastarr.name.common : "Error"}
            </Typography>

            {/* Country Details */}
            <Box
              sx={{
                "& > div": {
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  py: 0.5,
                },
              }}
            >
              <Box>
                <Typography variant="h5">Capital:</Typography>
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                  {lastarr ? lastarr.capital[0] : "N/A"}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5">Population:</Typography>
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                  {/* {.population?.toLocaleString() || "N/A"} */}
                  {lastarr ? lastarr.population : "N/A"}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5">Region:</Typography>
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                  {lastarr ? lastarr.region : "N/A"}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </>
  );
}

export default Viewpage;
