import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  //Kodi poshte:All about database.
  useEffect(() => {
    if (user) {
      //If a user exists(if there's a user),then the code below applies.
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]); //Kodi siper(if...)
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your orders!</h1>
      <div className="orders__order">
        {orders?.map((
          order //Map through every single order.
        ) => (
          <Order order={order} /> //..and return an order element.
        ))}
      </div>
    </div>
  );
}
export default Orders;
