import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import React, { useEffect } from "react";
import demoimg from "../../assets/home.png";
import { Link } from "react-router-dom";

function CardDetail({ e }) {
  return (
    <>
      <Card
        sx={{
          p: 1,
          width: 300,
          minHeight: "auto",
          background: `
      linear-gradient(45deg, #eeba00 0%, #000 46%, #f9c508 100%)
    `,
          border: "2px solid rgba(255, 255, 0, 0.3)",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 16px rgba(255, 215, 0, 0.3)",
          },
          position: "relative",
          overflow: "visible",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: 1,
          }}
        >
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
              {e.name.common}
            </Typography>

            {/* Country Details */}
            <Box
              sx={{
                "& > div": {
                  display: "flex",
                  justifyContent: "left",
                  gap: 1,
                  py: 0.5,
                },
              }}
            >
              <Box>
                <Typography variant="caption">Capital:</Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {e.capital?.[0] || "N/A"}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption">Population:</Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {e.population?.toLocaleString() || "N/A"}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption">Region:</Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {e.region || "N/A"}
                </Typography>
              </Box>
            </Box>
          </CardContent>

          {/* Action Button */}
          <CardActions sx={{ p: 0 }}>
            <Link
              to={`/view/${e.name.common}`}
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button
                fullWidth
                variant="contained"
                size="small"
                sx={{
                  bgcolor: "#cf8a00",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  "&:hover": {
                    bgcolor: "#b37700",
                    transform: "scale(1.02)",
                  },
                  transition: "all 0.3s ease",
                  borderRadius: "6px",
                  py: 1,
                }}
              >
                Learn More
              </Button>
            </Link>
          </CardActions>
        </Box>
      </Card>
      {/* ))} */}
    </>
  );
}

export default CardDetail;
