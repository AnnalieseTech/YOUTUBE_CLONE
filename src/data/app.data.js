import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { BiLibrary } from "react-icons/bi";
import { MdHistory } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { BsStopwatch } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";
import { SiLivechat } from "react-icons/si";
import { GiLargeDress } from "react-icons/gi";
import { AiFillYoutube } from "react-icons/ai";
import { SiYoutubestudio } from "react-icons/si";
import { TbBrandYoutube } from "react-icons/tb";
import { CgYoutube } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { FaHistory } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { MdFeedback } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { MdCardMembership } from "react-icons/md";
import { SiReasonstudios } from "react-icons/si";
import { AiOutlineDatabase } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";

export const notificationData = [
  {
    id: 1,
    text: "Vercel is live!",
    time: "7 hours ago",
    url: "/",
    avatar: "/static/img/upload.jpeg",
    alt: "item 1",
  },
];

export const sideListItems = [
  { id: 1, text: "Home", icon: <AiFillHome size={24} /> },
  { id: 2, text: "Explore", icon: <MdOutlineExplore size={24} /> },
  { id: 3, text: "Subscriptions", icon: <MdSubscriptions size={24} /> },
  { id: 4, divider: true },
  { id: 5, text: "Library", icon: <BiLibrary size={24} /> },
  { id: 6, text: "History", icon: <MdHistory size={24} /> },
  { id: 7, text: "Your Videos", icon: <BiVideo size={24} /> },
  { id: 8, text: "Watch Later", icon: <BsStopwatch size={24} /> },
  { id: 9, subdivision: true, text: "Explore" },
  { id: 10, text: "Movies & Shows", icon: <MdLocalMovies size={24} /> },
  { id: 11, text: "Gaming", icon: <SiFacebookgaming size={24} /> },
  { id: 12, text: "Live", icon: <SiLivechat size={24} /> },
  { id: 13, text: "Fashion & Beauty", icon: <GiLargeDress size={24} /> },
  { id: 14, subdivision: true, text: "More from Youtube" },
  {
    id: 16,
    text: "Youtube Premium",
    icon: <AiFillYoutube size={24} color="red" />,
  },
  {
    id: 17,
    text: "Creator Studio",
    icon: <SiYoutubestudio size={24} color="red" />,
  },
  {
    id: 18,
    text: "Youtube Music",
    icon: <TbBrandYoutube size={24} color="red" />,
  },
  { id: 19, text: "Youtube TV", icon: <CgYoutube size={24} color="red" /> },
  { id: 20, divider: true },
  { id: 21, text: "Settings", icon: <FiSettings size={24} /> },
  { id: 22, text: "Report History", icon: <FaHistory size={24} /> },
  { id: 23, text: "Help", icon: <FiHelpCircle size={24} /> },
  { id: 24, text: "Send Feedback", icon: <MdFeedback size={24} /> },
];

export const tabItems = [
  { id: 1, text: "All" },
  { id: 2, text: "JS Mastery" },
  { id: 3, text: "Coding" },
  { id: 4, text: "ReactJS" },
  { id: 5, text: "NextJS" },
  { id: 6, text: "Live" },
  { id: 7, text: "Music" },
  { id: 8, text: "Web Development" },
  { id: 9, text: "Gaming" },
];

export const userProfileItems = [
  { id: 1, text: "Your Channel", icon: <GrChannel size={24} /> },
  { id: 2, text: "Youtube Studio", icon: <SiReasonstudios size={24} /> },
  { id: 3, text: "Switch Account", icon: <GrChannel size={24} /> },
  { id: 4, text: "Sign out", icon: <SiReasonstudios size={24} /> },
  { id: 5, divider: true },
  {
    id: 6,
    text: "Purchase & Membership",
    icon: <MdCardMembership size={24} />,
  },
  {
    id: 7,
    text: "Your data in Youtube",
    icon: <AiOutlineDatabase size={24} />,
  },
];

export const uploadMenuItems = [
  { id: 1, icon: <FiPlay />, text: "Upload Video" },
  { id: 2, text: "Go Live" },
];

export const trimText = (text) => {
  return text.substring(0, 75);
};
