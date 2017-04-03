import { connect } from 'react-redux'
import App from '../components/App'

function mapStateToProps(state) {
    return {
        page: state.page
    }
}

export default connect(mapStateToProps)(App)
