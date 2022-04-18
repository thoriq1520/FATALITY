import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Fit & Proper',
    path: '/FitnProper',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Pendaftaran Fit & Proper',
        path: '/FitnProper/pendaftaran',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Pendaftaran Wawancara',
        path: '/FitnProper/wawancara',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Penilaian Fit & Proper',
        path: '/FitnProper/penilaianfit',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Penilaian Wawancara',
        path: '/FitnProper/penilaianwawancara',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },

  {
    title: 'Report',
    path: '/report',
    icon: <AiIcons.AiTwotoneFolder />,
  },

  {
    title: 'Pencarian',
    path: '/pencarian',
    icon: <AiIcons.AiOutlineSearch />,
  },
];
