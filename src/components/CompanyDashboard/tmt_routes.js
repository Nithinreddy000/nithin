import Dashboard from "./layouts/dashboard";
import Profile from "./layouts/profile";
import Notifications from "./layouts/notifications";
import SignOut from "./layouts/authentication/sign-out";
import Sales from "./layouts/Sales";
import Orders from "./layouts/orders";
import Inward_Orders from "./layouts/inward_orders";
import Gate from "./layouts/gate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Weighment from "./layouts/weighment";
import Grn from "./layouts/grn";
import Purchase from "./layouts/purchase";
import Transporting from "./layouts/transporting";
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import RegisterIcon from '@mui/icons-material/AppRegistration';

// @mui icons
import Icon from "@mui/material/Icon";
import Pending from "./layouts/pending";
import Dispatch from "./layouts/dispatch";
import Billing from "./layouts/billing2";
import Invoice from "./layouts/invoice";
import TmtRegister from "./layouts/tmt_register";

const Tmtroutes = [
  {
    type: "collapse",
    name: "TMT Bars",
    key: "sanjay",
    icon: <Icon fontSize="small">bar_chart</Icon>,
    id: "sanjay",
    routes: [
      { id2: 't1',key:'t1', name: "Sanjay" },
      { id2: 't2',key:'t2', name: "Jaidev" },
      { id2: 't3',key:'t3', name: "Arun" },
      { id2: 't4',key:'t4', name: "Kappor's" },
    ],
  },
  {
    type: "collapse",
    name: "Billets",
    key: "sanjay2",
    icon: <Icon fontSize="small">layers</Icon>,
    id: "sanjay2",
    routes: [
      { id2: 't5',key:'t5', name: "Sanjay" },
      { id2: 't6',key:'t6', name: "Jaidev" },
      { id2: 't7',key:'t7', name: "Arun" },
      { id2: 't8',key:'t8', name: "Kappor's" },
    ],
  },
  {
    type: "collapse",
    name: "Structures",
    key: "sanjay3",
    icon: <Icon fontSize="small">building</Icon>,
    id: "sanjay3",
    routes: [
      { id2: 't9',key:'t9', name: "Sanjay" },
      { id2: 't10',key:'t10', name: "Jaidev" },
      { id2: 't11',key:'t11', name: "Arun" },
      { id2: 't12',key:'t12', name: "Kappor's" },
    ],
  },
  {
    type: "collapse",
    name: "Pipes",
    key: "sanjay4",
    icon: <Icon fontSize="small">plumbing</Icon>,
    id: "sanjay4",
    routes: [
      { id2: 't13',key:'t13', name: "Sanjay" },
      { id2: 't14',key:'t14', name: "Jaidev" },
      { id2: 't15',key:'t15', name: "Arun" },
      { id2: 't16',key:'t16', name: "Kappor's" },
    ],
  },
];

export default Tmtroutes;
