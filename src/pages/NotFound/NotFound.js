import React from "react";
import styled from "styled-components";

const Div = styled.div`
  font-size: 50px;
  display: inline-block;
  padding-right: 12px;
  vertical-align: middle;
  text-align: center;
  color: var(--gray);
  margin-top: 300px;
`;

export default function NotFound() {
  return <Div> Page Not Found </Div>;
}
