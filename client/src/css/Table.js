import styled from "styled-components";
export const Table = styled.table`
  border-collpase: collapse;
  width: 100%;
  border: 2px solid rgb(0, 0, 0);
`;

export const TableHead = styled.thead`
  height: 2.4rem;
  width: 25%;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 1);
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #ddd;
  }
`;

export const TableHd = styled.th`
  width: ${(props) => props.width};
  color: #fff;
`;

export const TableData = styled.td`
  padding: 8px;
  text-align: left;
  & div {
    display: flex;
    justify-content: space-around;
  }
`;
