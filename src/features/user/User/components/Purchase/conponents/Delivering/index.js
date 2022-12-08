import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import orderApi from "../../../../../../../api/orderApi";
import PusrchaseItem from "../Purchase_Item";
import "./index.scss";

export default function Delivering() {
    const userInfo = useSelector(state => state.auths) || [];
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);

    const fetchOrders =  async (userInfo) => {
        setLoading(true);
        try{
            const body = {
                token: userInfo.token,
                id: userInfo.id
            }
          const response = await orderApi.getOrdersByAccount(body);
          const data = response.data.content;
          if(response.status == 200)
          {
            if(data.length > 0){
                let orderList = [];
                let orderDelivereingList = [];
                data.forEach(async(item) => {
                    if(item.status == "Đang giao")
                    {
                        orderDelivereingList.push(item);
                    }
                }) 
                orderDelivereingList.forEach(async(item, index) => {
                    if(item.status == "Đang giao")
                    {
                        const response = await fetchOrderDetails(userInfo.token,item.id);
                        if(response.status == 200){
                            let order_detail = {...item,detail:response.data};
                            orderList.push(order_detail);

                            if(index == orderDelivereingList.length - 1){
                                setOrders(orderList); 
                            }
                        }
                    }
                }) 
            }
          }
        } catch(error) {
          console.log("Fail to fetch orders", error);
        }
        setLoading(false);
    }

    const fetchOrderDetails =  async (token, orderId) => {
        try{
            const body = {
                token: token,
                orderId: orderId
            }
            const response = await orderApi.getOrderDetail(body);
            return response;
        } catch(error) {
          console.log("Fail to fetch order detail", error);
        }
    }

    useEffect(() =>{
        fetchOrders(userInfo);   
        }, []);

    return (
        <PusrchaseItem 
            orders = {orders}
            loading = {loading  }
        />
    );
  }  