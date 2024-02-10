import PropTypes from 'prop-types'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

function AppLoader({ isLoading }) {
    return (
        <Backdrop open={isLoading}>
            <CircularProgress color="secondary" />
        </Backdrop>
    )
}

AppLoader.propTypes = {
    isLoading: PropTypes.bool.isRequired
}

export default AppLoader