import React, {PropTypes, Component} from 'react'
import {Link} from 'react-router'


export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.changeYear(+e.target.innerText)
    }

    render() {
        const {year} = this.props;
        return (
            <div className='ib page'>
                <p>
                    <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2017</button>{' '}
                    <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2016</button>
                </p>
                <h3>{year} год</h3>
                <br/>
                <Link to='dynamic'>Динамическая загрузка</Link>
            </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    changeYear: PropTypes.func.isRequired

};