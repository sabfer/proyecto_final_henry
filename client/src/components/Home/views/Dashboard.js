import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { faCog, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Body, Button, Header, StyledLink, Title } from "../../../css";
import { BodyTop } from "../../../css/HomeStyles";
import DeliveryModule from "../components/modules/Delivery";
import SalonModule from "../components/modules/Salon";
import TakeAwayModule from "../components/modules/TakeOut";
import {
  getUserId,
  changeSettings,
  getProducts,
  getCategories,
  deleteToken,
} from "../../../actions/index";

export default function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userToken);
  const userId = useSelector((state) => state.userId);

  if (token && !userId) {
    dispatch(getUserId(token));
  }

  useEffect(() => {
    dispatch(changeSettings({ show: "" }));
    dispatch(getCategories(token, userId));
    dispatch(getProducts(token, userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, userId]);

  function handleLogOut() {
    dispatch(deleteToken());
    history.push("/");
  }

  return (
    <div>
      <Header>
        <Title>Bienvenido</Title>
        <div style={{ display: "flex" }}>
          <StyledLink to="/kitchenDashboard">
            <Button
              width="9rem"
              height="2.5rem"
              justify="space-between"
              padding="0.5rem"
              buttonColor="rgb(42, 194, 209)"
              margin="0 1rem 0 0"
            >
              Ir a la cocina
              <FontAwesomeIcon icon={faUtensils} size="lg" />
            </Button>
          </StyledLink>
          <StyledLink to="/settings">
            <Button
              width="7rem"
              height="2.5rem"
              justify="space-between"
              padding="0.5rem"
              buttonColor="rgb(128, 128, 128)"
              hoverColor="rgb(166, 166, 166)"
              margin="0 1rem 0 0"
            >
              Ajustes
              <FontAwesomeIcon icon={faCog} size="lg" />
            </Button>
          </StyledLink>
          <Button
            buttonColor="rgb(255, 0, 0)"
            width="5rem"
            height="2.5rem"
            padding="0.5rem"
            textSize="18px"
            onClick={handleLogOut}
          >
            Salir
          </Button>
        </div>
      </Header>
      <Body padding="3rem 3rem 0 3rem">
        <BodyTop>
          <DeliveryModule />
          <TakeAwayModule />
        </BodyTop>
        <SalonModule />
      </Body>
    </div>
  );
}
