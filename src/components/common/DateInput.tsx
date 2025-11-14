// src/components/common/DateInput.tsx
"use client";

import {
  InputAdornment,
  Stack,
  Typography,
  Box,
  IconButton,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "dayjs/locale/ja";
import { useState } from "react";
import dayjs from "dayjs";

interface DateInputProps {
  label?: string;
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  placeholder?: string;
}

export const DateInput = ({
  label,
  value,
  onChange,
  placeholder,
}: DateInputProps) => {
  const [open, setOpen] = useState(false);

  const CustomDay = (props: any) => {
    const { day, selected, today, ...other } = props;
    const weekday = day.day();

    return (
      <PickersDay
        {...other}
        day={day}
        selected={selected}
        today={today}
        sx={{
          width: 36,
          height: 36,
          fontFamily: "'Inter', sans-serif",
          fontWeight: selected ? 600 : 400,
          fontSize: 14,
          lineHeight: "20px",
          color: selected
            ? "#ffffff !important"
            : weekday === 0
            ? "#d32f2f"
            : weekday === 6
            ? "#1976d2"
            : "#000000",
          borderRadius: "8px",
          bgcolor: selected
            ? "#1976d2 !important"
            : today
            ? "#e3f2fd !important"
            : "transparent",
          "&:hover": {
            bgcolor: selected ? "#1565c0" : today ? "#bbdefb" : "#f5f5f5",
          },
        }}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
      <Stack spacing={1}>
        {label && (
          <Typography
            sx={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color: "#000000",
            }}
          >
            {label}
          </Typography>
        )}

        <DatePicker
          value={value}
          onChange={onChange}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          format="YYYY年MM月DD日"
          slots={{
            day: CustomDay,
            layout: (props) => {
              const {
                children,
                currentMonth = value || dayjs(),
                onMonthChange,
                onClear,
              } = props as any;

              // 关键：生成完整 7 列日历
              const startOfMonth = currentMonth.startOf("month");
              const endOfMonth = currentMonth.endOf("month");
              const startDate = startOfMonth.startOf("week");
              const endDate = endOfMonth.endOf("week");

              const weeks: (Dayjs | null)[][] = [];
              let day = startDate;

              while (day.isBefore(endDate) || day.isSame(endDate, "day")) {
                const week: (Dayjs | null)[] = [];
                for (let i = 0; i < 7; i++) {
                  if (day.isBefore(startOfMonth) || day.isAfter(endOfMonth)) {
                    week.push(null);
                  } else {
                    week.push(day);
                  }
                  day = day.add(1, "day");
                }
                weeks.push(week);
              }

              return (
                <Box
                  sx={{
                    width: 280,
                    bgcolor: "#FFFFFF",
                    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)",
                    borderRadius: "12px",
                    border: "1px solid #E0E0E0",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* 标题 */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                      py: 1,
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() =>
                        onMonthChange?.(currentMonth.subtract(1, "month"))
                      }
                      sx={{ p: 0.5 }}
                    >
                      <ChevronLeftIcon sx={{ fontSize: 20 }} />
                    </IconButton>

                    <Typography
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: 16,
                        color: "#000000",
                        minWidth: 100,
                        textAlign: "center",
                      }}
                    >
                      {currentMonth.format("YYYY年 M月")}
                    </Typography>

                    <IconButton
                      size="small"
                      onClick={() =>
                        onMonthChange?.(currentMonth.add(1, "month"))
                      }
                      sx={{ p: 0.5 }}
                    >
                      <ChevronRightIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                  </Box>

                  {/* 星期行 */}
                  <Box sx={{ display: "flex", px: 2 }}>
                    {["日", "月", "火", "水", "木", "金", "土"].map(
                      (label, i) => (
                        <Box
                          key={label}
                          sx={{
                            flex: 1,
                            textAlign: "center",
                            py: 0.5,
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 600,
                              fontSize: 14,
                              color:
                                i === 0
                                  ? "#d32f2f"
                                  : i === 6
                                  ? "#1976d2"
                                  : "#666666",
                            }}
                          >
                            {label}
                          </Typography>
                        </Box>
                      )
                    )}
                  </Box>

                  {/* 日期网格 */}
                  <Box sx={{ flex: 1, p: 1 }}>
                    {weeks.map((week, weekIndex) => (
                      <Box key={weekIndex} sx={{ display: "flex", mb: 0.5 }}>
                        {week.map((date, dayIndex) => {
                          if (!date) {
                            return <Box key={dayIndex} sx={{ flex: 1 }} />;
                          }

                          const selected = value?.isSame(date, "day");
                          const today = date.isSame(dayjs(), "day");

                          return (
                            <Box
                              key={dayIndex}
                              onClick={() => {
                                onChange(date);
                                setOpen(false);
                              }}
                              sx={{
                                flex: 1,
                                height: 36,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "8px",
                                bgcolor: selected
                                  ? "#1976d2"
                                  : today
                                  ? "#e3f2fd"
                                  : "transparent",
                                cursor: "pointer",
                                "&:hover": {
                                  bgcolor: selected
                                    ? "#1565c0"
                                    : today
                                    ? "#bbdefb"
                                    : "#f5f5f5",
                                },
                              }}
                            >
                              <Typography
                                sx={{
                                  fontFamily: "'Inter', sans-serif",
                                  fontWeight: selected ? 600 : 400,
                                  fontSize: 14,
                                  color: selected
                                    ? "#ffffff"
                                    : date.day() === 0
                                    ? "#d32f2f"
                                    : date.day() === 6
                                    ? "#1976d2"
                                    : "#000000",
                                }}
                              >
                                {date.date()}
                              </Typography>
                            </Box>
                          );
                        })}
                      </Box>
                    ))}
                  </Box>

                  {/* 左下角「指定なし」 */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      p: 2,
                      pt: 1,
                      borderTop: "1px solid #E0E0E0",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          sx={{
                            color: "#666666",
                            "&.Mui-checked": { color: "#1976d2" },
                            p: 0.5,
                          }}
                          onChange={(e) => {
                            if (e.target.checked) {
                              onChange(null);
                              setOpen(false);
                            }
                          }}
                        />
                      }
                      label={
                        <Typography
                          sx={{
                            fontFamily: "'Noto Sans JP', sans-serif",
                            fontSize: 14,
                            color: "#666666",
                          }}
                        >
                          指定なし
                        </Typography>
                      }
                      sx={{ ml: 0.5 }}
                    />
                  </Box>
                </Box>
              );
            },
          }}
          slotProps={{
            layout: {
              currentMonth: value || dayjs(),
              onMonthChange: () => {},
            },
            textField: {
              variant: "outlined",
              size: "small",
              placeholder,
              sx: { width: 180 },
              InputProps: {
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarTodayIcon
                      sx={{
                        fontSize: 20,
                        color: open ? "#90caf9" : "#000000",
                        transition: "color 0.2s ease",
                      }}
                    />
                  </InputAdornment>
                ),
              },
              onClick: () => setOpen(true),
            },
            popper: {
              sx: {
                "& .MuiPickersPopper-root": {
                  p: 0,
                },
              },
            },
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default DateInput;
