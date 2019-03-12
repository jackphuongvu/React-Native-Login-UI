import React from 'react';
// import {View} from 'react-native';
import styles from './styles';
import PhoneIcon from '../assets/icons/phone_iphone.svg';
import LockIcon from '../assets/icons/lock.svg';
// export home from '../assets/icons/home.svg';
// export project from '../assets/icons/project.svg';
// export alert from '../assets/icons/alert.svg';
// export transaction from '../assets/icons/transaction.svg';
// export User from '../assets/icons/user.svg';


/* Home Icons */
const HomeIcon = ({
                    fill = styles.inactiveGreyColor

                  }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24">
    <path fill={fill} fill-rule="nonzero" d="M21.53 9.386L11.22.219a.88.88 0 0 0-1.18.016L.3 9.402A.822.822 0 0 0 .04 10v13.167c0 .46.384.833.859.833h7.16c.475 0 .86-.373.86-.833v-6.111h4.01v6.11c0 .46.385.834.86.834h7.16c.475 0 .86-.373.86-.833V10c0-.234-.1-.456-.279-.614zm-1.44 12.947h-5.442v-6.11a.847.847 0 0 0-.86-.834H8.06a.847.847 0 0 0-.86.833v6.111H1.758v-11.98l8.897-8.374 9.435 8.388v11.966z"/>
  </svg>
)

export {
  PhoneIcon,
  LockIcon,
  // HomeIcon
}

export default HomeIcon;
