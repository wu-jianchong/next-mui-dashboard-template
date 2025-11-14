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
  Checkbox,
  IconButton,
  Button,
  Stack,
  Pagination,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Bookmark, BookmarkBorder, Search } from "@mui/icons-material";
import Link from "next/link";
import DateInput from "@/components/common/DateInput";
import dayjs, { Dayjs } from "dayjs";

const mockData = [
  {
    id: 1,
    isNew: true,
    starred: true,
    date: "2025/7/24",
    category: "提案資料",
    subCategory: "証券代行部大阪証券代行部",
    title: "提案資料①",
    bookmarked: false,
  },
  {
    id: 2,
    isNew: false,
    starred: true,
    date: "2025/7/17",
    category: "各種お知らせ",
    subCategory: "マニュアル・連絡先一覧等",
    title: "○○についての連絡",
    bookmarked: false,
  },
  {
    id: 3,
    isNew: false,
    starred: false,
    date: "2025/7/10",
    category: "レポート",
    subCategory: "フラッシュ(シリーズ)",
    title: "証券代行フラッシュ",
    bookmarked: true,
  },
  {
    id: 4,
    isNew: false,
    starred: false,
    date: "2025/7/9",
    category: "レポート",
    subCategory: "ニュース(シリーズ)",
    title: "有価証券報告書の早期開示について",
    bookmarked: true,
  },
];

export default function InformationPage() {
  const [dateFrom, setDateFrom] = useState<Dayjs | null>(null);
  const [dateTo, setDateTo] = useState<Dayjs | null>(null);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [titleKeyword, setTitleKeyword] = useState("");
  const [bookmarkOnly, setBookmarkOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(mockData);

  const handleBookmarkToggle = (id: number) => {
    setData((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, bookmarked: !row.bookmarked } : row
      )
    );
  };

  const filteredData = data.filter((row) => {
    if (bookmarkOnly && !row.bookmarked) return false;
    if (category && row.category !== category) return false;
    if (subCategory && row.subCategory !== subCategory) return false;
    if (titleKeyword && !row.title.includes(titleKeyword)) return false;
    if (dateFrom && dayjs(row.date).isBefore(dateFrom, "day")) return false;
    if (dateTo && dayjs(row.date).isAfter(dateTo, "day")) return false;
    return true;
  });

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: "auto" }}>
      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
      >
        情報提供
      </Typography>

      {/* 检索栏：三行布局 */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Stack spacing={3}>
          {/* 第1行：掲載日 */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            flexWrap="wrap"
          >
            <Typography
              sx={{ minWidth: 80, fontWeight: "bold", whiteSpace: "nowrap" }}
            >
              掲載日
            </Typography>
            <DateInput
              value={dateFrom}
              onChange={setDateFrom}
              placeholder="指定なし"
            />
            <Typography sx={{ mx: 1 }}>～（至）</Typography>
            <DateInput
              value={dateTo}
              onChange={setDateTo}
              placeholder="指定なし"
            />
          </Stack>

          {/* 第2行：カテゴリ + タイトル */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            flexWrap="wrap"
          >
            <Typography
              sx={{ minWidth: 80, fontWeight: "bold", whiteSpace: "nowrap" }}
            >
              カテゴリ
            </Typography>
            <FormControl sx={{ minWidth: 200 }}>
              <Select
                size="small"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  <em>全て</em>
                </MenuItem>
                <MenuItem value="提案資料">提案資料</MenuItem>
                <MenuItem value="各種お知らせ">各種お知らせ</MenuItem>
                <MenuItem value="レポート">レポート</MenuItem>
              </Select>
            </FormControl>

            <Typography
              sx={{
                minWidth: 80,
                ml: { xs: 0, sm: 4 },
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              タイトル
            </Typography>
            <TextField
              size="small"
              value={titleKeyword}
              onChange={(e) => setTitleKeyword(e.target.value)}
              sx={{ minWidth: 240 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          {/* 第3行：サブカテゴリ + Bookmark */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            flexWrap="wrap"
          >
            <Typography
              sx={{ minWidth: 80, fontWeight: "bold", whiteSpace: "nowrap" }}
            >
              サブカテゴリ
            </Typography>
            <FormControl sx={{ minWidth: 280 }}>
              <Select
                size="small"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  <em>全て</em>
                </MenuItem>
                <MenuItem value="証券代行部大阪証券代行部">
                  証券代行部大阪証券代行部
                </MenuItem>
                <MenuItem value="マニュアル・連絡先一覧等">
                  マニュアル・連絡先一覧等
                </MenuItem>
                <MenuItem value="フラッシュ(シリーズ)">
                  フラッシュ(シリーズ)
                </MenuItem>
                <MenuItem value="ニュース(シリーズ)">
                  ニュース(シリーズ)
                </MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ flex: 1 }} />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
            >
              <Checkbox
                checked={bookmarkOnly}
                onChange={(e) => setBookmarkOnly(e.target.checked)}
                icon={<BookmarkBorder />}
                checkedIcon={<Bookmark color="primary" />}
              />
              <Typography>Bookmarkのみ</Typography>
            </Box>
          </Stack>

          {/* 搜索按钮 */}
          <Box sx={{ textAlign: "right" }}>
            <Button variant="contained" size="large">
              検索
            </Button>
          </Box>
        </Stack>
      </Paper>

      {/* テーブル：固定宽度 + 空状态 */}
      <TableContainer
        component={Paper}
        sx={{ minWidth: { xs: "100%", sm: 900 } }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell sx={{ fontWeight: "bold", width: 60 }}>新着</TableCell>
              <TableCell sx={{ fontWeight: "bold", width: 100 }}>
                掲載日
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", width: 120 }}>
                カテゴリ
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", width: 250 }}>
                サブカテゴリ
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>タイトル</TableCell>
              <TableCell
                sx={{ fontWeight: "bold", width: 80, textAlign: "center" }}
              >
                Bookmark
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 8 }}>
                  <Typography variant="body2" color="text.secondary">
                    該当するデータがありません
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredData.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>
                    {row.isNew && (
                      <Typography color="error" fontWeight="bold">
                        ★
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.subCategory}</TableCell>
                  <TableCell>
                    <Link href={`/information/${row.id}`}>
                      <Typography
                        sx={{
                          color: "primary.main",
                          textDecoration: "underline",
                          cursor: "pointer",
                          "&:hover": { opacity: 0.8 },
                        }}
                      >
                        {row.title}
                      </Typography>
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      size="small"
                      onClick={() => handleBookmarkToggle(row.id)}
                    >
                      {row.bookmarked ? (
                        <Bookmark color="primary" />
                      ) : (
                        <BookmarkBorder />
                      )}
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
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
