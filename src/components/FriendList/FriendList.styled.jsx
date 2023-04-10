import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 400px;
  gap: 16px;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 1px 1px 8px -2px ${props => props.theme.colors.secondColor};
`;

export const Status = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  margin-left: 16px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${props => {
    if (props.status) {
      return props.theme.colors.green;
    }
    return props.theme.colors.red;
  }};
`;

export const Avatar = styled.img`
  margin-left: 16px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Name = styled.p`
  margin-left: 16px;
  font-size: 32px;

  color: ${props => props.theme.colors.black};
`;
