import styled from 'styled-components';

export default styled.button`
  background-color: ${ props => props.theme.backgroundColor };
  color: ${ props => props.theme.fontColor };
  border: 1px solid ${ props => props.theme.borderColor };
  cursor: pointer;
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