import EventEmitter from 'events';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/ui/button';
import { INITIALIZE_SEED_PHRASE_INTRO_ROUTE } from '../../../helpers/constants/routes';
import MetaFoxLogo from '../../../components/ui/metafox-logo';

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

  render() {
    const openInNewTab = (url) => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };
    const { t } = this.context;
    const { history } = this.props;

    return (
      <div className="qbck-page__wrapper">
        <div className="app-header">
          <div className="app-header__contents">
            <MetaFoxLogo />
          </div>
        </div>
        <div className="qbck-page">
          <a href="https://www.quantumblockchains.io/" target="_blank">
            <img
              src="images/qbck-logo.svg"
              className="qbck-page__logo"
              alt=""
            />
          </a>
          <div className="qbck-page__content-item">
            <h2>{t('qbckPageTitle')}</h2>
            <p className="qbck-page__content-description">
              {t('qbckPageDescription')}
            </p>
          </div>
          <div className="qbck-page__content-item">
            <div className="qbck-page__content-item-col">
              <Button
                type="secondary"
                className="qbck-page__button"
                onClick={() =>
                  openInNewTab(
                    'https://www.quantumblockchains.io/quantum-cryptography-qrng-qkd/qrng-api/',
                  )
                }
              >
                {t('findOutMore')}
              </Button>              
            </div>
          </div>
          <Button
            type="primary"
            className="qbck-page__button"
            onClick={(e) => {
              e.preventDefault();
              history.push(INITIALIZE_SEED_PHRASE_INTRO_ROUTE);
            }}
          >
            {t('continue')}
          </Button>
        </div>
      </div>
    );
  }
}
