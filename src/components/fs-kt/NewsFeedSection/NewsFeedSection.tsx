// src/components/NewsFeedSection.tsx
"use client";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Button, Stack, Typography } from "@mui/material";
import { MainCategoryTag } from "@/components/common/MainCategoryTag";
import { TitleUnderline } from "@/components/common/TitleUnderline";

const newsData = [
  {
    id: 1,
    date: "2025/07/24",
    mainCategory: {
      label: "提案資料",
      bgColor: "#D6EAE0",
      textColor: "#329664",
      width: 64,
    },
    subCategory: {
      label: "証券代行部/大阪証券代行部",
      bgColor: "#F5F5F5",
      textColor: "#000000",
      width: 200,
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
      bgColor: "#FCF2D5",
      textColor: "#BF9306",
      width: 88,
    },
    subCategory: {
      label: "マニュアル・連絡先一覧等",
      bgColor: "#F5F5F5",
      textColor: "#000000",
      width: 200,
    },
    title: "○○についての連絡",
    isNew: true,
    isBookmarked: false,
    background: "#FFFFFF",
  },
  {
    id: 3,
    date: "2025/07/24",
    mainCategory: {
      label: "レポート",
      bgColor: "#DCEAF4",
      textColor: "#5096C8",
      width: 64,
    },
    subCategory: {
      label: "ニュース(シリーズ)",
      bgColor: "#F5F5F5",
      textColor: "#000000",
      width: 200,
    },
    title: "証券代行フラッシュ",
    isNew: false,
    isBookmarked: true,
    background: "#F5F7FA",
  },
  {
    id: 4,
    date: "2025/07/24",
    mainCategory: {
      label: "レポート",
      bgColor: "#DCEAF4",
      textColor: "#5096C8",
      width: 64,
    },
    subCategory: {
      label: "ニュース(シリーズ)",
      bgColor: "#F5F5F5",
      textColor: "#000000",
      width: 200,
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
      bgColor: "#E6DEEE",
      textColor: "#825AAA",
      width: 100,
    },
    subCategory: {
      label: "サブカテゴリ",
      bgColor: "#F5F5F5",
      textColor: "#000000",
      width: 200,
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
        {/* Title */}
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
          <TitleUnderline />{" "}
        </Box>

        {/* News List */}
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
              {/* Bookmark Icon */}
              {item.isBookmarked ? (
                <BookmarkIcon sx={{ color: "#1976D2", fontSize: "24px" }} />
              ) : (
                <BookmarkBorderIcon
                  sx={{ color: "#9E9E9E", fontSize: "24px" }}
                />
              )}

              {/* Content */}
              <Stack spacing={2} sx={{ flex: 1 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  {/* Date */}
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

                  {/* Tags */}
                  <Stack direction="row" spacing={0} alignItems="center">
                    <MainCategoryTag
                      label={item.mainCategory.label}
                      bgColor={item.mainCategory.bgColor}
                      textColor={item.mainCategory.textColor}
                      width={item.mainCategory.width}
                    />
                    <MainCategoryTag
                      label={item.subCategory.label}
                      bgColor={item.subCategory.bgColor}
                      textColor={item.subCategory.textColor}
                      width={item.subCategory.width}
                    />
                  </Stack>
                </Stack>

                {/* Title + NEW */}
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

        {/* View All Button */}
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
    </Box>
  );
};

export default NewsFeedSection;
