import styled, { css } from 'styled-components';

export default styled.button`
  ${ props => props.primary?css`
  background-color: blue;
  color: white;
  `:css`
    background-color: red;
    color: yellow;
  `}
  cursor: pointer;
  border: 1px dashed;
  border-radius: 5px;
  font-family: cursive;
  font-size: 1.3rem;
  padding: 8px 10px;
  &:hover {
    background-color: black;
    color: white;
    transition: all 0.2s;
  }
`;