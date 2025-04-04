import React from 'react';

import { IoMdInformationCircle } from 'react-icons/io';
import { ImProfile } from 'react-icons/im';
import { IoChatboxEllipsesSharp } from 'react-icons/io5';

const Links = [
  {
    text: 'Chat',
    path: '.',
    icon: <IoChatboxEllipsesSharp />,
  },
  {
    text: 'About Us',
    path: 'about',
    icon: <IoMdInformationCircle />,
  },
  // {
  //   text: 'Profile',
  //   path: '/',
  //   icon: <ImProfile />,
  //   disabled: true,
  // },
];

export default Links;
