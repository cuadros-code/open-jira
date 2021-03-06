import { useContext } from "react";
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { UIContext } from "../../context/ui/UIContext";

const menuItems = ['Inbox', 'Proyectos', 'Tareas', 'Usuarios', 'Configuración']

const Sidebar = () => {

  const { sideOpen, toggleSidebar } = useContext(UIContext)

  return (
    <Drawer
      anchor="left"
      open={sideOpen}
      onClose={toggleSidebar}
    >
      <Box sx={{ width: '250px' }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant='h5' >Menú</Typography>
        </Box>
        <List>
          {
            menuItems.map((item, index) => (
              <ListItem button key={index}> 
                <ListItemIcon>
                  { index % 2  ? <InboxOutlinedIcon /> : <EmailOutlinedIcon /> } 
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))
          }
        </List>
        <Divider />
        <List>
          {
            menuItems.map((item, index) => (
              <ListItem button key={index}> 
                <ListItemIcon>
                  { index % 2  ? <InboxOutlinedIcon /> : <EmailOutlinedIcon /> } 
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))
          }
        </List>
      </Box>
    </Drawer>
  )
}

export default Sidebar