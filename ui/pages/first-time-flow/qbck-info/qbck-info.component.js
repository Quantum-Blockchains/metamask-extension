import EventEmitter from 'events';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Mascot from '../../../components/ui/mascot';
import Button from '../../../components/ui/button';
import {
  INITIALIZE_SEED_PHRASE_INTRO_ROUTE,
} from '../../../helpers/constants/routes';
import { isBeta } from '../../../helpers/utils/build-types';
import WelcomeFooter from './welcome-footer.component';
import BetaWelcomeFooter from './beta-welcome-footer.component';

export default class QBCKInfo extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
  };

  static contextTypes = {
    t: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.animationEventEmitter = new EventEmitter();
  }

  componentDidMount() {
    const { history, isInitialized } = this.props;

    alert("QBCK info page");
  }

  render() {
    const openInNewTab = url => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };
    const { t } = this.context;

    return (
      <div className="welcome-page__wrapper">
        <div className="welcome-page">
          <Mascot
            animationEventEmitter={this.animationEventEmitter}
            width="125"
            height="125"
          />
          {isBeta() ? <BetaWelcomeFooter /> : <WelcomeFooter />}
          <Button
            type="primary"
            className="first-time-flow__button"
            onClick={(e) => {
              e.preventDefault();
              history.push(INITIALIZE_SEED_PHRASE_INTRO_ROUTE);
            }}
          >
            {t('continue')}
          </Button>
          <Button
            type="primary"
            className="first-time-flow__button"
            onClick={() => openInNewTab('https://www.quantumblockchains.io/current-services/api/')}
          >
            {t('findOutMore')}
          </Button>
        </div>
      </div>
    );
  }
}
