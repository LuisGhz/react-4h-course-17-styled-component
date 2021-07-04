import styled from 'styled-components';

export default styled.button`
  font-family: cursive;
  font-size: 1.3rem;
  border: 1px dashed;
  border-radius: 5px;
  padding: 8px 10px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    transition: all 0.2s;
  }
`;