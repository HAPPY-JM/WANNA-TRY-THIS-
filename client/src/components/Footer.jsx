import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  bottom: 1rem;
  font-family: 'TmoneyRoundWindRegular';
  font-size: 1rem;
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Footer = () => {
  return (
    <Container>
      <p>ⓒ 2022 Elice Team-5. all rights reserved.</p>
    </Container>
  );
};

export default Footer;
