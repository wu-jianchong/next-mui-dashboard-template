// src/components/SelectInput.tsx
import {
  MenuItem,
  Select,
  Stack,
  Typography,
  SelectChangeEvent,
} from "@mui/material";

interface SelectInputProps {
  label: string;
  value: string;
  onChange: (e: SelectChangeEvent) => void;
  options: string[];
  selectedBgColor?: string;
  selectedTextColor?: string;
}

export const SelectInput = ({
  label,
  value,
  onChange,
  options,
  selectedBgColor = "#285BE1",
  selectedTextColor = "#FFFFFF",
}: SelectInputProps) => {
  return (
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
      <Select
        value={value}
        onChange={onChange}
        size="small"
        sx={{
          width: 180,
          height: 36,
          bgcolor: "#FFFFFF",
          fontFamily: "'Noto Sans JP', sans-serif",
          fontSize: 14,
          lineHeight: "20px",
          boxShadow: "0px 2px 16px rgba(10, 27, 72, 0.16)",
          "& .MuiOutlinedInput-notchedOutline": { border: "1px solid #D1D5DB" },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#9CA3AF",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#285BE1",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              mt: 0.5,
              boxShadow: "0px 2px 16px rgba(10, 27, 72, 0.16)",
              borderRadius: "4px",
              "& .MuiMenuItem-root": {
                height: 36,
                px: 2,
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: 14,
                lineHeight: "20px",
                color: "#4A4D5A",
                "&.Mui-selected": {
                  bgcolor: selectedBgColor,
                  color: selectedTextColor,
                  fontWeight: 700,
                  "&:hover": { bgcolor: "#1A44A3" },
                },
                "&:hover": { bgcolor: "#F3F4F6" },
              },
            },
          },
        }}
      >
        {options.map((opt) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};

export default SelectInput;
