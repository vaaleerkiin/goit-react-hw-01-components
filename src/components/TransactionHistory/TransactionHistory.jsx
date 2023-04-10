// import PropTypes from 'prop-types';
import { Transaction } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <Transaction>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(el => (
        <tr key={el.id}>
          <td>{el.type}</td>
          <td>{el.amount}</td>
          <td>{el.currency}</td>
        </tr>
      ))}
    </tbody>
  </Transaction>
);
