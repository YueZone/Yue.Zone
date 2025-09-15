import { atom } from "nanostores";
import type { NavItem } from "./_types/NavItem";

export const navIndex = atom(0);

// 仅限服务端修改！
export const navItems = atom<NavItem[]>([
    {title: "INDEX", subtitle: "首页", href: "/#index"},
    {title: "INFORMATION", subtitle: "情报", href: "/#information"},
    {title: "MORE", subtitle: "更多内容", href: "/#more"},
])

export const showFooter = atom(false);

export const showMenu = atom(false);
