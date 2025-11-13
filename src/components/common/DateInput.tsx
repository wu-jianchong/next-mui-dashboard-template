// src/components/common/DateInput.tsx
"use client";

import { InputAdornment, Stack, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "dayjs/locale/ja";

interface DateInputProps {
  label: string;
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  placeholder?: string;
  iconColor?: string;
}

export const DateInput = ({
  label,
  value,
  onChange,
  placeholder,
  iconColor = "#000000",
}: DateInputProps) => {
  const CustomDay = (props: any) => {
    const { day, ...other } = props;
    const weekday = day.day();

    return (
      <PickersDay
        {...other}
        day={day}
        sx={{
          width: 32,
          height: 32,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color:
            weekday === 0 ? "#E1462D" : weekday === 6 ? "#285BE1" : "#4A4D5A",
          "&.Mui-selected": {
            bgcolor: "#285BE1",
            color: "#FFFFFF",
            fontWeight: 700,
          },
          "&:hover": { bgcolor: "#F0F4FF" },
        }}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
      <Stack spacing={1} sx={{ width: 180 }}>
        <Typography
          sx={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            lineHeight: "21px",
            color: "#000000",
          }}
        >
          {label}
        </Typography>
        <DatePicker
          value={value}
          onChange={onChange}
          slots={{ day: CustomDay }}
          format="YYYY年MM月DD日"
          slotProps={{
            textField: {
              variant: "outlined",
              size: "small",
              placeholder,
              sx: { width: 180 },
              InputProps: {
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarTodayIcon
                      sx={{ fontSize: 20, color: iconColor }}
                    />
                  </InputAdornment>
                ),
              },
            },
            popper: {
              sx: {
                "& .MuiPickersPopper-root": {
                  width: 264,
                  height: 316,
                  bgcolor: "#FFFFFF",
                  boxShadow: "0px 2px 16px rgba(10, 27, 72, 0.16)",
                  borderRadius: "4px",
                  p: "20px",
                },
                "& .MuiPickersCalendarHeader-root": {
                  justifyContent: "space-between",
                  px: 0,
                  py: 0,
                  height: 20,
                  mb: 2,
                },
                "& .MuiPickersCalendarHeader-label": {
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#4A4D5A",
                },
                "& .MuiPickersArrowSwitcher-root": { gap: 8 },
                "& .MuiIconButton-root": { width: 20, height: 20, p: 0 },
                "& .MuiDayCalendar-weekDayLabel": {
                  width: 32,
                  height: 32,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  lineHeight: "16px",
                  color: (theme, index) =>
                    index === 0
                      ? "#E1462D"
                      : index === 6
                      ? "#285BE1"
                      : "#4A4D5A",
                  mx: 0,
                  p: "8px 2px",
                  textAlign: "center",
                },
                "& .MuiPickersDay-root": {
                  width: 32,
                  height: 32,
                  m: 0,
                  p: "8px 2px",
                },
              },
            },
            // 关键：年在前，月在后
            calendarHeader: {
              format: "YYYY年MM月",
            },
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default DateInput;
