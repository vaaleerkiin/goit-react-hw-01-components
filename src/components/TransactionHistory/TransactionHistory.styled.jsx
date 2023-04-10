import styled from '@emotion/styled';

export const Transaction = styled.table`
  border-radius: 8px;
  overflow: hidden;
  padding: 0;
  margin: 0;
  width: 1000px;

  thead {
    th {
      background-color: ${props => props.theme.colors.blue};
      font-size: 20px;
      font-weight: 400;

      color: ${props => props.theme.colors.white};
      width: calc(100% / 3);
      height: 44px;
    }
  }
  tbody {
    td {
      background-color: ${props => props.theme.colors.blue};
      font-size: 20px;
      font-weight: 400;
      text-align: center;
      color: ${props => props.theme.colors.secondColor};
      width: calc(100% / 3);
      height: 44px;
    }
    tr {
      :nth-of-type(even) {
        td {
          background-color: ${props => props.theme.colors.white};
        }
      }
      :nth-of-type(odd) {
        td {
          background-color: ${props => props.theme.colors.bgColor};
        }
      }
    }
  }
`;
