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

// FeaturedInfo Component
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

// Sidebar Component
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

// Chart Component
export const userData = [
  {
    name: "Jan",
    "Active User": 4000,
  },
  {
    name: "Feb",
    "Active User": 3460,
  },
  {
    name: "Mar",
    "Active User": 2843,
  },
  {
    name: "Apr",
    "Active User": 4323,
  },
  {
    name: "May",
    "Active User": 3840,
  },
  {
    name: "Jun",
    "Active User": 4365,
  },
  {
    name: "Jul",
    "Active User": 3257,
  },
  {
    name: "Aug",
    "Active User": 2285,
  },
  {
    name: "Sep",
    "Active User": 3650,
  },
  {
    name: "Oct",
    "Active User": 4340,
  },
  {
    name: "Nov",
    "Active User": 4774,
  },
  {
    name: "Dec",
    "Active User": 4231,
  },
];

// WidgetLg Component
export const transactionsData = {
  head: [
    {
      id: "t-1",
      title: "Customer",
    },
    {
      id: "t-2",
      title: "Date",
    },
    {
      id: "t-3",
      title: "Amount",
    },
    {
      id: "t-4",
      title: "Status",
    },
  ],
  data: [
    {
      id: 1,
      image: "assets/1.jpeg",
      name: "Susan Carol",
      date: "2 Jun 2021",
      amount: "122.00",
      status: "Approved",
    },
    {
      id: 2,
      image: "assets/2.jpeg",
      name: "Bibi Lam",
      date: "18 June 2021",
      amount: "99",
      status: "Declined",
    },
    {
      id: 3,
      image: "assets/3.jpeg",
      name: "Penny Smith",
      date: "4 June 2021",
      amount: "111",
      status: "Pending",
    },
    {
      id: 4,
      image: "assets/4.jpeg",
      name: "Mary Lee",
      date: "9 June 2021",
      amount: "88",
      status: "Approved",
    },
    {
      id: 5,
      image: "assets/5.jpeg",
      name: "Jessica Kim",
      date: "25 June 2021",
      amount: "100",
      status: "Approved",
    },
  ],
};

// WidgetSm Component
export const newJoinMembersData = [
  {
    id: 1,
    image: "assets/6.png",
    name: "Anna Keller",
    title: "Software Engineer",
    button: "Display",
  },
  {
    id: 2,
    image: "assets/7.png",
    name: "Mary Jones",
    title: "Front-End Developer",
    button: "Display",
  },
  {
    id: 3,
    image: "assets/8.png",
    name: "Miya Kross",
    title: "Back-End Developer",
    button: "Display",
  },
  {
    id: 4,
    image: "assets/9.png",
    name: "Mashar Lisa",
    title: "Full Stack Developer",
    button: "Display",
  },
  {
    id: 5,
    image: "assets/10.png",
    name: "Yve Lisa",
    title: "Software Engineer",
    button: "Display",
  },
];

// UserList Component
export const userRows = [
  {
    id: 1,
    username: "Anna Keller",
    avatar: "assets/1.jpeg",
    email: "anna-keller@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 2,
    username: "Mary Jones",
    avatar: "assets/2.jpeg",
    email: "mary-jones@gmail.com",
    status: "active",
    transaction: "$110.00",
  },
  {
    id: 3,
    username: "Miya Kross",
    avatar: "assets/3.jpeg",
    email: "miya-kross@gmail.com",
    status: "pending",
    transaction: "$99.99",
  },
  {
    id: 4,
    username: "Marshar Lisa",
    avatar: "assets/4.jpeg",
    email: "marshar-lisa@gmail.com",
    status: "active",
    transaction: "$128.00",
  },
  {
    id: 5,
    username: "Yve Lisa",
    avatar: "assets/5.jpeg",
    email: "yve-lee@gmail.com",
    status: "declined",
    transaction: "$80.00",
  },
  {
    id: 6,
    username: "Susan Carol",
    avatar: "assets/6.png",
    email: "susan-carol@gmail.com",
    status: "active",
    transaction: "$138.00",
  },
  {
    id: 7,
    username: "Bibi Lam",
    avatar: "assets/7.png",
    email: "bibi-lam@gmail.com",
    status: "active",
    transaction: "$100.00",
  },
  {
    id: 8,
    username: "Penny Smith",
    avatar: "assets/8.png",
    email: "penny-smith@gmail.com",
    status: "active",
    transaction: "$111.00",
  },
  {
    id: 9,
    username: "Mary Lee",
    avatar: "assets/9.png",
    email: "mary-lee@gmail.com",
    status: "pending",
    transaction: "$150.00",
  },
  {
    id: 10,
    username: "Jessica Kim",
    avatar: "assets/10.png",
    email: "jessica-kim@gmail.com",
    status: "active",
    transaction: "$88.00",
  },
];

// User Component
export const singleUserRows = [
  {
    id: 1,
      fullName: "Anna Keller",
      userName: "anna-beck",
      jobTitle: "Software Engineer",
      image: "assets/1.jpeg",
      birthday: "10.12.1999",
      phone: "+1 315 695 6347",
      email: "anna-keller@gmail.com",
      address: "New York | USA",
  },
  {
    id: 2,
      name: "Mary Jones",
      userName: "mary-jones",
      jobTitle: "Web Developer",
      image: "assets/2.jpeg",
      birthday: "6.12.1997",
      phone: "+1 315 355 8755",
      email: "mary-jones@gmail.com",
      address: "New York | USA",
  },
  {
    id: 3,
      name: "Miya Kross",
      userName: "miya-kross",
      jobTitle: "Software Engineer",
      image: "assets/3.jpeg",
      birthday: "4.16.2000",
      phone: "+1 315 878 5421",
      email: "miya-kross@gmail.com",
      address: "New York | USA",
  },
  {
    id: 4,
      name: "Marshar Lisa",
      userName: "marshar-lisa",
      jobTitle: "Full Stack Developer",
      image: "assets/4.jpeg",
      birthday: "8.2.1999",
      phone: "+1 312 558 6765",
      email: "marshar-lisa@gmail.com",
      address: "Chicago | USA",
  },
  {
    id: 5,
      name: "Yve Lisa",
      userName: "yve-lisa",
      jobTitle: "Software Engineer",
      image: "assets/5.jpeg",
      birthday: "5.22.1998",
      phone: "+1 312 666 8447",
      email: "yve-lisa@gmail.com",
      address: "Chicago | USA",
  },
  {
    id: 6,
      name: "Susan Carol",
      userName: "susan-carol",
      jobTitle: "UI/UX Designer",
      image: "assets/6.png",
      birthday: "10.1.1999",
      phone: "+1 315 875 6764",
      email: "susan-carol@gmail.com",
      address: "New York | USA",
  },
  {
    id: 7,
      name: "Bibi Lam",
      userName: "bibi-lam",
      jobTitle: "Software Engineer",
      image: "assets/7.png",
      birthday: "10.12.1999",
      phone: "+1 315 996 4877",
      email: "bibi-lam@gmail.com",
      address: "New York | USA",
  },
  {
    id: 8,
      name: "Penny Smith",
      userName: "penny-smith",
      jobTitle: "UI/UX Designer",
      image: "assets/8.png",
      birthday: "10.10.2000",
      phone: "+1 312 653 8847",
      email: "penny-smith@gmail.com",
      address: "Chicago | USA",
  },
  {
    id: 9,
      name: "Mary Lee",
      userName: "mary-lee",
      jobTitle: "Backend Developer",
      image: "assets/9.png",
      birthday: "11.12.1999",
      phone: "+1 315 790 2367",
      email: "mary-lee@gmail.com",
      address: "New York | USA",
  },
  {
    id: 10,
      name: "Jessica Kim",
      userName: "jessica-kim",
      jobTitle: "Backend Developer",
      image: "assets/10.png",
      birthday: "8.12.2001",
      phone: "+1 312 555 5087",
      email: "jessica-kim@gmail.com",
      address: "Chicago | USA",
  },
];

// ProductList Component
export const productRows = [
  {
    id: 1,
    name: "Apple Airpods",
    img: "assets/p1.png",
    stock: 1233,
    status: "active",
    price: "$122.00",
  },
  {
    id: 2,
    name: "iPhone 11",
    img: "assets/p2.jpeg",
    stock: 123,
    status: "active",
    price: "$499.00",
  },
  {
    id: 3,
    name: "iPhone 12",
    img: "assets/p3.png",
    stock: 353,
    status: "active",
    price: "$599.00",
  },
  {
    id: 4,
    name: "Redmi",
    img: "assets/p4.jpeg",
    stock: 523,
    status: "active",
    price: "$288.00",
  },
  {
    id: 5,
    name: "Beats Studio",
    img: "assets/p5.jpeg",
    stock: 103,
    status: "active",
    price: "$350.00",
  },
  {
    id: 6,
    name: "Sony Headphone",
    img: "assets/i-watch.png",
    stock: 1231,
    status: "active",
    price: "$320.00",
  },
  {
    id: 7,
    name: "iPhone SE",
    img: "assets/p7.jpeg",
    stock: 323,
    status: "active",
    price: "$920.00",
  },
  {
    id: 8,
    name: "Sangsung X7",
    img: "assets/iPhone.jpeg",
    stock: 3123,
    status: "active",
    price: "$320.00",
  },
  {
    id: 9,
    name: "Google Pixel",
    img: "assets/p9.jpeg",
    stock: 1623,
    status: "active",
    price: "$2420.00",
  },
  {
    id: 10,
    name: "Macbook Pro",
    img: "assets/p10.jpeg",
    stock: 1223,
    status: "active",
    price: "$2999.00",
  },
];

