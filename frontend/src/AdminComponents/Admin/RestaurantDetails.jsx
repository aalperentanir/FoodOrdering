import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
} from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const RestaurantDetails = () => {
  const handleRestaurantStatus = () => {};
  return (
    <div className="lg:px-20 px-5">
      <div className="py-5 flex justify-center items-center gap-5">
        <h1 className="text-2xl lg:text-7xl text-center font-bold p-5">
          Tanir's Restaurant
        </h1>

        <div>
          <Button
            color={true ? "primary" : "error"}
            size="large"
            className="py-[1rem] px-[2rem]"
            variant="contained"
            onClick={handleRestaurantStatus}
          >
            {true ? "close" : "open"}
          </Button>
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Restaurant</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex ">
                  <p className="w-48">Owner</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Ali Alperen TANIR
                  </p>
                </div>

                <div className="flex ">
                  <p className="w-48">Food Type</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Turkish Food
                  </p>
                </div>

                <div className="flex ">
                  <p className="w-48">Opening Hours</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Mon-Sun: 9:00 AM - 9:00 PM
                  </p>
                </div>

                <div className="flex ">
                  <p className="w-48">Status</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {true ? (
                      <span className="px-5 py-2 rounded-full bg-green-400 text-gray-900">
                        Open
                      </span>
                    ) : (
                      <span className="px-5 py-2 rounded-full bg-red-400 text-gray-900">
                        Closed
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Address</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex ">
                  <p className="w-48">Country</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Turkey
                  </p>
                </div>

                <div className="flex ">
                  <p className="w-48">City</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Istanbul
                  </p>
                </div>

                <div className="flex ">
                  <p className="w-48">Postal Code</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    01771
                  </p>
                </div>

                <div className="flex ">
                  <p className="w-48">Street</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Street 1
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Contact</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex ">
                  <p className="w-48">Email</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    alialperentanir@gmail.com
                  </p>
                </div>

                <div className="flex ">
                  <p className="w-48">Mobile</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    +905555555555
                  </p>
                </div>

                <div className="flex ">
                  <p className="w-48">Social</p>
                  <p className="text-gray-400">
                    <div className="flex text-gray-400 items-center pb-3 gap-2">
                      <span className="pr-5">-</span>
                      <a href="/">
                        <InstagramIcon sx={{ fontSize: "3rem" }} />
                      </a>
                      <a href="/">
                        <XIcon sx={{ fontSize: "3rem" }} />
                      </a>

                      <a href="/">
                        <LinkedInIcon sx={{ fontSize: "3rem" }} />
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default RestaurantDetails;
