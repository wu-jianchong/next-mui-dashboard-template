// src/components/NotificationSection.tsx
"use client";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, List, ListItem, Typography, Stack } from "@mui/material";
import { NewsHeader } from "@/components/common/NewsHeader";

const notificationData = [
  {
    date: "2025/07/17",
    badge: "重要",
    title: "ここにタイトルが入ります。ここにタイトルが入ります。",
  },
  {
    date: "2025/07/17",
    badge: "",
    title: "お知らせタイトル３",
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
        {/* 左侧标题 */}
        <Typography
          variant="h6"
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

        {/* 右侧列表 */}
        <List sx={{ width: "100%", padding: 0 }}>
          {notificationData.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom: "1px solid #E0E0E0",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              {/* 左侧：日期 + 标签 + 标题 */}
              <NewsHeader
                date={item.date}
                isImportant={!!item.badge}
                title={item.title}
              />

              {/* 右侧箭头 */}
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
