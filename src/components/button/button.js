import styled from "styled-components";

const Button = styled.button`
max-width: 100%;
padding: 11px 13px;
color: var(--white);
font-weight: 600;
text-transform: uppercase;
background:  var(
    ${(props) =>
    props.backgroundColor
        ? props.backgroundColor
        : "--blue"}
  );
border: none;
border-radius: 3px;
outline: 0;
cursor: pointer;
margin-top: 0.6rem;
box-shadow: 0 1px 3px var(--shadow), 0 1px 2px  var(--shadow);
transition: all 0.3s ease-out;
`;

export default Button;
