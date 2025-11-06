// src/components/layout/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Dashboard,
  Forum,
  School,
  AdminPanelSettings,
  Inbox,
  Key,
  Logout,
} from "@mui/icons-material";

const menuItems = [
  { text: "ダッシュボード", icon: <Dashboard />, href: "/dashboard" },
  { text: "Web広場", icon: <Forum />, href: "/community" },
  { text: "セミナー", icon: <School />, href: "/seminars" },
  { text: "事務手続き", icon: <AdminPanelSettings />, href: "/admin" },
  { text: "受信BOX", icon: <Inbox />, href: "/inbox" },
  { text: "パスワード変更", icon: <Key />, href: "/settings/password" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          borderRight: "1px solid rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      <div style={{ height: 64 }} />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              selected={pathname === item.href}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "primary.main",
                  color: "white",
                  "& .MuiListItemIcon-root": { color: "white" },
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <form action="/api/logout" method="post" style={{ width: "100%" }}>
            <ListItemButton type="submit">
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="ログアウト" />
            </ListItemButton>
          </form>
        </ListItem>
      </List>
    </Drawer>
  );
}
