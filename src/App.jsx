import { ThemeProvider } from 'styled-components';
import MyButton from 'elements/MyButton';
import MyHeader from 'elements/MyHeader';
import MySection from 'elements/MySection';
import MaterialButton from 'elements/MaterialButton'
import MyButtonTheme from 'elements/MyButtonTheme';
import PageWrapper from 'elements/PageWrapper';
import { GreenTheme } from 'theme/theme';
import { useState } from 'react';

function App() {
  const pages = [
    {
      title: 'page1',
      buttons: [
        { text: 'next' }
      ]
    },
    {
      title: 'page2',
      buttons: [
        { text: 'prev' },
        { text: 'next' }
      ]
    },
    {
      title: 'page3',
      buttons: [
        { text: 'prev' },
        { text: 'next' }
      ]
    },
    {
      title: 'page4',
      buttons: [
        { text: 'prev' },
        { text: 'next' }
      ]
    },
    {
      title: 'page5',
      buttons: [
        { text: 'prev' }
      ]
    },
  ];
  const [id, setId] = useState(0);
  let pageDisplay = pages[id];
  const go = index => {
    if (id === 0 && index === 0) setId(id + 1)
    else if (index === 0) setId(id - 1);
    else setId(id + 1);
  }

  return (
    <ThemeProvider theme={ GreenTheme } >
      <MySection>
        <MyHeader>{ pageDisplay.title }</MyHeader>
        <PageWrapper pid={ id } npages={ pages.length } >
          { pageDisplay.buttons.map((button, i) => {
            return <MyButton key={ i } onClick={ () => go(i) } >{ button.text }</MyButton>
          })}
        </PageWrapper>
        {/* <MyButton primary >My button</MyButton>
        <MyButton>My button</MyButton>
        <MyButtonTheme>My button</MyButtonTheme>
        <MaterialButton>Material button</MaterialButton> */}
      </MySection>
    </ThemeProvider>
  );
}

export default App;
