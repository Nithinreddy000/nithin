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
import RegisterIcon from '@mui/icons-material/AppRegistration'

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
    name: "TMT Bar 500 mts",
    key: "sanjay",
    icon: <Icon fontSize="small">bar_chart</Icon>,
    id: "sanjay",
  },
  {
    type: "collapse",
    name: "TMT Bar 400 mts",
    key: "jaidev",
    icon: <Icon fontSize="small">bar_chart</Icon>,
    id: "jaidev",
  },
  {
    type: "collapse",
    name: "TMT Bar 600 mts",
    key: "arun",
    icon: <Icon fontSize="small">bar_chart</Icon>,
    id: "arun",
  },
  {
    type: "collapse",
    name: "TMT Bar 800 mts",
    key: "kappor",
    icon: <Icon fontSize="small">bar_chart</Icon>,
    id: "kappor",
  },
];

export default Tmtroutes;
