import { useState, type MouseEvent } from "react";
import {
  Box,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { ModelDescriptor } from "../../types/models";
import * as styles from "./styles";

export interface HeaderProps {
  chatTitle: string;
  model: string;
  models: ModelDescriptor[];
  onModelChange: (value: string) => void;
  avatarSrc?: string;
  onAvatarClick?: () => void;
}

export default function Header({
  chatTitle,
  model,
  models,
  onModelChange,
  avatarSrc,
  onAvatarClick,
}: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleModelButtonClick = (e: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget);

  const handleModelClose = () => setAnchorEl(null);

  return (
    <Box component="header" sx={styles.headerContainer}>
      <Button
        aria-label={`Agent selector, current model is ${model}`}
        id="model-switcher-button"
        aria-haspopup="menu"
        aria-expanded={open ? "true" : undefined}
        onClick={handleModelButtonClick}
        endIcon={<ExpandMoreIcon fontSize="small" sx={{ color: "text.secondary" }} />}
        sx={styles.modelButton}
      >
        <Typography variant="h6" noWrap>
          {chatTitle}
        </Typography>
      </Button>

      <Menu
        id="model-switcher-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleModelClose}
        MenuListProps={{ "aria-labelledby": "model-switcher-button" }}
        sx={styles.modelMenu}
      >
        <Typography variant="subtitle2" sx={styles.menuHeader}>
          Models
        </Typography>

        {models.map((m) => (
          <MenuItem
            key={m.value}
            selected={m.value === model}
            onClick={() => {
              onModelChange(m.value);
              handleModelClose();
            }}
            sx={styles.selectedMenuItem}
          >
            <Box>
              <Typography variant="body1" fontWeight={500} color="text.primary">
                {m.label}
              </Typography>
              {m.description && (
                <Typography variant="body2" color="text.secondary">
                  {m.description}
                </Typography>
              )}
            </Box>
          </MenuItem>
        ))}

        <MenuItem
          onClick={handleModelClose}
          sx={{ justifyContent: "center", pt: 1 }}
        >
          More models…
        </MenuItem>
      </Menu>

      <Box flexGrow={1} />

      {avatarSrc && (
        <IconButton
          onClick={onAvatarClick}
          aria-label="Account menu"
          sx={styles.avatarIcon}
        >
          <Avatar src={avatarSrc} sx={styles.avatarImage} />
        </IconButton>
      )}
    </Box>
  );
}
