// src/app/notifications/page.tsx
"use client";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function ImportantNotificationPage() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: 3,
        },
      }}
    >
      {/* タイトルバー */}
      <DialogTitle
        sx={{ bgcolor: "#e3f2fd", p: 2, borderBottom: "1px solid #bbdefb" }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderRadius: 1,
                fontSize: 12,
                minWidth: 40,
                color: "#1565c0",
                borderColor: "#90caf9",
                "&:hover": { bgcolor: "#bbdefb" },
              }}
            >
              1-2
            </Button>
            <Typography variant="h6" fontWeight={700} color="#1565c0">
              運営担当者からお知らせ
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              variant="outlined"
              size="small"
              startIcon={
                <Box component="span" sx={{ fontSize: 12 }}>
                  Calendar
                </Box>
              }
              sx={{
                borderRadius: 1,
                fontSize: 12,
                minWidth: 120,
                color: "#1565c0",
                borderColor: "#90caf9",
              }}
            >
              2025.5.20
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                borderRadius: 1,
                fontSize: 12,
                minWidth: 60,
                bgcolor: "#90caf9",
                color: "#1565c0",
                "&:hover": { bgcolor: "#64b5f6" },
              }}
            >
              重要
            </Button>
            <IconButton
              onClick={handleClose}
              size="small"
              sx={{
                bgcolor: "#bbdefb",
                color: "#1565c0",
                "&:hover": { bgcolor: "#90caf9" },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </DialogTitle>

      {/* コンテンツエリア */}
      <DialogContent sx={{ p: 4, bgcolor: "#f8fdff" }}>
        <Paper
          elevation={0}
          sx={{
            minHeight: 400,
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
          <Button
            variant="outlined"
            size="small"
            sx={{
              mb: 3,
              borderRadius: 1,
              fontSize: 13,
              minWidth: 100,
              color: "#1565c0",
              borderColor: "#90caf9",
              "&:hover": { bgcolor: "#bbdefb" },
            }}
          >
            1-5
          </Button>
          <Typography
            variant="h5"
            fontWeight={600}
            color="#1565c0"
            textAlign="center"
          >
            お知らせ詳細
          </Typography>
        </Paper>
      </DialogContent>
    </Dialog>
  );
}
