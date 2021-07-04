import styled from 'styled-components';

const MyHeader = styled.h1`
  font-family: cursive;
  color: red;
`;

const MySection = styled.section`
  padding: 0.5rem;
  border: 1rem solid purple;
`;

const MyButton = styled.button`
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

function App() {
  return (
    <div className="App">
      <MySection>
        <MyHeader>My header</MyHeader>
        <MyButton>My button</MyButton>
      </MySection>
    </div>
  );
}

export default App;
