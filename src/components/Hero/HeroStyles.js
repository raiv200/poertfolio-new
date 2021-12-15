import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 1200px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Image = styled.img`
  width:100%;
  height:100%;
  border-radius:20px;
  width:280px;
  height:342px;
  padding-left:25px;
  object-fit: cover;
  overflow: hidden;
`;
export  const Div = styled.div`
  
  width:495px;
  border-radius:50%;
  background-color:#7928ca;
  height:310px; 
  margin-top:80px;
  object-fit: cover;
  overflow:hidden;

`;