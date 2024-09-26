import { UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./actionType"
import {api} from "../../Config/api"

export const updateOrderStatus = ({orderId,orderStatus,token}) => {
    return async (dispatch) => {
        try {
            dispatch({type:UPDATE_ORDER_STATUS_REQUEST})

            const response = await api.put(`/api/admin/orders/${orderId}/${orderStatus}`,{},{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })

            console.log("updateOrderStatus",response.data)
            dispatch({type:UPDATE_ORDER_STATUS_SUCCESS, payload:response.data})
        } catch (error) {
            console.log(error);
            dispatch({type:UPDATE_ORDER_STATUS_FAILURE,payload:error})
        }
    }
}

export const fetchRestaurantOrders = ({restaurantId,orderStatus,token}) => {
    return async (dispatch) => {
        try {
            dispatch({type:UPDATE_ORDER_STATUS_REQUEST})

            const {response} = await api.get(`/api/admin/order/restaurant/${restaurantId}`,{
                params: { order_status:orderStatus},
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })

            console.log("fetchRestaurantOrders",response)
            dispatch({type:UPDATE_ORDER_STATUS_SUCCESS, payload:response})
        } catch (error) {
            console.log(error);
            dispatch({type:UPDATE_ORDER_STATUS_FAILURE,payload:error})
        }
    }
}