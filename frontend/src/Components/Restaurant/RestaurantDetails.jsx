import { Divider, Grid, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import React, { useEffect, useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantById, getRestaurantsCategory } from "../State/Restaurant/action";
import { getMenuItemsByRestaurantId } from "../State/Menu/action";

/*const categories = [
  "All",
  "Hamburger",
  "Pizza",
  "Sandwich",
  "Healty and Salad",
  "Chineese Food",
  "Kebab",
  "Doner",
];*/

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegeterian", value: "vegeterian" },
  { label: "Not Vegeterian", value: "not-vegeterian" },
  { label: "Seasonal", value: "seasonal" },
];
export const RestaurantDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedCategory,setSelectedCategory] = useState("");

  const jwt = localStorage.getItem("token");

  const { auth,restaurant, menu } = useSelector(store => store);

  const [foodType, setFoodType] = useState("all");


  const {id,city} = useParams();

  const handleFilter = (e) => {
    setFoodType(e.target.value)
    console.log(e.target.value, e.target.name);
  };
  

  const handleFilterCategory = (e,value) => {
    setSelectedCategory(value)
    console.log(e.target.value, e.target.name,value);
  };

  //console.log("restaurant",restaurant)

  useEffect(()=>{
    dispatch(getRestaurantById({token:jwt,restaurantId:id}))
    dispatch(getRestaurantsCategory({restaurantId:id,token:jwt}))
  
  },[])

  useEffect(()=>{
    dispatch(getMenuItemsByRestaurantId({
      token: jwt,                     
      restaurantId: id,               
      vegetarian: foodType === "vegeterian",              
      nonveg: foodType === "not-vegeterian",                  
      seasonal: foodType === "seasonal",
      foodCategory:selectedCategory              
  }));
  },[selectedCategory,foodType])
  return (
    <div className="px-5 lg:px-20 ">
      <section>
        <h3 className="text-gray-400 py-2 mt-10"></h3>

        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src={restaurant.restaurant?.images[0]}
                alt=""
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src={restaurant.restaurant?.images[1]}
                alt=""
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src={restaurant.restaurant?.images[2]}
                alt=""
              />
            </Grid>
          </Grid>
        </div>

        <div className="pt-3 pb-5 ">
          <h1 className="text-4xl font-semibold">{restaurant.restaurant?.name}</h1>

          <p className="text-gray-400 mt-1">
            {restaurant.restaurant?.description}
          </p>

          <div className="space-y-3 mt-3">
            <p className="text-gray-400 flex items-center gap-3">
              <PlaceIcon />
              <span>{restaurant.restaurant?.address.city}/{restaurant.restaurant?.address.country}</span>
            </p>
            <p className="text-gray-400 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>Mon-Sun: {restaurant.restaurant?.openingHours}</span>
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter p-5 shadow-md">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilterCategory}
                  name="food_category"
                  value={selectedCategory}
                >
                  {restaurant.categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item.name}
                      control={<Radio />}
                      label={item.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        <div className="space-y-10 lg:w-[80%] lg:pl-10">
          {menu.menuItems.map((item) => (
            <MenuCard item={item}/>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
