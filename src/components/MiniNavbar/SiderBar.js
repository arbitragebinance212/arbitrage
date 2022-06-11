import { FaGreaterThan } from "react-icons/fa";

export const SidebarData = [
  {
    path: (
      <a target="_blank" rel="noreferrer" href="https://binance.com/en/support">
        Support Center
      </a>
    ),
  },
  {
    path: <FaGreaterThan style={{ fontSize: 12 }} />,
  },
  {
    title: "Announcement",
    path: (
      <a
        target="_blank"
        rel="noreferrer"
        href="https://binance.com/en/support/aanouncemnet"
      >
        Announcement
      </a>
    ),
  },
  {
    path: <FaGreaterThan style={{ fontSize: 12 }} />,
  },
  {
    path: (
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.binance.com/en/support/announcement/c-49?navId=49"
      >
        Latest News
      </a>
    ),
  },
];
