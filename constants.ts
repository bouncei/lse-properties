import { LayoutDashboard, LogOut, MessageCircleQuestion, Settings, ThumbsUp, FileLineChart, MessageSquareMore, FileSpreadsheet, CreditCard, Briefcase, Archive } from "lucide-react"

export const routes = [{
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