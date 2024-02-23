import React from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
const MENU_STYLE = {
  color: 'primary',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

import DashboardIcon from '@mui/icons-material/Dashboard'
function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trelloCustom.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5',
      padding: 2
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="NgocTam practice"
          clickable />

        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label="NgocTam practice"
          clickable />

        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to google drive"
          clickable />

        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable />

        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filter"
          clickable />

      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon = {<PersonAddIcon/>}>Invite</Button>
        <AvatarGroup max={4} 
        sx={{
          '& .MuiAvatar-root': {
            width: 34,
            height: 34,
            fontSize:16
          } 
        }}
        >
        <Tooltip title="ngoctam">
          <Avatar alt="Remy Sharp" src="" />
        </Tooltip><Tooltip title="ngoctam">
          <Avatar alt="Remy Sharp" src="" />
        </Tooltip><Tooltip title="ngoctam">
          <Avatar alt="Remy Sharp" src="" />
        </Tooltip><Tooltip title="ngoctam">
          <Avatar alt="Remy Sharp" src="" />
        </Tooltip><Tooltip title="Notification">
          <Avatar alt="Remy Sharp" src="" />
        </Tooltip><Tooltip title="Notification">
          <Avatar alt="Remy Sharp" src="" />
        </Tooltip>
    </AvatarGroup>
    
      </Box>
    </Box>
  )
}

export default BoardBar
