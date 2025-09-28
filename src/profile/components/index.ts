import icons from "src/constants/icons";

interface Links {
  icon: any;
  label: string;
}

export const links: Links[] = [
  {
    icon: icons.calendar,
    label: "My Bookings",
  },
  {
    icon: icons.wallet,
    label: "Payment",
  },
  {
    icon: icons.person,
    label: "Profile",
  },
  {
    icon: icons.bell,
    label: "Notification",
  },
  {
    icon: icons.shield,
    label: "Security",
  },
  {
    label: "Language",
    icon: icons.language,
  },
  {
    label: "Help Center",
    icon: icons.info,
  },
  {
    label: "Invite Friends",
    icon: icons.people,
  },
];
