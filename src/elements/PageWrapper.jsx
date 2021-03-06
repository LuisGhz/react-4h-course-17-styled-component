import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  justify-content: ${ ({pid, npages}) => {
    if (pid === 0) return 'flex-end';
    if (pid === npages - 1) return 'flex-start';
    return 'space-between';
  }};
`