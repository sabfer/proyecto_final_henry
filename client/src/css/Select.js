import styled from "styled-components";

export const SelectContainer = styled.div`
  grid-column: ${(props) => props.gridColumn || "unset"};
  width: ${(props) => props.width};
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0 1rem;
  p {
    font-weight: 700;
  }
`;

export const Select = styled.select`
  display: block;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: ${(props) => props.fontWeight};
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border-radius: 0.6rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
`;
