import { ACCOUNT_TYPE } from "../utils/constants";

export const sidebarLinks = [
    {
      id: 1,
      name: "My Appointment",
      path: "/dashboard/my-appointments",
    },
    {
      id: 2,
      name: "Book Appointment",
      path: "/dashboard/book-appointment",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
        id: 3,
        name: " Set Calendly Key",
        path: "/dashboard/set-calendly-key",
        type: ACCOUNT_TYPE.COMPANY,
      }
  ];