import { connect } from 'react-redux'
import {changeChoose} from '../actions/PageActions'
import Page from '../components/Page'

function mapStateToProps(state) {
    return {
        choose: state.page.choose
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeChoose(choose){
            dispatch(changeChoose(choose));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
