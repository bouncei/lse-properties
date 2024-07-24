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