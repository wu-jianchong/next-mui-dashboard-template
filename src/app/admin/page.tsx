// src/app/admin/page.tsx
"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Pagination,
  Stack,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

export default function JimmuTetsuzukiPage() {
  const getStatusColor = (status: string) => {
    if (status === "完了") return "success";
    if (status === "申請中") return "warning";
    return "default";
  };

  const tableData = [
    {
      category: "個別事務",
      managementNo: "25-A-0003",
      businessType: "新株予約権",
      item: "権利行使(新株)",
      event: "予約権行使_202510",
      status: "申請中",
      deadline: "2025/10/31",
      registrationDate: "2025/8/29 12:13",
    },
    {
      category: "一般事務",
      managementNo: "25-A-0002",
      businessType: "新株予約権",
      item: "権利行使(新株)",
      event: "予約権行使_202509",
      status: "申請中",
      deadline: "2025/09/30",
      registrationDate: "",
    },
    {
      category: "一般事務",
      managementNo: "25-A-0001",
      businessType: "新株予約権",
      item: "権利行使(新株)",
      event: "予約権行使_202508",
      status: "申請中",
      deadline: "2025/08/31",
      registrationDate: "",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h6" fontWeight={700} mb={3} textAlign="center">
        事務手続き
      </Typography>{" "}
      {/* 検索エリア - 宽度加宽 + 右对齐 */}
      <Box sx={{ mb: 6 }}>
        {/* === 第1行：事務種別 === */}
        <Grid container spacing={2} alignItems="center" sx={{ mb: 1 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography fontSize={14} minWidth={70}>
                事務種別
              </Typography>
              <FormControl size="small" sx={{ width: 180 }}>
                <Select defaultValue="">
                  <MenuItem value="">すべて</MenuItem>
                  <MenuItem value="個別事務">個別事務</MenuItem>
                  <MenuItem value="一般事務">一般事務</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>

        {/* === 第2行：管理番号 + イベント名 === */}
        <Grid container spacing={2} alignItems="center" sx={{ mb: 1 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography fontSize={14} minWidth={70}>
                管理番号
              </Typography>
              <TextField
                size="small"
                placeholder="25-A-0001"
                sx={{ width: 180 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography fontSize={14} minWidth={70}>
                イベント名
              </Typography>
              <TextField
                size="small"
                placeholder="予約権行使"
                sx={{ width: 180 }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* === 第3行：業務区分 + 項目 === */}
        <Grid container spacing={2} alignItems="center" sx={{ mb: 1 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography fontSize={14} minWidth={70}>
                業務区分
              </Typography>
              <FormControl size="small" sx={{ width: 180 }}>
                <Select defaultValue="">
                  <MenuItem value="">すべて</MenuItem>
                  <MenuItem value="新株予約権">新株予約権</MenuItem>
                  <MenuItem value="株式譲渡">株式譲渡</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography fontSize={14} minWidth={70}>
                項目
              </Typography>
              <FormControl size="small" sx={{ width: 180 }}>
                <Select defaultValue="">
                  <MenuItem value="">すべて</MenuItem>
                  <MenuItem value="権利行使(新株)">権利行使(新株)</MenuItem>
                  <MenuItem value="権利行使(現金)">権利行使(現金)</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>

        {/* === 第4行：ステータス + 検索（右对齐）=== */}
        <Grid container spacing={2} alignItems="center" sx={{ mb: 1 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography fontSize={14} minWidth={70}>
                ステータス
              </Typography>
              <FormControl size="small" sx={{ width: 180 }}>
                <Select defaultValue="">
                  <MenuItem value="">すべて</MenuItem>
                  <MenuItem value="申請中">申請中</MenuItem>
                  <MenuItem value="完了">完了</MenuItem>
                  <MenuItem value="却下">却下</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          {/* 検索ボタン：与第3行最右侧（項目）右对齐 */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                size="small"
                startIcon={<SearchIcon />}
              >
                検索
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* 新規起票 按钮（右上） */}
        <Box sx={{ mt: 2, textAlign: "right" }}>
          <Button variant="contained" size="small">
            新規起票
          </Button>
        </Box>
      </Box>{" "}
      <Divider sx={{ my: 6 }} />
      {/* テーブル */}
      <Box sx={{ mb: 6 }}>
        <TableContainer component={Paper} elevation={2}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>事務種別</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>管理番号</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>業務区分</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>項目名</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>イベント名</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>ステータス</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>期限</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>登録日時</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, i) => (
                <TableRow key={i} hover>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.managementNo}</TableCell>
                  <TableCell>{row.businessType}</TableCell>
                  <TableCell>{row.item}</TableCell>
                  <TableCell>{row.event}</TableCell>
                  <TableCell>
                    <Chip
                      label={row.status}
                      color={getStatusColor(row.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{row.deadline}</TableCell>
                  <TableCell>{row.registrationDate || "-"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* 分页 */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Stack spacing={2}>
            <Pagination
              count={3}
              page={2}
              siblingCount={1}
              boundaryCount={1}
              renderItem={(item) => (
                <Button
                  variant={item.selected ? "contained" : "outlined"}
                  size="small"
                  sx={{ minWidth: 36, borderRadius: 1 }}
                >
                  {item.type === "previous"
                    ? "前へ"
                    : item.type === "next"
                    ? "次へ"
                    : item.page}
                </Button>
              )}
            />
          </Stack>
        </Box>
      </Box>
      <Divider sx={{ my: 6 }} />
    </Container>
  );
}
