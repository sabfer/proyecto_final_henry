import styled, { css } from "styled-components";
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableHead = styled.thead`
  height: 2.4rem;
  width: 25%;
  padding: 0.5rem;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f7f7f7;
  }
  &:nth-child(even) {
    background-color: #cdcdcd;
  }
  .productName {
    padding: 0 1rem;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 8fr 1fr;
    align-items: center;
    p {
      justify-self: center;
    }
    svg {
      justify-self: center;
    }
  }
`;

export const TableHd = styled.th`
  width: ${(props) => props.width};
  color: #fff;
  background-color: #595959;
  border: 1px solid #000;
`;

export const TableData = styled.td`
  padding: 8px;
  text-align: ${(props) => props.align || "left"};
  border: 1px solid black;
  ${(props) =>
    props.justify === "center" &&
    css`
      .options {
        display: flex;
        justify-content: center;
      }
    `};
  ${(props) =>
    props.justify === "space-between" &&
    css`
      .options {
        display: flex;
        justify-content: space-between;
      }
    `};
  input {
    width: 40px;
    border-color: "grey";
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
`;
