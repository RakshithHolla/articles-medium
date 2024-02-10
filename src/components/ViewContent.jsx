import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AlertNotification from './AlertNotification'
import errorMessages from '../constants/errorMessages'

function ViewContent({ article }) {
    return (
        <>
            <Toolbar />
            <Divider variant="middle" />
            {!article?.title && (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80%' }}>
                    <Typography variant="h3" component="h3" sx={{ border: 2, borderColor: 'secondary.main' }}>
                        Let&#39;s start reading. Choose an article.
                    </Typography>
                </Box>
            )}
            {article?.title &&
                (<>
                    <Typography variant="h4" component="h4" sx={{ m: 2 }}>
                        {article?.title}
                    </Typography>
                    <Typography variant="h6" component="h6" sx={{ m: 3 }}>
                        {!article?.summary ? '' : 'Summary: ' + article?.summary}
                    </Typography>
                    <Typography paragraph sx={{ m: 3 }}>
                        {!article?.content ? <AlertNotification type='error' message={errorMessages.CONTENT_ERROR} /> : article?.content}
                    </Typography>
                    <Divider variant="middle" />
                </>)}
        </>
    )
}

ViewContent.propTypes = {
    article: PropTypes.object.isRequired
}

export default ViewContent