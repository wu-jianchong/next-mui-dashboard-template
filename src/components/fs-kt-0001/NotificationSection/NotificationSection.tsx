// src/components/NotificationSection.tsx
"use client";

import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NewsHeader } from "@/components/common/NewsHeader";

interface Notification {
  date: string;
  badge: string;
  title: string;
  isImportant: boolean;
}

const notificationData: Notification[] = [
  {
    date: "2025/07/17",
    badge: "重要",
    title: "ここにタイトルが入ります。ここにタイトルが入ります。",
    isImportant: true,
  },
  {
    date: "2025/07/17",
    badge: "",
    title: "お知らせタイトル３",
    isImportant: false,
  },
];

export const NotificationSection = (): JSX.Element => {
  return (
    <Box
      sx={{
        backgroundColor: "#E8F4FA",
        padding: "24px 40px",
        position: "relative",
      }}
    >
      <Stack direction="row" spacing={5} alignItems="flex-start">
        {/* Title */}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 16,
            lineHeight: "24px",
            color: "#000000",
            whiteSpace: "nowrap",
          }}
        >
          重要なお知らせ
        </Typography>

        {/* List */}
        <List sx={{ width: "100%", padding: 0 }}>
          {notificationData.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
                borderBottom: "1px solid #E0E0E0",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              {/* Header */}
              <NewsHeader
                date={item.date}
                isImportant={item.isImportant}
                title={item.title}
                titleColor={item.isImportant ? "#E1462D" : "#4A4D5A"}
              />

              {/* Arrow */}
              <ChevronRightIcon
                sx={{
                  color: "#757575",
                  fontSize: 26,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
};

export default NotificationSection;
