import {
    MdAutorenew,
    MdFiberNew,
    MdOutlineCollectionsBookmark,
} from "react-icons/md";

export const applicationCardData = [
    {
        id: 1,
        icon: <MdFiberNew />,
        applicationType: "New Driver's License",
        linkTo: "/applications/new"
    },
    {
        id: 2,
        icon: <MdAutorenew />,
        applicationType: "Renew Driver's License",
        linkTo: "/applications/renewal"
    },
    {
        id: 3,
        icon: <MdOutlineCollectionsBookmark />,
        applicationType: "Driver's License Re-issue",
        linkTo: "/applications/reissue"
    },
];