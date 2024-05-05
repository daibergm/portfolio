import { AiOutlineHome } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { FaRegUser } from 'react-icons/fa';
// import { FiCodesandbox } from 'react-icons/fi';
// import { RiContactsBookLine } from 'react-icons/ri';

export const APP_MENU = [
  {
    id: '01',
    name: 'Home',
    routePath: '/',
    icon: <AiOutlineHome />,
  },
  {
    id: '02',
    name: 'About',
    routePath: '/about',
    icon: <FaRegUser />,
  },
  {
    id: '06',
    name: 'Resume',
    routePath: '/resume',
    icon: <CgNotes />,
  },
  // {
  //   id: "03",
  //   name: "Works",
  //   routePath: "/works",
  //   icon: <FiCodesandbox />,
  // },
  // {
  //   id: "05",
  //   name: "Contact",
  //   routePath: "/contact",
  //   icon: <RiContactsBookLine />,
  // },
];
