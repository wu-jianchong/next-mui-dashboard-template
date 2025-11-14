"use client";

import { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Stack,
  Pagination,
} from "@mui/material";
import Link from "next/link";
import DateInput from "@/components/common/DateInput";
import dayjs, { Dayjs } from "dayjs";

const mockData = [
  {
    id: 1,
    isNew: true,
    category: "決済事務",
    date: "6月1日",
    fileName: "0001_Quantity.pdf",
    downloadDate: "2025/1/16 1:40 PM",
  },
  {
    id: 2,
    isNew: false,
    category: "配当",
    date: "1月15日",
    fileName: "受払通知票（写し）",
    downloadDate: "2025/1/16 1:40 PM",
  },
];

export default function InboxPage() {
  const [dateFrom, setDateFrom] = useState<Dayjs | null>(null);
  const [dateTo, setDateTo] = useState<Dayjs | null>(null);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(2);
  const [data] = useState(mockData);

  const filteredData = data.filter((row) => {
    if (category && row.category !== category) return false;
    return true;
  });

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: "auto" }}>
      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
      >
        資料BOX
      </Typography>

      {/* 检索栏：严格按设计图布局 */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Stack spacing={2}>
          {/* 第一行：掲載日 + 两个 DateInput */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography sx={{ minWidth: 70, fontWeight: "bold" }}>
              掲載日
            </Typography>
            <DateInput
              value={dateFrom}
              onChange={setDateFrom}
              placeholder="指定なし"
            />
            <Typography sx={{ mx: 1 }}>～</Typography>
            <DateInput
              value={dateTo}
              onChange={setDateTo}
              placeholder="指定なし"
            />
          </Stack>

          {/* 第二行：カテゴリ + Select + 搜索按钮（右对齐） */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography sx={{ minWidth: 70, fontWeight: "bold" }}>
              カテゴリ
            </Typography>
            <FormControl sx={{ minWidth: 200 }}>
              <Select
                size="small"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="">全て</MenuItem>
                <MenuItem value="決済事務">決済事務</MenuItem>
                <MenuItem value="配当">配当</MenuItem>
              </Select>
            </FormControl>

            {/* 占位 + 搜索按钮右对齐 */}
            <Box sx={{ flex: 1 }} />
            <Button variant="outlined" sx={{ minWidth: 100 }}>
              検索
            </Button>
          </Stack>
        </Stack>
      </Paper>

      {/* テーブル（保持不变） */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell sx={{ fontWeight: "bold", width: 60 }}>新着</TableCell>
              <TableCell sx={{ fontWeight: "bold", width: 120 }}>
                カテゴリ
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", width: 100 }}>
                掲載日
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>ファイル名</TableCell>
              <TableCell sx={{ fontWeight: "bold", width: 180 }}>
                資料ダウンロード日時
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>
                  {row.isNew && (
                    <Typography color="error" fontWeight="bold">
                      ★
                    </Typography>
                  )}
                </TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Link href={`/inbox/${row.id}`}>
                    <Typography
                      sx={{
                        color: "primary.main",
                        textDecoration: "underline",
                        cursor: "pointer",
                        "&:hover": { opacity: 0.8 },
                      }}
                    >
                      {row.fileName}
                    </Typography>
                  </Link>
                </TableCell>
                <TableCell>{row.downloadDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 分页 */}
      <Stack spacing={2} sx={{ mt: 3, alignItems: "center" }}>
        <Pagination
          count={3}
          page={page}
          onChange={(_, p) => setPage(p)}
          showFirstButton
          showLastButton
        />
      </Stack>
    </Box>
  );
}
