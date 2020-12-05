import React from 'react';
import PropTypes from 'prop-types';
import { isMobileOnly } from 'react-device-detect';
import whitePhoneIcon from '../../img/communication_icons/whitePhone_icon.png';
import viberIcon from '../../img/communication_icons/viber_icon.png';
import emailIcon from '../../img/communication_icons/email_icon.png';
import contactInformation from '../../servises/additionalInformation/contactInformation.json';
import style from './CommunicationIcons.module.css';

const CommunicationIcons = ({ handlePhoneBtn }) => {
  const emailAddress = `mailto:${contactInformation.emailTest}`;
  const viberAddress = `viber://chat?number=${contactInformation.emailTest}`;
  return (
    <div className={style['Communication-icons-wrapper']}>
      {isMobileOnly && (
        <button
          className={style['Phone-button']}
          type="button"
          onClick={handlePhoneBtn}
        >
          <img src={whitePhoneIcon} alt="Зателефонувати" />
        </button>
      )}
      <a href={emailAddress}>
        <img src={emailIcon} alt="Написати на електронну пошту" />
      </a>
      <a href={viberAddress}>
        <img src={viberIcon} alt="Viber" />
      </a>
    </div>
  );
};

CommunicationIcons.propTypes = {
  handlePhoneBtn: PropTypes.func.isRequired,
};

export default CommunicationIcons;
