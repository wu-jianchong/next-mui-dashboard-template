import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Chip, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";

const notificationData = [
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
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#000000",
            whiteSpace: "nowrap",
          }}
        >
          重要なお知らせ
        </Typography>

        <List sx={{ width: "100%", padding: 0 }}>
          {notificationData.map((notification, index) => (
            <ListItem
              key={index}
              onClick={() => {}}
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
              <Stack direction="row" spacing={3} alignItems="center">
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#757575",
                    whiteSpace: "nowrap",
                  }}
                >
                  {notification.date}
                </Typography>

                <Box
                  sx={{
                    visibility: notification.badge ? "visible" : "hidden",
                  }}
                >
                  <Chip
                    label={notification.badge || "重要"}
                    sx={{
                      backgroundColor: "#D32F2F",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      fontSize: "12px",
                      height: "auto",
                      padding: "2px 16px",
                      "& .MuiChip-label": {
                        padding: 0,
                      },
                    }}
                  />
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: notification.isImportant ? "#D32F2F" : "#000000",
                    whiteSpace: "nowrap",
                  }}
                >
                  {notification.title}
                </Typography>
              </Stack>

              <ChevronRightIcon
                sx={{
                  color: "#757575",
                  fontSize: "26px",
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
