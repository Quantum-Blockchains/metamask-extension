import { connect } from 'react-redux';
import QBCKInfo from './qbck-info.component';

const mapStateToProps = (state) => {
  const {
    metamask: { isInitialized },
  } = state;

  return {
    isInitialized,
  };
};

export default connect(mapStateToProps)(QBCKInfo);
