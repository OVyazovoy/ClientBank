import React, {PropTypes, Component} from 'react'
import {translate} from 'react-i18next';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import elementClass from 'element-class';
import AlertContainer from 'react-alert';

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
        this.alertOptions = {
            offset: 14,
            position: 'top right',
            theme: 'dark',
            time: 50000,
            transition: 'scale',
            className: 'customAlert'
        };
    }
import {Link} from 'react-router'

    onYearBtnClick(e) {
        this.props.changeYear(+e.target.innerText)
    }

    closeModal(e) {
        e.preventDefault(e);
        this.setState({showModal: false})
    }

    showModalHandler(e) {
        e.preventDefault(e);
        this.setState({showModal: true})
    }

    showAlert() {
        msg.error('Some text or component', {
            icon: <img src="path/to/some/img/32x32.png"/>
        });
        let alert = ReactDOM.findDOMNode(msg);
        elementClass(alert).add('customAlert');
    }

    render() {
        let {t, year} = this.props;
        return (
            <div className='ib page'>
                <Modal
                    isOpen={this.state.showModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button onClick={this.closeModal.bind(this)}>close</button>
                    <div>I am a modal</div>
                </Modal>
                <button className="hint--bottom" data-hint="dasdhjk"
                        onClick={this.showModalHandler.bind(this)}>
                    {t("test")}
                </button>

                <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
                <button onClick={this.showAlert}>Show Alert</button>

                <p>
                    <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2017</button>
                    {' '}
                    <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2016</button>
                    {' '}
                    <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2015</button>
                </p>
                <h3>{year} год</h3>

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
export default Page;