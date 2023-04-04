import PropTypes from 'prop-types';
import Section from '../Section/Section';

const FeedbackOptions = ({ handleIncrement, ...props }) => {
  return (
    <Section title={'Please leave feedback'}>
      {Object.keys(props).map((el, i) => (
        <button
          key={`${i}`}
          onClick={() => handleIncrement(`${el}`)}
          type="button"
          name={el}
          className="button"
        >
          {el}
        </button>
      ))}
    </Section>
  );
};

FeedbackOptions.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default FeedbackOptions;
