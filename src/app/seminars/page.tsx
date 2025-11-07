// src/app/seminars/page.tsx
"use client";

import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Pagination,
  Stack,
  IconButton,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Seminar {
  id: number;
  date: string;
  type: string;
  format: string;
  title: string;
  status?: string;
}

const mockData: Seminar[] = [
  {
    id: 1,
    date: "2025/8/10",
    type: "ウェビナー",
    format: "オンデマンド",
    title: "IPOと上場準備セミナー",
    status: "受付中",
  },
  {
    id: 2,
    date: "2025/6/15",
    type: "ウェビナー",
    format: "オンデマンド",
    title: "2027年度の開示セミナー",
  },
  {
    id: 3,
    date: "2024/4/30",
    type: "セミナー",
    format: "アンケート",
    title: "2028年度の開示セミナー",
  },
  {
    id: 4,
    date: "2023/8/1",
    type: "ウェビナー",
    format: "公開終了",
    title: "2024年度の開示セミナー",
  },
  {
    id: 5,
    date: "2024/12/17",
    type: "ウェビナー",
    format: "オンデマンド",
    title: "2025年度の開示セミナー",
  },
  {
    id: 6,
    date: "2024/12/8",
    type: "ウェビナー",
    format: "アンケート",
    title: "IPOと上場準備セミナー",
  },
  {
    id: 7,
    date: "2024/11/28",
    type: "ウェビナー",
    format: "アンケート",
    title: "2027年度の開示セミナー",
  },
  {
    id: 8,
    date: "2024/11/10",
    type: "セミナー",
    format: "アンケート",
    title: "2028年度の開示セミナー",
  },
  {
    id: 9,
    date: "2024/10/16",
    type: "ウェビナー",
    format: "公開終了",
    title: "2024年度の開示セミナー",
  },
];

const ITEMS_PER_PAGE = 5;

export default function SeminarsPage() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(mockData.length / ITEMS_PER_PAGE);
  const paginatedData = mockData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handleRowClick = (id: number) => {
    router.push(`/seminars/${id}`);
  };

  return (
    <Box sx={{ p: 3, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <Box sx={{ maxWidth: 1000, mx: "auto" }}>
        <Typography variant="h6" fontWeight={700} mb={3} textAlign="center">
          セミナー
        </Typography>

        {/* 検索条件 */}
        <Paper sx={{ p: 2, mb: 3, borderRadius: 2 }}>
          <Stack spacing={2}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography fontSize={14} minWidth={70}>
                  開催日（自）
                </Typography>
                <TextField
                  size="small"
                  placeholder="2026/6/28"
                  InputProps={{
                    startAdornment: <CalendarTodayIcon fontSize="small" />,
                  }}
                  sx={{ width: 130 }}
                />
              </Box>

              <Typography fontSize={14}>～（至）</Typography>

              <TextField
                size="small"
                placeholder="2026/6/28"
                InputProps={{
                  startAdornment: <CalendarTodayIcon fontSize="small" />,
                }}
                sx={{ width: 130 }}
              />
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              flexWrap="wrap"
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography fontSize={14} minWidth={70}>
                  開催形式
                </Typography>
                <FormControl size="small" sx={{ width: 120 }}>
                  <Select defaultValue="セミナー">
                    <MenuItem value="ウェビナー">ウェビナー</MenuItem>
                    <MenuItem value="セミナー">セミナー</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography fontSize={14} minWidth={70}>
                  ステータス
                </Typography>
                <FormControl size="small" sx={{ width: 120 }}>
                  <Select defaultValue="受付中">
                    <MenuItem value="受付中">受付中</MenuItem>
                    <MenuItem value="公開終了">公開終了</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
              <Button
                variant="contained"
                startIcon={<SearchIcon />}
                sx={{ borderRadius: 2 }}
              >
                検索
              </Button>
            </Box>
          </Stack>
        </Paper>

        {/* テーブル */}
        <TableContainer component={Paper} sx={{ borderRadius: 2, mb: 3 }}>
          <Table size="small">
            <TableHead sx={{ bgcolor: "#e3f2fd" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, fontSize: 13 }}>
                  開催日
                </TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: 13 }}>
                  開催形式
                </TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: 13 }}>
                  ステータス
                </TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: 13 }}>
                  セミナー名
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((row) => (
                <TableRow
                  key={row.id}
                  hover
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleRowClick(row.id)}
                >
                  <TableCell sx={{ fontSize: 13 }}>{row.date}</TableCell>
                  <TableCell sx={{ fontSize: 13 }}>{row.type}</TableCell>
                  <TableCell>
                    {row.status && (
                      <Chip
                        label={row.status}
                        size="small"
                        sx={{
                          bgcolor:
                            row.status === "受付中" ? "#e8f5e9" : "#ffebee",
                          color:
                            row.status === "受付中" ? "#2e7d32" : "#c2185b",
                          fontWeight: 600,
                          fontSize: 11,
                        }}
                      />
                    )}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: 13,
                      color: "#1565c0",
                      textDecoration: "underline",
                    }}
                  >
                    {row.title}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* 分頁 */}
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
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
          />
          <IconButton size="small" disabled={page === totalPages}>
            <ArrowDropDownIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
