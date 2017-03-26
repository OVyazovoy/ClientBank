import { connect } from 'react-redux'
import {setYear} from '../actions/PageActions'
import Page from '../components/Page'

function mapStateToProps(state) {
    return {
        year: state.page.year
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeYear(company){
            dispatch(setYear(company));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
