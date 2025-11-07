// src/components/NoticeSection.tsx
"use client";

import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

const notices = [
  { date: "2025/07/17", important: true, title: "運営担当者からのお知らせ" },
  { date: "2025/07/17", important: false, title: "お知らせタイトル3" },
];

export default function NoticeSection() {
  const [open, setOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<
    (typeof notices)[0] | null
  >(null);

  const handleOpen = (notice: (typeof notices)[0]) => {
    setSelectedNotice(notice);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedNotice(null);
  };

  return (
    <>
      {/* 重要なお知らせリスト */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1rem", sm: "1.125rem" },
            mb: 1,
          }}
        >
          重要なお知らせ
        </Typography>

        {notices.map((n, i) => (
          <Box
            key={i}
            onClick={() => handleOpen(n)}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              gap: { xs: 0.5, sm: 1 },
              py: 1,
              borderBottom: "1px solid",
              borderColor: "divider",
              cursor: "pointer",
              transition: "background-color 0.2s",
              "&:hover": {
                bgcolor: "#e3f2fd",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                color: "text.secondary",
                minWidth: { sm: 90 },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              {n.date}
            </Typography>

            <Box
              sx={{
                minWidth: { xs: "auto", sm: 40 },
                width: { xs: "fit-content", sm: "auto" },
                mb: { xs: 0.5, sm: 0 },
              }}
            >
              {n.important ? (
                <Box
                  sx={{
                    bgcolor: "error.main",
                    color: "white",
                    fontWeight: 700,
                    fontSize: 12,
                    px: 1,
                    py: 0.5,
                    borderRadius: 0,
                    display: "inline-block",
                  }}
                >
                  重要
                </Box>
              ) : (
                <Box sx={{ width: { xs: 0, sm: 40 } }} />
              )}
            </Box>

            <Typography
              sx={{
                flex: 1,
                fontSize: 14,
                color: n.important ? "error.main" : "text.primary",
                fontWeight: n.important ? 700 : 400,
                wordBreak: "break-word",
              }}
            >
              {n.title}
            </Typography>

            <Box
              sx={{
                color: "text.secondary",
                ml: { xs: 0, sm: "auto" },
              }}
            >
              <ArrowForwardIcon fontSize="small" />
            </Box>
          </Box>
        ))}
      </Box>

      {/* お知らせ詳細ダイアログ - 关闭按钮压住右上角1/4 */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: 3,
            overflow: "visible", // 允许按钮溢出
          },
        }}
      >
        {/* 关闭按钮：绝对定位，压住右上角1/4 */}
        <IconButton
          onClick={handleClose}
          size="small"
          sx={{
            position: "absolute",
            right: "-12px",
            top: "-12px",
            zIndex: 10,
            bgcolor: "#bbdefb",
            color: "#1565c0",
            width: 36,
            height: 36,
            "&:hover": { bgcolor: "#90caf9" },
            boxShadow: 2,
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        {/* 标题栏区域 */}
        <Box
          sx={{ bgcolor: "#e3f2fd", borderBottom: "1px solid #bbdefb", pt: 3 }}
        >
          {/* 标题居中 */}
          <Box sx={{ px: 2, pb: 1, textAlign: "center" }}>
            <Typography variant="h6" fontWeight={700} color="#1565c0">
              運営担当者からのお知らせ
            </Typography>
          </Box>

          {/* 右侧信息 */}
          <Box
            sx={{
              px: 2,
              pb: 2,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderRadius: 1,
                fontSize: 12,
                minWidth: 120,
                color: "#1565c0",
                borderColor: "#90caf9",
              }}
            >
              {selectedNotice?.date}
            </Button>
            {selectedNotice?.important && (
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: 1,
                  fontSize: 12,
                  minWidth: 60,
                  bgcolor: "error.main", // 改为红色背景
                  color: "white", // 改为白色文字
                  fontWeight: 700, // 加粗，与列表一致
                  "&:hover": { bgcolor: "error.dark" }, // 悬停时变深红
                }}
              >
                重要
              </Button>
            )}{" "}
          </Box>
        </Box>

        {/* コンテンツエリア */}
        <DialogContent sx={{ p: 4, bgcolor: "#f8fdff" }}>
          <Box
            sx={{
              minHeight: 320,
              p: 6,
              border: "2px solid #bbdefb",
              borderRadius: 2,
              bgcolor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              fontWeight={600}
              color="#1565c0"
              textAlign="center"
            >
              お知らせ詳細
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
