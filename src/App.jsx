import MyButton from 'elements/MyButton';
import MyHeader from 'elements/MyHeader';
import MySection from 'elements/MySection';

function App() {
  return (
    <div className="App">
      <MySection>
        <MyHeader>My header</MyHeader>
        <MyButton primary >My button</MyButton>
        <MyButton>My button</MyButton>
      </MySection>
    </div>
  );
}

export default App;
