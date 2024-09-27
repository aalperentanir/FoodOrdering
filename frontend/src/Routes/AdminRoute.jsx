import React from "react"
import { Route, Routes } from "react-router-dom"
import CreateRestaurantForm from "../AdminComponents/CreateRestaurantForm/CreateRestaurantForm"
import Admin from "../AdminComponents/Admin/Admin"


export const AdminRoute = () => {
    return(
        <div>
            <Routes>
                <Route path="/*" element={true ? <CreateRestaurantForm/> : <Admin/>}/>
            </Routes>
        </div>
    )
}

export default AdminRoute