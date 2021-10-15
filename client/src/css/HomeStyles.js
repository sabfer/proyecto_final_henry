import styled from "styled-components";

export const BodyTop = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: span 2;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2.4rem 0;
  }
`;

export const Delivery = styled.div`
  width: 47%;
  padding: 1.25rem;
  max-height: 22.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 768px) {
    width: 100%;
  } ;
`;

export const TakeOut = styled(Delivery)``;

export const Salon = styled(Delivery)`
  grid-row: 3 / 4;
  grid-column: span 2;
  width: 100%;
`;

export const OrdersContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-y: scroll;
  scrollbar-color: #888888 #eaeaea;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #eaeaea ;
  }
  ::-webkit-scrollbar-thumb, mo {
    background: #888;
  }`;


export const Orders = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.ordersColumns || "repeat(auto-fill, minmax(120px, 1fr))"};
  grid-template-rows: 1fr 1fr;
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ModuleTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
`;

export const Mesa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  .available {
    color: rgb(30, 215, 96);
  }
  .occuped {
    color: rgb(229, 20, 0);
  }
`;

export const TakeAway = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const DeliveryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;