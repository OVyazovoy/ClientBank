import React, {PropTypes, Component} from 'react'
import {translate} from 'react-i18next';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

@translate(['translation'])
class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    onYearBtnClick(e) {
        this.props.setYear(+e.target.innerText)
    }

    closeModal(e) {
        e.preventDefault(e);
        this.setState({showModal: false})
    }

    showModalHandler(e) {
        e.preventDefault(e);
        this.setState({showModal: true})
    }

    render() {
        let {t, year} = this.props;
        return (
            <div className='ib page'>
                <button onClick={this.showModalHandler.bind(this)}>{t("test")}</button>
                <p>
                    <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2017</button>
                    {' '}
                    <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2016</button>
                    {' '}
                    <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2015</button>
                </p>
                <h3>{year} год</h3>


                <Modal
                    isOpen={this.state.showModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button onClick={this.closeModal.bind(this)}>close</button>
                    <div>I am a modal</div>
                </Modal>
            </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    setYear: PropTypes.func.isRequired

};
export default Page;