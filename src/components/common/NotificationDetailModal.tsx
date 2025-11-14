// src/components/common/NotificationDetailModal.tsx
import {
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  Box,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface NotificationDetailModalProps {
  open: boolean;
  onClose: () => void;
  date: string;
  isImportant: boolean;
  content: string;
}

export const NotificationDetailModal = ({
  open,
  onClose,
  date,
  isImportant,
  content,
}: NotificationDetailModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "12px",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)",
          border: "1px solid #E0E0E0",
        },
      }}
    >
      {/* 关闭按钮 */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 16,
          top: 16,
          color: "#666666",
          bgcolor: "#F5F5F5",
          width: 32,
          height: 32,
          "&:hover": { bgcolor: "#EEEEEE" },
        }}
      >
        <CloseIcon sx={{ fontSize: 20 }} />
      </IconButton>

      <DialogContent sx={{ p: 0 }}>
        <Box sx={{ p: 4, pb: 2 }}>
          {/* 标题 + 日期 + 重要标签 */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 18,
                color: "#000000",
              }}
            >
              運営担当者からお知らせ
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: "#666666",
              }}
            >
              {date.replace(/\//g, ".")}
            </Typography>
            {isImportant && (
              <Box
                sx={{
                  bgcolor: "#E1462D",
                  color: "#FFFFFF",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "4px",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                重要
              </Box>
            )}
          </Box>

          {/* 内容白框 */}
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              border: "1px solid #E0E0E0",
              borderRadius: "8px",
              p: 3,
              minHeight: 200,
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                color: "#000000",
                whiteSpace: "pre-wrap",
                lineHeight: 1.7,
              }}
            >
              {content || "内容がありません。"}
            </Typography>
          </Box>
        </Box>
      </DialogContent>

      {/* 底部按钮 */}
      <DialogActions sx={{ justifyContent: "center", p: 2, pt: 0 }}>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#1976d2",
            color: "#1976d2",
            fontWeight: 600,
            px: 4,
            py: 1,
            borderRadius: "8px",
            minWidth: 140,
            "&:hover": {
              borderColor: "#1565c0",
              bgcolor: "rgba(25, 118, 210, 0.04)",
            },
          }}
        >
          お知らせ詳細
        </Button>
      </DialogActions>
    </Dialog>
  );
};
