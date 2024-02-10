import PropTypes from 'prop-types'
import Alert from '@mui/material/Alert'
import Toolbar from '@mui/material/Toolbar'

function AlertNotification({ type, message }) {
    return (
        <>
            <Toolbar />
            <Alert severity={type}>{message}</Alert>
        </>
    )
}

AlertNotification.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}

export default AlertNotification