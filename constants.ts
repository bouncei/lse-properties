import { LayoutDashboard, LogOut, MessageCircleQuestion, Settings, ThumbsUp, FileLineChart, MessageSquareMore, FileSpreadsheet, CreditCard, Briefcase, Archive, House, CircleHelp, HandCoins, Info, Headset } from "lucide-react"

export const dashboardRoutes = [{
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
        }, {
            icon: Briefcase,
            label: "Gigs",
            href: "/gigs",
        }, {
            icon: CreditCard,
            label: "Payment",
            href: "/payment",
        }, {
            icon: FileSpreadsheet,
            label: "Posts",
            href: "/posts",
        }, {
            icon: MessageSquareMore,
            label: "Chats",
            href: "/chats",
        }, {
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
        }, {
            icon: Settings,
            label: "Settings",
            href: "/settings",
        }, {
            icon: MessageCircleQuestion,
            label: "Help & Support",
            href: "/help-and-support",
        }, {
            icon: LogOut,
            label: "Log out",
            href: "/logout",
        }
    ]
}
]


export const landingPageRoutes = [
    {
        icon: House,
        label: "Home",
        href: "/",
    },
    {
        icon: CircleHelp,
        label: "How it works",
        href: "/how-it-works",
    }, {
        icon: HandCoins,
        label: "Services",
        href: "/services",
    }, {
        icon: Info,
        label: "About Us",
        href: "/about-us",
    },
    {
        icon: Headset,
        label: "Contact",
        href: "/contact",
    },
]


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
    "Branding"
]

export const landingPageTalents = [
    { title: "Design", talentsCount: 2345, imageUrl: "/path-to-design-image.jpg", tag: "design" },
    { title: "Web Development", talentsCount: 2345, imageUrl: "/path-to-webdev-image.jpg", tag: "development" },
    { title: "Content Strategy", talentsCount: 2345, imageUrl: "/path-to-content-strategy-image.jpg", tag: "branding" },
    { title: "Web Development", talentsCount: 2345, imageUrl: "/path-to-webdev-image.jpg", tag: "development" },
    { title: "Plumber", talentsCount: 2345, imageUrl: "/path-to-plumber-image.jpg", tag: "branding" },
    { title: "Web Development", talentsCount: 2345, imageUrl: "/path-to-webdev-image.jpg", tag: "development" },
    { title: "Counselor", talentsCount: 2345, imageUrl: "/path-to-counselor-image.jpg", tag: "brand" },
    { title: "Social Media Manager", talentsCount: 2345, imageUrl: "/path-to-social-media-manager-image.jpg", tag: "development" },
];