import styled from "styled-components";

export const LateralBar = styled.div`
  padding: 1.5rem;
  height: 100%;
  width: 25%;
  display: block;
  box-shadow: 0 0 11px 6px #ddd;
`;

export const LateralBarTitle = styled.h2`
  font-size: 1.5rem;
`;

export const LateralBarOptions = styled.div`
  width: 100%;
  height: 2.4rem;
  margin: 1.5rem 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  transition: all ease 200ms;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 11px 6px #ddd;
    transform: scale(1.05);
  }
  p {
    margin-left: 1rem;
  }
`;

export const RightSideOptions = styled(LateralBar)`
  width: 70%;
`;

export const Table = styled.table`
  border-collpase: collapse;
  width: 100%;
  border: 1px solid red;
`;

export const TableHead = styled.thead`
  border: 1px solid red;
  background-color: #000;
`;

export const TableData = styled.td`
  border: 1px solid #000;
  padding: 8px;
  text-align: left;
`;

export const TableHd = styled.th`
  color: #fff;
  border: 1px solid red;
`;

export const TableRow = styled.tr`
  border: 1px solid red;
  &:nth-child(even) {
    background-color: #ddd;
  }
`;
