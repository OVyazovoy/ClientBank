import React, {PropTypes, Component} from 'react'
import { translate } from 'react-i18next';

@translate(['translation'])
class Page extends Component {
    onYearBtnClick(e) {
        this.props.setYear(+e.target.innerText)
    }

    render() {
        let { t, year } = this.props;
        console.log(this.props.i18n);
        return (
            <div className='ib page'>
                {t("key")}
                {t("test")}
                <p>
                    <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2017</button>{' '}
                    <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2016</button>{' '}
                    <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2015</button>
                </p>
                <h3>{year} год</h3>
            </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    setYear: PropTypes.func.isRequired

};
export default Page;