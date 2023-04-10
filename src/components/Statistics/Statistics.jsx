import PropTypes from 'prop-types';
import {
  Statistic,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => (
  <Statistic>
    {title && <Title>{title.toUpperCase()}</Title>}

    <List>
      {stats.map(el => (
        <Item key={el.id} quantity={stats.length} bgColor={getRandomHexColor()}>
          <Label>{el.label}</Label>
          <Percentage>{el.percentage}%</Percentage>
        </Item>
      ))}
    </List>
  </Statistic>
);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
