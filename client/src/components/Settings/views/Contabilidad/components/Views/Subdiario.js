import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

export default function Subdiario() {
  let ordersDb = useSelector((state) => state.orders);

  function tomorrow(){
    let aux = currentDate.split()
    return aux
  }

  // date: moment().locale("es").format("DD/MM/YYYY"),
  // hour: moment().format("h:mm:ss a"),
  let currentDate = moment().locale("es").format("DD/MM/YYYY")
  let tomorrowDate = tomorrow()
  console.log(tomorrowDate)
  let openingHours = "07:00:00 pm"
  let closingHours = "02:00:00 am"
  


  // let ordersToday = ordersDb.filter(e=> e === currentDate1 || e === currentDate2)


  // function todayOrders(){
  //   let todayOrders = ordenes.filter(e=> e >= )
  // }

  function totalFactToday (){  }

  return (
    <>
      <header>
        <h1>Informe Sub-Diario</h1>
      </header>
      <div>
       <h3>Facturación total del día{totalFactToday}</h3>
      </div>
    </>
  );
}
