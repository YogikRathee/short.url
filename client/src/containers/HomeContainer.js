import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { sendUrlRequest } from '../actions'
import ShortURL from '../components/ShortURL';

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

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(ShortURL);


export default HomeContainer