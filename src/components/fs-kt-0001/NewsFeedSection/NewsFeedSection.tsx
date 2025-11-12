import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import React from "react";

const newsData = [
  {
    id: 1,
    date: "2025/07/24",
    mainCategory: { label: "提案資料", color: "#E8F5E9", textColor: "#2E7D32" },
    subCategory: {
      label: "証券代行部/大阪証券代行部",
      color: "#F5F5F5",
      textColor: "#000000",
    },
    title: "提案資料①",
    isNew: true,
    isBookmarked: false,
    background: "#FFFFFF",
  },
  {
    id: 2,
    date: "2025/07/24",
    mainCategory: {
      label: "各種お知らせ",
      color: "#FFF9C4",
      textColor: "#F57F17",
    },
    subCategory: {
      label: "マニュアル・連絡先一覧等",
      color: "#F5F5F5",
      textColor: "#000000",
    },
    title: "○○についての連絡",
    isNew: true,
    isBookmarked: false,
    background: "#FFFFFF",
  },
  {
    id: 3,
    date: "2025/07/24",
    mainCategory: { label: "レポート", color: "#E1F5FE", textColor: "#0277BD" },
    subCategory: {
      label: "ニュース(シリーズ)",
      color: "#F5F5F5",
      textColor: "#000000",
    },
    title: "証券代行フラッシュ",
    isNew: false,
    isBookmarked: true,
    background: "#F5F7FA",
  },
  {
    id: 4,
    date: "2025/07/24",
    mainCategory: { label: "レポート", color: "#E1F5FE", textColor: "#0277BD" },
    subCategory: {
      label: "ニュース(シリーズ)",
      color: "#F5F5F5",
      textColor: "#000000",
    },
    title: "有価証券報告書の早期開示について",
    isNew: false,
    isBookmarked: false,
    background: "#F5F7FA",
  },
  {
    id: 5,
    date: "2025/07/24",
    mainCategory: {
      label: "メインカテゴリ",
      color: "#F3E5F5",
      textColor: "#7B1FA2",
    },
    subCategory: {
      label: "サブカテゴリ",
      color: "#F5F5F5",
      textColor: "#000000",
    },
    title:
      "ここにタイトルが入ります。ここにタイトルが入ります。ここにタイトルが入ります。",
    isNew: false,
    isBookmarked: true,
    background: "#F5F7FA",
  },
];

export const NewsFeedSection = (): JSX.Element => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: "24px 40px",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack spacing={2}>
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 700,
              color: "#000000",
              fontSize: "20px",
              lineHeight: "30px",
            }}
          >
            新着情報
          </Typography>
          <Stack direction="row" spacing={0.5} sx={{ marginTop: "8px" }}>
            <Box
              sx={{
                width: "24px",
                height: "4px",
                backgroundColor: "#1976D2",
              }}
            />
            <Box
              sx={{
                width: "14px",
                height: "4px",
                backgroundColor: "#FF9800",
              }}
            />
          </Stack>
        </Box>

        <Stack spacing={3}>
          <Stack spacing={0}>
            {newsData.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "32px",
                  padding: "24px 16px",
                  backgroundColor: item.background,
                  borderBottom: "1px solid #E0E0E0",
                  position: "relative",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor:
                      item.background === "#FFFFFF" ? "#FAFAFA" : "#EEF2F6",
                  },
                }}
              >
                {item.isBookmarked ? (
                  <BookmarkIcon sx={{ color: "#1976D2", fontSize: "24px" }} />
                ) : (
                  <BookmarkBorderIcon
                    sx={{ color: "#9E9E9E", fontSize: "24px" }}
                  />
                )}

                <Stack spacing={2} sx={{ flex: 1 }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography
                      sx={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: 400,
                        color: "#757575",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      {item.date}
                    </Typography>

                    <Stack direction="row" spacing={0} alignItems="center">
                      <Box
                        sx={{
                          width: "10px",
                          height: "22px",
                          backgroundColor: item.mainCategory.color,
                          borderTopLeftRadius: "4px",
                          borderBottomLeftRadius: "4px",
                        }}
                      />
                      <Chip
                        label={item.mainCategory.label}
                        sx={{
                          backgroundColor: item.mainCategory.color,
                          color: item.mainCategory.textColor,
                          fontFamily: "'Noto Sans JP', sans-serif",
                          fontWeight: 700,
                          fontSize: "12px",
                          height: "22px",
                          borderRadius: "0px",
                          "& .MuiChip-label": {
                            padding: "2px 8px",
                          },
                        }}
                      />
                      <Box
                        sx={{
                          width: "10px",
                          height: "22px",
                          backgroundColor: item.mainCategory.color,
                          borderTopRightRadius: "4px",
                          borderBottomRightRadius: "4px",
                        }}
                      />

                      <Box
                        sx={{
                          width: "10px",
                          height: "22px",
                          backgroundColor: item.subCategory.color,
                          borderTopLeftRadius: "4px",
                          borderBottomLeftRadius: "4px",
                          marginLeft: "-4px",
                        }}
                      />
                      <Chip
                        label={item.subCategory.label}
                        sx={{
                          backgroundColor: item.subCategory.color,
                          color: item.subCategory.textColor,
                          fontFamily: "'Noto Sans JP', sans-serif",
                          fontWeight: 700,
                          fontSize: "12px",
                          height: "22px",
                          borderRadius: "0px",
                          "& .MuiChip-label": {
                            padding: "2px 8px",
                          },
                        }}
                      />
                      <Box
                        sx={{
                          width: "10px",
                          height: "22px",
                          backgroundColor: item.subCategory.color,
                          borderTopRightRadius: "4px",
                          borderBottomRightRadius: "4px",
                        }}
                      />
                    </Stack>
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography
                      sx={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: item.isNew ? 700 : 400,
                        color: "#000000",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      {item.title}
                    </Typography>
                    {item.isNew && (
                      <Typography
                        sx={{
                          fontFamily: "'Noto Sans JP', sans-serif",
                          fontWeight: 700,
                          color: "#1976D2",
                          fontSize: "12px",
                          lineHeight: "18px",
                        }}
                      >
                        NEW
                      </Typography>
                    )}
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Stack>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              endIcon={<ChevronRightIcon />}
              sx={{
                width: "240px",
                padding: "16px 40px",
                border: "1px solid #1976D2",
                color: "#1976D2",
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "19.5px",
                textTransform: "none",
                "&:hover": {
                  border: "1px solid #1565C0",
                  backgroundColor: "rgba(25, 118, 210, 0.04)",
                },
              }}
            >
              一覧はこちら
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NewsFeedSection;
