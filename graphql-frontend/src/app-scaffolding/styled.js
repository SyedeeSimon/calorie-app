import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 64px;
  background-color: white;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  min-height: 1000px;
  background-color: white;
`;

const Wrapper = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  background-color: rgb(234, 238, 243);
`;

export default Wrapper;
