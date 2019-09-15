import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getLongUrl } from '../actions'
import Redirect from '../components/Redirect';

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getLongUrl
    },
    dispatch
  );
};

const RedirectContainer = connect(mapStateToProps, mapDispatchToProps)(Redirect);


export default RedirectContainer