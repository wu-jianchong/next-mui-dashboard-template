"use client";

import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

export default function AppBar() {
  return (
    <MuiAppBar position="static" elevation={0} color="transparent">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          マイアプリ
        </Typography>
        <form action="/api/logout" method="post">
          <Button type="submit" color="inherit">
            ログアウト
          </Button>
        </form>
      </Toolbar>
    </MuiAppBar>
  );
}
