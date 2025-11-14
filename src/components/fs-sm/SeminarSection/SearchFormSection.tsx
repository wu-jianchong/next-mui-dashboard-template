// src/components/SearchFormSection.tsx
"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DateInput from "@/components/common/DateInput";
import { SelectInput } from "@/components/common/SelectInput";
import { Dayjs } from "dayjs";

const statusOptions = ["指定なし", "申込受付中", "アンケート", "オンデマンド"];
const formatOptions = ["指定なし", "セミナー", "ウェビナー"];

export const SearchFormSection = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [status, setStatus] = useState("指定なし");
  const [format, setFormat] = useState("指定なし");

  const handleStatusChange = (e: SelectChangeEvent) =>
    setStatus(e.target.value);
  const handleFormatChange = (e: SelectChangeEvent) =>
    setFormat(e.target.value);

  return (
    <Box
      sx={{
        backgroundColor: "#E8F4F8",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
      }}
    >
      <Stack direction="row" spacing={3} alignItems="center">
        {/* Date Inputs */}
        <Stack direction="row" spacing={2} alignItems="flex-end">
          <DateInput
            label="開始日"
            value={startDate}
            onChange={setStartDate}
            iconColor="#000000"
          />
          <Typography sx={{ color: "#6B7280", fontSize: 14 }}>～</Typography>
          <DateInput
            label="終了日"
            value={endDate}
            onChange={setEndDate}
            placeholder="yyyy/mm/dd"
            iconColor="#9CA3AF"
          />
        </Stack>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "#D1D5DB" }}
        />

        {/* Status Select */}
        <SelectInput
          label="ステータス"
          value={status}
          onChange={handleStatusChange}
          options={statusOptions}
        />

        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "#D1D5DB" }}
        />

        {/* Format Select */}
        <SelectInput
          label="開催形式"
          value={format}
          onChange={handleFormatChange}
          options={formatOptions}
        />
      </Stack>

      {/* Search Button */}
      <Button
        variant="contained"
        startIcon={
          <SearchIcon sx={{ width: 24, height: 24, color: "#FFFFFF" }} />
        }
        sx={{
          width: 136,
          height: 48,
          padding: "8px 24px 8px 16px",
          gap: "4px",
          background: "#000066",
          borderRadius: "5px",
          fontFamily: "'Noto Sans JP', sans-serif",
          fontWeight: 700,
          fontSize: 16,
          lineHeight: "150%",
          color: "#FFFFFF",
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            background: "#285BE1",
          },
          "& .MuiButton-startIcon": {
            margin: 0,
          },
        }}
      >
        検索する
      </Button>
    </Box>
  );
};

export default SearchFormSection;
