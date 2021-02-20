import styled from "styled-components";

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: var(--white);
  color: var(--black);
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid var(--dark);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px var(--shadow), 0 1px 1px var(--shadow);
  :focus,
  :hover {
    box-shadow: 0 0 3px var(--shadow), 0 1px 5px var(--shadow);
  }
`;

export default Input;