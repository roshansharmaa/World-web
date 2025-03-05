import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import demoimg from "../../assets/home.png";
import styled, { keyframes } from "styled-components";

function CardX({ e }) {
  return (
    <>
      {/* {arraydaat.map((e, i) => ( */}

      <Card
        sx={{
          p: 1,
          width: {
            xs:'50',
            sm:'300'
          },
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
        {e ? (
          <>
            <Box
              component="img"
              src={e.flags.svg}
              sx={{
                width: {
                  xs:'150px',
                  sm:'300px'
                },
                height: "auto",
                objectFit: "cover",
                borderRadius: "8px",
                // mb: 1.5,
                aspectRatio: "3/2",
                border: "2px solid white",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                margin: "auto",
              }}
              alt={e.flags.alt}
            />
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
              <Link
                to={`/view/${e.name.common}`}
                style={{ textDecoration: "none" }}
              >
                <CardActions sx={{ p: 0 }}>
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
                </CardActions>
              </Link>
            </Box>
          </>
        ) : (
          <>
            <Loader />
          </>
        )}
      </Card>
    </>
  );
}

export default CardX;

const animation = keyframes`
  100% {
    transform: translateY(calc(var(--s, 1) * 0.1%));
  }
`;

const Loader = styled.h5`
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  display: inline-grid;

  &::before,
  &::after {
    content: "Loading...";
    grid-area: 1/1;
    -webkit-mask: linear-gradient(90deg, #000 50%, #0000 0) 0 50%/2ch 100%;
    mask: linear-gradient(90deg, #000 50%, #0000 0) 0 50%/2ch 100%;
    animation: ${animation} 1s infinite cubic-bezier(0.5, 220, 0.5, -220);
  }

  &::after {
    -webkit-mask-position: 1ch 50%;
    mask-position: 1ch 50%;
    --s: -1;
  }
`;
