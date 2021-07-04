import styled from 'styled-components';

export default styled.button`
  color: ${ props => props.primary ? 'blue' : 'red' };
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