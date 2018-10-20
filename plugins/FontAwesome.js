import Vue from 'vue';
import {library, config } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import {
  faFacebookF,
  faGoogle,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

import {
  faBuilding,
  faIdCard,
  faEnvelope,
  faClipboard,
  faCheckCircle,
  faDotCircle
} from '@fortawesome/free-regular-svg-icons';


import {
  faHome,
  faBriefcase,
  faFileInvoiceDollar,
  faUserTie,
  faMapMarkerAlt,
  faDollarSign,
  faUserClock,
  faChevronDown,
  faChevronUp,
  faLock,
  faPhone,
  faKey,
  faSearch,
  faClock,
  faUser,
  faHeart,
  faComment,
  faPrint,
  faTable,
  faShareAlt,
  faStar,
  faExclamationTriangle,
  faHotel,
  faClipboardList,
  faTransgender,
  faGlobeAsia,
  faSchool,
  faBook,
  faSignInAlt,
  faDoorOpen,
  faCheck,
  faCar,
  faPhoneSquare

} from '@fortawesome/free-solid-svg-icons';

library.add(
  faHome,
  faBriefcase,
  faIdCard,
  faBuilding,
  faFileInvoiceDollar,
  faUserTie,
  faMapMarkerAlt,
  faDollarSign,
  faUserClock,
  faChevronDown,
  faChevronUp,
  faEnvelope,
  faLock,
  faPhone,
  faKey,
  faSearch,
  faClock,
  faUser,
  faHeart,
  faComment,
  faPrint,
  faTable,
  faShareAlt,
  faClipboard,
  faStar,
  faExclamationTriangle,
  faHotel,
  faClipboardList,
  faTransgender,
  faGlobeAsia,
  faSchool,
  faBook,
  faFacebookF,
  faGoogle,
  faTwitter,
  faInstagram,
  faSignInAlt,
  faDoorOpen,
  faCheckCircle,
  faCheck,
  faDotCircle,
  faCar,
  faPhoneSquare,
  faLinkedinIn
);
// const stroopwafel = icon({ prefix: 'fas', iconName: 'stroopwafel' });
config.autoAddCss = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);


