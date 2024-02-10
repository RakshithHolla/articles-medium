import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import ArticleIcon from '@mui/icons-material/Article'

const drawerWidth = 1 / 4

function SideNavigation({ itemList, itemAction }) {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {itemList.map((item) => (
                        <ListItem key={item.id} disablePadding>
                            <ListItemButton onClick={() => itemAction(item)}>
                                <ArticleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

SideNavigation.propTypes = {
    itemList: PropTypes.array.isRequired,
    itemAction: PropTypes.func.isRequired
}

export default SideNavigation