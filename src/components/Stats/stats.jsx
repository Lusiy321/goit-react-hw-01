import { PropTypes } from 'prop-types';
import { Statistics, Title, StatList, Label, ListItem, Percen } from './stats.styled';

export const Stats = ({ data }) => {
  return (<Statistics>
    <Title>Upload stats</Title>
    <StatList>
      {data.map(datas => (
        <ListItem key={datas.id}>
          <Label>{datas.label} </Label>
          <Percen>{datas.percentage} %</Percen>
        </ListItem>
      ))}
    </StatList>
  </Statistics>);

};

Stats.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }),
  ),
} 