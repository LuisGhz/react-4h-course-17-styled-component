import { ThemeProvider } from 'styled-components';
import MyButton from 'elements/MyButton';
import MyHeader from 'elements/MyHeader';
import MySection from 'elements/MySection';
import MaterialButton from 'elements/MaterialButton'
import MyButtonTheme from 'elements/MyButtonTheme';
import { GreenTheme } from 'theme/theme';

function App() {
  return (
    <ThemeProvider theme={ GreenTheme } >
      <MySection>
        <MyHeader>My header</MyHeader>
        <MyButton primary >My button</MyButton>
        <MyButton>My button</MyButton>
        <MyButtonTheme>My button</MyButtonTheme>
        <MaterialButton>Material button</MaterialButton>
      </MySection>
    </ThemeProvider>
  );
}

export default App;
