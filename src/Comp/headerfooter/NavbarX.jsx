import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Box,
  Divider,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Drawer,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import logo from "../../assets/logo2.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
function NavbarX() {
  let [drawer, setdrawer] = useState(false);
  let handleopen = () => {
    setdrawer(true);
  };
  let handleclose = () => {
    setdrawer(!drawer);
  };
  let arr = ["Home", "About", "Country", "Contact"];
  return (
    <AppBar position="fixed" color="common.black" sx={{ bgcolor: "#eeba00" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to={"/"} style={{ textDecoration: "none", cursor: "pointer" }}>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Box
              component="img"
              src={logo}
              alt="Example Image"
              sx={{ width: 35 }}
            />
            <Typography
              variant=" "
              color="common.black"
              margin={0}
              sx={{ fontWeight: "700" }}
            >
              World Web
            </Typography>
          </Box>
        </Link>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          {arr.map((e, i) => (
            <Link
              to={e == "Home" ? "/" : e.toLocaleLowerCase()}
              key={i}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <Typography
                variant="h6"
                color="common.black"
                margin={0}
                sx={{ fontWeight: "700", display: { xs: "none", sm: "block" } }}
              >
                {e}
              </Typography>
            </Link>
          ))}
        </Box>
        <Box>
          <LogoutIcon
            sx={{
              color: "#000",
              fontWeight: "700",
              display: { xs: "none", sm: "block" },
            }}
          />
        </Box>
        <Box onClick={handleopen} sx={{ display: { xs: "block", sm: "none" } }}>
          <Button sx={{ color: "#000", fontWeight: "700" }}>
            <AppsIcon />
          </Button>
        </Box>
        <Drawer
          variant="temporary"
          anchor="right"
          open={drawer}
          onClose={() => {
            setdrawer(false);
          }}
          PaperProps={{
            style: {
              height: "auto",
              bgcolor: "yellow",
            },
          }}
        >
          <List
            sx={{ bgcolor: "#eeba00", display: { xs: "block", sm: "none" } }}
          >
            {arr.map((e, i) => (
              <Link
                to={e == "Home" ? "/" : e.toLocaleLowerCase()}
                style={{ textDecoration: "none", cursor: "pointer" }}
                key={i}
              >
                <ListItem onClick={handleclose}>
                  <ListItemButton>
                    <ListItemText
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      {e}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <Divider />
              </Link>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
export default NavbarX;
