import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { sendUrlRequest } from '../actions'
import DetailsURL from '../components/DetailsURL';

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      sendUrlRequest
    },
    dispatch
  );
};

const DetailsContainer = connect(mapStateToProps, mapDispatchToProps)(DetailsURL);


export default DetailsContainer