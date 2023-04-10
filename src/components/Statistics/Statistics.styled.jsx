import styled from '@emotion/styled';

export const Statistic = styled.div`
  width: 400px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 1px 1px 8px -2px ${props => props.theme.colors.secondColor};
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 400;
  text-align: center;

  color: ${props => props.theme.colors.secondColor};
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100% / ${props => props.quantity});
  background-color: ${props => props.bgColor};
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Label = styled.span`
  font-size: 16px;
  color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
  font-size: 20px;
  color: ${props => props.theme.colors.white};
`;
