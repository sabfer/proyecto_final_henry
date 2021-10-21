import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Total from "./Views/Total";
import PorHora from "./Views/PorHora";
import PorFecha from "./Views/PorFecha";
import { getOrders } from "../../../../actions";
import BarChart from "./components/BarChart";
import moment from "moment";
import { Button, ButtonContainer } from "../../../../css/index";

export default function Contabilidad() {
  const token = useSelector((state) => state.userToken);
  const dispatch = useDispatch();
  let [render, setRender] = useState(undefined);
  let ordenes = useSelector((state) => state.totalOrders);
  // eslint-disable-next-line no-unused-vars
  let [week, setWeek] = useState(calculateWeek());

  function handleRender(e) {
    if (e === 1) {
      setRender((render = 1));
    } else if (e === 2) {
      setRender((render = 2));
    } else if (e === 3) {
      setRender((render = 3));
    } else {
      setRender((render = undefined));
    }
  }

  useEffect(() => {
    dispatch(getOrders(token));
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ordenes = null;
    };
  }, []);

  function ordersSalonCantByWeek() {
    const ordersSalon = ordenes?.filter((ord) => ord.type === "Salon");
    const ordsByday = ordersbyWeek(ordersSalon, { ...ordersByWeek }, week);
    return ordsByday;
  }

  function ordersTaCantByWeek() {
    const ordersDev = ordenes?.filter((ord) => ord.type === "Delivery");
    const ordsByday = ordersbyWeek(ordersDev, { ...ordersByWeek }, week);
    return ordsByday;
  }

  function ordersDevCantByWeek() {
    const ordersTa = ordenes?.filter((ord) => ord.type === "Take Away");
    const ordsByday = ordersbyWeek(ordersTa, { ...ordersByWeek }, week);
    return ordsByday;
  }

  return (
    <>
      <div>
        <center>
          <h1>INFORMES CONTABLES</h1>
          <ButtonContainer>
            <Button
              width="7rem"
              height="2rem"
              hoverBgColor="rgb(61, 61, 61, 70%)"
              buttonColor="rgb(61, 61, 61)"
              onClick={(e) => handleRender(1)}
            >
              Por hora
            </Button>
            <Button
              width="7rem"
              height="2rem"
              hoverBgColor="rgb(61, 61, 61, 70%)"
              buttonColor="rgb(61, 61, 61)"
              onClick={(e) => handleRender(2)}
            >
              Por fecha
            </Button>
            <Button
              width="7rem"
              height="2rem"
              hoverBgColor="rgb(61, 61, 61, 70%)"
              buttonColor="rgb(61, 61, 61)"
              onClick={(e) => handleRender(3)}
            >
              Total
            </Button>
          </ButtonContainer>
        </center>
      </div>
      <h3>Resumen semanal de ventas</h3>
      {render === 1 && (
        <div>
          <center>
            <PorHora text aling="center" />
          </center>
        </div>
      )}
      {render === 2 && (
        <div>
          <center>
            <PorFecha text aling="center" />
          </center>
        </div>
      )}
      {render === 3 && (
        <div>
          <center>
            <Total text aling="center" />
          </center>
        </div>
      )}
      {render === undefined && (
        <>
          <div>
            {ordenes && (
              <BarChart
                week={week}
                salOrds={ordersSalonCantByWeek()}
                taOrds={ordersTaCantByWeek()}
                devOrds={ordersDevCantByWeek()}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}

const ordersByWeek = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
};

function ordersbyWeek(arrayOrds, objWeek, week) {
  arrayOrds.forEach((ord) => {
    if (ord.date === week[0]) objWeek[1]++;
    if (ord.date === week[1]) objWeek[2]++;
    if (ord.date === week[2]) objWeek[3]++;
    if (ord.date === week[3]) objWeek[4]++;
    if (ord.date === week[4]) objWeek[5]++;
    if (ord.date === week[5]) objWeek[6]++;
    if (ord.date === week[6]) objWeek[7]++;
  });
  return objWeek;
}

function calculateWeek() {
  const lastDay = moment();
  const week = [];
  week.unshift(lastDay.format("YYYY/MM/DD"));
  for (let i = 1; i < 7; i++) {
    let lastDay = moment();
    let day = lastDay.subtract(i, "days").format("YYYY/MM/DD");
    week.unshift(day);
  }
  return week;
}
