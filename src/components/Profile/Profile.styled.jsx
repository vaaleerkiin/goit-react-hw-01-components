import styled from '@emotion/styled';

export const Container = styled.div`
  width: 400px;
  //   height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 1px 1px 8px -2px ${props => props.theme.colors.secondColor};
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin: 0;
  }
`;

export const Avatar = styled.img`
  width: 160px;
  border-radius: 50%;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Name = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: ${props => props.theme.colors.black};
`;

export const Info = styled.p`
  font-size: 24px;
  padding-top: 14px;
  color: ${props => props.theme.colors.secondColor};
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  margin-top: 40px;
  width: 100%;
  background-color: ${props => props.theme.colors.lightGray};
`;
export const Stat = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 32px;
  padding-bottom: 32px;
  width: calc(100% / 3);
  border: solid ${props => props.theme.colors.bgColor} 1px;
`;

export const Label = styled.span`
  font-size: 20px;
  color: ${props => props.theme.colors.secondColor};
`;

export const Quantity = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
