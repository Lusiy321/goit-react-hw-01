import { PropTypes } from 'prop-types';

export const Stats = ({ data }) => {
    return <section class="statistics">
  <h2 class="title">Upload stats</h2>  
        <ul class="stat-list">
            {data.map(datas => (
             <li class="item" key={datas.id}>
                    <span class="label">{datas.label} </span>
      <span class="percentage">{datas.percentage} %</span>
    </li> 
          ))}  
  </ul>
</section>

};

Stats.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number
}