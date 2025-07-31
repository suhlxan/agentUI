import type { SxProps, Theme } from "@mui/material";

export const sidebarContainer: SxProps<Theme> = {
  height: "100vh",
  bgcolor: "#f5f5f5",
  borderRight: "1px solid #ddd",
  display: "flex",
  flexDirection: "column",
  p: 1,
  transition: "width 0.3s ease",
};

export const sidebarToggleWrapper: SxProps<Theme> = {
  width: "100%",
};

export const sidebarHeaderStack: SxProps<Theme> = {
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
};

export const sidebarFullWidthWrapper: SxProps<Theme> = {
  width: "100%",
};

export const sectionHeaderWrapper: SxProps<Theme> = {
  width: "100%",
  mb: 0,
  px: 1.5,
};

export const sectionCaption: SxProps<Theme> = {
  color: "#888",
  fontWeight: 500,
  textTransform: "uppercase",
  fontSize: "0.65rem",
};

export const chatListWrapper: SxProps<Theme> = {
  width: "100%",
  maxHeight: "calc(100vh - 250px)",
  overflowY: "auto",
};


export const sidebarItemBox: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  px: 1.5,
  py: 0.75,
  width: "100%",
  height: 40,
  borderRadius: 4,
  cursor: "pointer",
  transition: "background-color 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    backgroundColor: (theme) => theme.palette.action.hover,
  },
};

export const chatTitleText: SxProps<Theme> = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  flexGrow: 1,
  fontSize: "0.875rem",
};

export const iconButton: SxProps<Theme> = {
  p: 0.5,
  "&:hover": { backgroundColor: "transparent" },
};

export const menuPaper: SxProps<Theme> = {
  borderRadius: "8px",
  width: 150,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
};

export const menuItemContent: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  fontSize: 14,
};

export const iconSize = 18;

export const deleteMenuItem: SxProps<Theme> = {
  color: "error.main",
  "&:hover": {
    backgroundColor: "rgba(244, 67, 54, 0.1)",
    color: "error.main",
    "& svg": {
      color: "error.main",
    },
  },
};
