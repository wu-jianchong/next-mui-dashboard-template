// src/app/seminars/page.tsx
"use client";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
  Pagination,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import { useState } from "react";

// MUI X DatePicker
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

interface Seminar {
  id: number;
  date: string;
  applyStatus: string;
  type: string;
  format?: string;
  title: string;
  isClosingSoon?: boolean;
}

const mockData: Seminar[] = [
  {
    id: 1,
    date: "2025/06/10",
    applyStatus: "申込受付中",
    type: "セミナー",
    format: "締切間近",
    title: "2025年春の議長セミナー",
    isClosingSoon: true,
  },
  {
    id: 2,
    date: "2025/05/15",
    applyStatus: "申込受付中",
    type: "ウェビナー",
    format: "",
    title: "IPOセミナー - 2025年5月開催分",
  },
  {
    id: 3,
    date: "2025/04/30",
    applyStatus: "申込受付中",
    type: "セミナー",
    format: "締切間近",
    title:
      "セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。",
    isClosingSoon: true,
  },
  {
    id: 4,
    date: "2025/03/01",
    applyStatus: "オンデマンド",
    type: "ウェビナー",
    format: "",
    title: "2027年春の議長セミナー",
  },
  {
    id: 5,
    date: "2025/01/10",
    applyStatus: "アンケート",
    type: "セミナー",
    format: "",
    title: "2024年春の議長セミナー",
  },
  {
    id: 6,
    date: "2024/11/10",
    applyStatus: "公開終了",
    type: "セミナー",
    format: "",
    title:
      "セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。",
  },
  {
    id: 7,
    date: "2024/10/16",
    applyStatus: "公開終了",
    type: "ウェビナー",
    format: "",
    title: "2024年春の議長セミナー",
  },
];

const ITEMS_PER_PAGE = 5;

/**
 * 斜角ラベルコンポーネント
 * - 斜角効果（transform: skewX）
 * - 色指定可能
 */
const SlantedTag = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: { bgcolor: string; color: string };
}) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        position: "relative",
        px: 1.2,
        py: 0.3,
        fontSize: 11,
        fontWeight: 600,
        color: color.color,
        bgcolor: color.bgcolor,
        transform: "skewX(-12deg)",
        "& > span": {
          display: "inline-block",
          transform: "skewX(12deg)",
        },
      }}
    >
      <span>{children}</span>
    </Box>
  );
};

export default function SeminarsPage() {
  const [page, setPage] = useState(1);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const totalPages = Math.ceil(mockData.length / ITEMS_PER_PAGE);
  const paginatedData = mockData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
      <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
        <Box sx={{ maxWidth: 1000, mx: "auto", pt: 3, px: 2 }}>
          {/* タイトル：左对齐 + 下划线左对齐 */}
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                textAlign: "left",
              }}
            >
              セミナー一覧
            </Typography>

            <Box
              component="img"
              src="/images/newinfo.png"
              alt="新着情報"
              sx={{
                height: 8,
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* 検索エリア */}
          <Paper sx={{ p: 2, mb: 3, borderRadius: 2 }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={1}
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              {/* 開始日 */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Typography sx={{ fontSize: 14, minWidth: 56 }}>
                  開始日
                </Typography>
                <DatePicker
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  format="YYYY/MM/DD"
                  slotProps={{
                    textField: {
                      size: "small",
                      placeholder: "yyyy/mm/dd",
                      sx: { width: 130 },
                      InputProps: {
                        startAdornment: (
                          <CalendarTodayIcon
                            fontSize="small"
                            sx={{ color: "action.active", mr: 0.5 }}
                          />
                        ),
                      },
                    },
                    day: (dayProps) => {
                      const isSaturday = dayjs(dayProps.day).day() === 6;
                      const isSunday = dayjs(dayProps.day).day() === 0;
                      return {
                        ...dayProps,
                        sx: {
                          ...dayProps.sx,
                          color: isSaturday
                            ? "#90caf9"
                            : isSunday
                            ? "#ffab91"
                            : "inherit",
                          fontWeight: isSaturday || isSunday ? 500 : "normal",
                        },
                      };
                    },
                  }}
                />
              </Box>

              <Typography sx={{ fontSize: 14, mx: 0.5 }}>～</Typography>

              {/* 終了日 */}
              <DatePicker
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                format="YYYY/MM/DD"
                slotProps={{
                  textField: {
                    size: "small",
                    placeholder: "yyyy/mm/dd",
                    sx: { width: 130 },
                    InputProps: {
                      startAdornment: (
                        <CalendarTodayIcon
                          fontSize="small"
                          sx={{ color: "action.active", mr: 0.5 }}
                        />
                      ),
                    },
                  },
                  day: (dayProps) => {
                    const isSaturday = dayjs(dayProps.day).day() === 6;
                    const isSunday = dayjs(dayProps.day).day() === 0;
                    return {
                      ...dayProps,
                      sx: {
                        ...dayProps.sx,
                        color: isSaturday
                          ? "#90caf9"
                          : isSunday
                          ? "#ffab91"
                          : "inherit",
                        fontWeight: isSaturday || isSunday ? 500 : "normal",
                      },
                    };
                  },
                }}
              />

              {/* ステータス */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Typography sx={{ fontSize: 14, minWidth: 56 }}>
                  ステータス
                </Typography>
                <FormControl size="small" sx={{ width: 120 }}>
                  <Select defaultValue="指定なし">
                    <MenuItem value="指定なし">指定なし</MenuItem>
                    <MenuItem value="申込受付中">申込受付中</MenuItem>
                    <MenuItem value="アンケート">アンケート</MenuItem>
                    <MenuItem value="オンデマンド">オンデマンド</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* 開催形式 */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Typography sx={{ fontSize: 14, minWidth: 56 }}>
                  開催形式
                </Typography>
                <FormControl size="small" sx={{ width: 120 }}>
                  <Select defaultValue="指定なし">
                    <MenuItem value="指定なし">指定なし</MenuItem>
                    <MenuItem value="セミナー">セミナー</MenuItem>
                    <MenuItem value="ウェビナー">ウェビナー</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* 検索ボタン */}
              <Button
                variant="contained"
                startIcon={<SearchIcon />}
                sx={{
                  bgcolor: "#1976d2",
                  borderRadius: 2,
                  px: 3,
                  minWidth: 110,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                検索する
              </Button>
            </Stack>
          </Paper>

          {/* 検索結果件数 + チェックボックス */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
              {mockData.length}件
            </Typography>
            <FormControlLabel
              control={<Checkbox size="small" defaultChecked />}
              label={
                <Typography sx={{ fontSize: 13 }}>公開終了を含む</Typography>
              }
            />
          </Box>

          {/* セミナーカード一覧 */}
          <Stack spacing={2} mb={4}>
            {paginatedData.map((seminar) => (
              <Link
                key={seminar.id}
                href={`/seminars/${seminar.id}`}
                passHref
                legacyBehavior
              >
                <Paper
                  component="a"
                  elevation={1}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    textDecoration: "none",
                    display: "block",
                    "&:hover": { bgcolor: "#f9f9f9" },
                  }}
                >
                  {/* 第一行：日期 | 状态 | 类型 | 締切間近 */}
                  <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                    <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                      {seminar.date}
                    </Typography>
                    <Typography sx={{ fontSize: 14, color: "#9e9e9e" }}>
                      |
                    </Typography>

                    {/* 申込受付中（斜角） */}
                    <SlantedTag
                      color={{
                        bgcolor:
                          seminar.applyStatus === "申込受付中"
                            ? "#e8f5e9"
                            : seminar.applyStatus === "オンデマンド"
                            ? "#e3f2fd"
                            : seminar.applyStatus === "アンケート"
                            ? "#fff3e0"
                            : "#ffebee",
                        color:
                          seminar.applyStatus === "申込受付中"
                            ? "#2e7d32"
                            : seminar.applyStatus === "オンデマンド"
                            ? "#1565c0"
                            : seminar.applyStatus === "アンケート"
                            ? "#ef6c00"
                            : "#c2185b",
                      }}
                    >
                      {seminar.applyStatus}
                    </SlantedTag>

                    <Typography sx={{ fontSize: 14, color: "#9e9e9e" }}>
                      |
                    </Typography>

                    {/* セミナー / ウェビナー（斜角） */}
                    <SlantedTag
                      color={{
                        bgcolor: "#e0e0e0",
                        color: "#424242",
                      }}
                    >
                      {seminar.type}
                    </SlantedTag>

                    {/* 締切間近（斜角，红色） */}
                    {seminar.isClosingSoon && (
                      <>
                        <Typography sx={{ fontSize: 14, color: "#9e9e9e" }}>
                          |
                        </Typography>
                        <SlantedTag
                          color={{
                            bgcolor: "#d32f2f",
                            color: "white",
                          }}
                        >
                          締切間近
                        </SlantedTag>
                      </>
                    )}
                  </Stack>

                  {/* 第二行：标题 */}
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#1976d2",
                      textDecoration: "underline",
                      lineHeight: 1.4,
                    }}
                  >
                    {seminar.title}
                  </Typography>
                </Paper>
              </Link>
            ))}
          </Stack>

          {/* ページネーション */}
          <Stack
            direction="row"
            justifyContent="center"
            spacing={1}
            alignItems="center"
          >
            <IconButton size="small" disabled={page === 1}>
              <ArrowDropUpIcon />
            </IconButton>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, p) => setPage(p)}
              color="primary"
              size="small"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontSize: 13,
                },
              }}
            />
            <IconButton size="small" disabled={page === totalPages}>
              <ArrowDropDownIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
