import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: 'Profile',
    path: '/photos',
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Friends',
    path: '/friends',
    icon: <FaIcons.FaUserFriends />,
    cName: 'nav-text'
  },
  {
    title: 'Groups',
    path: '/groups',
    icon: <MdIcons.MdGroups />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <IoIcons.IoMdSettings />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Log out',
    path: '/logout',
    icon: <IoIcons.IoIosLogOut />,
    cName: 'nav-text'
  }
];
