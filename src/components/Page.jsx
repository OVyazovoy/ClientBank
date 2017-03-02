import React, {PropTypes, Component} from 'react'

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.setYear(+e.target.innerText)
    }

    render() {
        const {year} = this.props;
        return (
            <div className='ib page'>
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