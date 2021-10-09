// Featured Items
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

// Sidebar Items
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

export const featuredItems = [
  {
    id: 1,
    title: "Revenue",
    money: "2,415",
    moneyRate: "-11.4",
    icon: <ArrowDownward style={{ color: "red" }} />,
    subTitle: "Compared to last month",
  },
  {
    id: 2,
    title: "Sales",
    money: "4, 415",
    moneyRate: "-1.9",
    icon: <ArrowDownward style={{ color: "red" }} />,
    subTitle: "Compared to last month",
  },
  {
    id: 3,
    title: "Cost",
    money: "3,475",
    moneyRate: "+3.7",
    icon: <ArrowUpward style={{ color: "green" }} />,
    subTitle: "Compared to last month",
  },
];

export const sidebarItems = [
  {
    id: 1,
    title: "Dashboard",
    items: [
      {
        id: "1-1",
        icon: <LineStyle />,
        name: "Home",
      },
      {
        id: "1-2",
        icon: <Timeline />,
        name: "Analytics",
      },
      {
        id: "1-3",
        icon: <TrendingUp />,
        name: "Sales",
      },
    ],
  },
  {
    id: 2,
    title: "Quick Menu",
    items: [
      {
        id: "2-1",
        icon: <PermIdentity />,
        name: "Users",
      },
      {
        id: "2-2",
        icon: <Storefront />,
        name: "Products",
      },
      {
        id: "2-3",
        icon: <AttachMoney />,
        name: "Transactions",
      },
      {
        id: "2-4",
        icon: <BarChart />,
        name: "Reports",
      },
    ],
  },
  {
    id: 3,
    title: "Notifications",
    items: [
      {
        id: "3-1",
        icon: <MailOutline />,
        name: "Mail",
      },
      {
        id: "3-2",
        icon: <DynamicFeed />,
        name: "Products",
      },
      {
        id: "3-3",
        icon: <ChatBubbleOutline />,
        name: "Messages",
      },
    ],
  },
  {
    id: 4,
    title: "Staff",
    items: [
      {
        id: "4-1",
        icon: <WorkOutline />,
        name: "Manage",
      },
      {
        id: "4-2",
        icon: <Timeline />,
        name: "Analytics",
      },
      {
        id: "4-3",
        icon: <Report />,
        name: "Reports",
      },
    ],
  },
];