// src/components/NotificationSection.tsx
"use client";

import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NewsHeader } from "@/components/common/NewsHeader";
import { NotificationDetailModal } from "@/components/common/NotificationDetailModal";
import { useState } from "react";

interface Notification {
  date: string;
  badge: string;
  title: string;
  isImportant: boolean;
  detailContent: string;
}

const notificationData: Notification[] = [
  {
    date: "2025/07/17",
    badge: "重要",
    title: "ここにタイトルが入ります。ここにタイトルが入ります。",
    isImportant: true,
    detailContent:
      "ここに詳細な内容が入ります。改行も含めて複数行のテキストが表示されます。\n\n運営担当者からの重要なお知らせです。必ずご確認ください。",
  },
  {
    date: "2025/07/17",
    badge: "",
    title: "お知らせタイトル３",
    isImportant: false,
    detailContent: "これは通常のお知らせの詳細内容です。",
  },
];

export const NotificationSection = (): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Notification | null>(null);

  const handleOpenModal = (item: Notification) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      {/* 主内容区 */}
      <Box
        sx={{
          backgroundColor: "#E8F4FA",
          padding: "24px 40px",
          position: "relative",
        }}
      >
        <Stack direction="row" spacing={5} alignItems="flex-start">
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

          <List sx={{ width: "100%", padding: 0 }}>
            {notificationData.map((item, index) => (
              <ListItem
                key={index}
                onClick={() => handleOpenModal(item)}
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
                <NewsHeader
                  date={item.date}
                  isImportant={item.isImportant}
                  title={item.title}
                  titleColor={item.isImportant ? "#E1462D" : "#4A4D5A"}
                />
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

      {/* 弹窗组件 */}
      {selectedItem && (
        <NotificationDetailModal
          open={modalOpen}
          onClose={handleCloseModal}
          date={selectedItem.date}
          isImportant={selectedItem.isImportant}
          content={selectedItem.detailContent}
        />
      )}
    </>
  );
};

export default NotificationSection;
