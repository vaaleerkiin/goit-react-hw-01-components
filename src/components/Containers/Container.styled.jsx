import styled from '@emotion/styled';

export const Container = styled.section`
  border: dashed ${props => props.theme.colors.black} 1px;
  width: 100%;
  background-color: ${props => props.theme.colors.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;
