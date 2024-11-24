import {
  LayoutDashboard,
  LogOut,
  MessageCircleQuestion,
  Settings,
  ThumbsUp,
  FileLineChart,
  MessageSquareMore,
  FileSpreadsheet,
  CreditCard,
  Briefcase,
  Archive,
  House,
  CircleHelp,
  HandCoins,
  Info,
  Headset,
} from "lucide-react";
import { Project } from "./lib/types";

export const dashboardRoutes = {
  section1: [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: Archive,
      label: "My Projects",
      href: "/projects",
    },
    {
      icon: Briefcase,
      label: "Gigs",
      href: "/gigs",
    },
    {
      icon: CreditCard,
      label: "Payment",
      href: "/payment",
    },
    {
      icon: FileSpreadsheet,
      label: "Posts",
      href: "/posts",
    },
    {
      icon: MessageSquareMore,
      label: "Chats",
      href: "/chats",
    },
    {
      icon: FileLineChart,
      label: "Reports",
      href: "/reports",
    },
  ],

  section2: [
    {
      icon: ThumbsUp,
      label: "Referrals",
      href: "/referrals",
    },
    {
      icon: Settings,
      label: "Settings",
      href: "/settings",
    },
    {
      icon: MessageCircleQuestion,
      label: "Help & Support",
      href: "/help-and-support",
    },
    {
      icon: LogOut,
      label: "Log out",
      href: "/logout",
    },
  ],
};

export const landingPageRoutes = [
  {
    icon: House,
    label: "Home",
    href: "/",
  },
  {
    icon: Info,
    label: "About Us",
    href: "/about-us",
  },

  {
    icon: CircleHelp,
    label: "Properties",
    href: "/properties",
  },
  {
    icon: HandCoins,
    label: "Schedule Inspection",
    href: "/schedule-inspection",
  },
];

export const landingPageSponsors = [
  {
    imgPath: "/sponsors/google.svg",
  },
  {
    imgPath: "/sponsors/amazon.svg",
  },
  {
    imgPath: "/sponsors/airbnb.svg",
  },
  {
    imgPath: "/sponsors/spotify.svg",
  },
  {
    imgPath: "/sponsors/intrax.svg",
  },
  {
    imgPath: "/sponsors/noxis.svg",
  },
];

export const landingPageServices = [
  {
    imgPath: "/icons/scope.svg",
    title: "Local Focus",
    text: "Centered for the Nigerian market, the platform supports various local services from home repairs to professional tasks.",
  },
  {
    imgPath: "/icons/lock.svg",
    title: "Local Focus",
    text: "Centered for the Nigerian market, the platform supports various local services from home repairs to professional tasks.",
  },
  {
    imgPath: "/icons/verify.svg",
    title: "Local Focus",
    text: "Centered for the Nigerian market, the platform supports various local services from home repairs to professional tasks.",
  },
  {
    imgPath: "/icons/users.svg",
    title: "Local Focus",
    text: "Centered for the Nigerian market, the platform supports various local services from home repairs to professional tasks.",
  },
  {
    imgPath: "/icons/search.svg",
    title: "Local Focus",
    text: "Centered for the Nigerian market, the platform supports various local services from home repairs to professional tasks.",
  },
  {
    imgPath: "/icons/support.svg",

    title: "Local Focus",
    text: "Centered for the Nigerian market, the platform supports various local services from home repairs to professional tasks.",
  },
];

export const landingPageTalentCategories = [
  "All",
  "Development",
  "Design",
  "Branding",
];

export const landingPageTalents = [
  {
    title: "Design",
    talentsCount: 2345,
    imageUrl: "/path-to-design-image.jpg",
    tag: "design",
  },
  {
    title: "Web Development",
    talentsCount: 2345,
    imageUrl: "/path-to-webdev-image.jpg",
    tag: "development",
  },
  {
    title: "Content Strategy",
    talentsCount: 2345,
    imageUrl: "/path-to-content-strategy-image.jpg",
    tag: "branding",
  },
  {
    title: "Web Development",
    talentsCount: 2345,
    imageUrl: "/path-to-webdev-image.jpg",
    tag: "development",
  },
  {
    title: "Plumber",
    talentsCount: 2345,
    imageUrl: "/path-to-plumber-image.jpg",
    tag: "branding",
  },
  {
    title: "Web Development",
    talentsCount: 2345,
    imageUrl: "/path-to-webdev-image.jpg",
    tag: "development",
  },
  {
    title: "Counselor",
    talentsCount: 2345,
    imageUrl: "/path-to-counselor-image.jpg",
    tag: "brand",
  },
  {
    title: "Social Media Manager",
    talentsCount: 2345,
    imageUrl: "/path-to-social-media-manager-image.jpg",
    tag: "development",
  },
];

export const landingPageHowItWorks = [
  {
    iconPath: "/icons/globe.svg",
    title: "Download our App/Website URL",
    text: "Get started by downloading our app or visiting our website. It's quick and easy to access our platform and explore all the services we offer.",
  },
  {
    iconPath: "/icons/user.svg",
    title: "Setup your Account",
    text: "Sign up and create your profile. Personalize your account to enhance your experience and make it easier to find or offer services.",
  },
  {
    iconPath: "/icons/reload.svg",
    title: "Start enjoying our Features",
    text: "Browse through various services, connect with professionals or clients, and manage your transactions securely..",
  },
];

export const landingPageClientsGuide = [
  {
    title: "Create an account",
    text: "Sign up and complete your profile.",
  },
  {
    title: "Top Up Wallet",
    text: "Add funds to your wallet for easy payments.",
  },
  {
    title: "Search For Services",
    text: "Find preferred services using our advanced search.",
  },
  {
    title: "Connect & Negotiate",
    text: "Contact, discuss your needs, and agree on terms.",
  },
  {
    title: "Recieve Service",
    text: "Confirm the service completion on the platform.",
  },
  {
    title: "Rate Provider",
    text: "Leave a rating and review for the service provider.",
  },
];

export const landingPageSeriveProvidersGuide = [
  {
    title: "Apply to be a service Provider",
    text: "Sign up and submit required verification documents.",
  },
  {
    title: "Get Verified",
    text: "Complete all the necessary verification process requirements.",
  },
  {
    title: "Create Gigs",
    text: "Showcase your services with detailed gig listings.",
  },
  {
    title: "Recieve Requests",
    text: "Clients reaches out, negotiate terms, provide services.",
  },
  {
    title: "Get Paid",
    text: "Receive payment once the client certify service completion.",
  },
  {
    title: "Build Your Reputation",
    text: "Earn positive ratings and reviews to attract more clients.",
  },
];

export const landingPageUserReviews = [
  {
    name: "AB",
    image:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "CD",
    image:
      "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "EF",
    image:
      "https://images.unsplash.com/photo-1596596866830-f01857e2ac4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHBlcnNvbiUyMHBvcnRyYWl0JTIwZnJlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export const passwordConstraints = [
  { title: "At least ONE UPPERCASE", value: false },
  { title: "At least ONE Symbol", value: false },
  { title: "At least ONE Number", value: false },
  { title: "Minimum 6 Characters", value: false },
];

export const dummyProjects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    description: "This is a sample project",
    status: "ongoing",
    progress: 30,
    user_id: 1,
    created_at: "2022-01-01 00:00:00",
    updated_at: "2022-01-05 00:00:00",
  },
  {
    id: 2,
    name: "Project 2",
    description: "This is another sample project",
    status: "review",
    progress: 60,
    user_id: 2,
    created_at: "2022-01-05 00:00:00",
    updated_at: "2022-01-10 00:00:00",
  },
  {
    id: 3,
    name: "Project 3",
    description: "This is a third sample project",
    status: "completed",
    progress: 100,
    user_id: 3,
    created_at: "2022-01-10 00:00:00",
    updated_at: "2022-01-15 00:00:00",
  },
  {
    id: 4,
    name: "Project 4",
    description: "This is a fourth sample project",
    status: "negotiation",
    progress: 20,
    user_id: 4,
    created_at: "2022-01-15 00:00:00",
    updated_at: "2022-01-20 00:00:00",
  },
  {
    id: 5,
    name: "Project 5",
    description: "This is a fifth sample project",
    status: "ongoing",
    progress: 40,
    user_id: 5,
    created_at: "2022-01-20 00:00:00",
    updated_at: "2022-01-25 00:00:00",
  },
];
