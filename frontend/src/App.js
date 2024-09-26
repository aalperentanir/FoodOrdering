import {CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import { darkTheme } from "./Theme/DarkTheme";
import Home from "./Components/Home/Home";
import RestaurantDetails from "./Components/Restaurant/RestaurantDetails";
import { Cart } from "./Components/Card/Cart";
import Profile from "./Components/Profile/Profile";
import CustomerRoute from "./Routes/CustomerRoute";
import Auth from "./Components/Auth/Auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "./Components/State/Auth/Action";
import { findCard } from "./Components/State/Card/action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("token");
  const {auth} = useSelector(store=>store);

  useEffect(()=> {
    dispatch(getUserProfile(auth.token || jwt));
    dispatch(findCard(jwt))
  },[auth.token])
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/*<Navbar />*/}
        {/*<Home/>*/}
        {/*<RestaurantDetails/>*/}
        {/*<Cart/>*/}
        {/*<Profile/>*/}
        {/*<Auth/>*/}
        <CustomerRoute/>
      </ThemeProvider>
    </div>
  );
}

export default App;
