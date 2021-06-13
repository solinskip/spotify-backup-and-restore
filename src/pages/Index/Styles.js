import styled from 'styled-components';
import titleLineImage from '../../images/line.svg'

export const Container = styled.div`
  border: 1px solid #adadad8c;
  width: 500px;
  height: 600px;
  margin: 90px auto 0 auto;
  padding: 15px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 7px 7px 19px -5px rgba(0, 0, 0, 0.42);
`;

export const Title = styled.div`
  margin: auto;
  font-size: 3rem;
  border-bottom: 3px solid;
  padding: 5px 20px 0 20px;
  border-image: url(${titleLineImage}) 1;
  text-align: center;
  max-width: 800px;
`;