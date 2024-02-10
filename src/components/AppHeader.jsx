import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'

function AppHeader() {
    return (
        <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} color='secondary'>
            <Toolbar>
                <AutoStoriesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography variant="h6" component="div" noWrap>
                    Article-Medium
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default AppHeader