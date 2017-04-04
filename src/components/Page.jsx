import React, {PropTypes, Component} from 'react'
import {Link} from 'react-router'
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

    onBtnClick(e) {
        this.props.changeChoose(e.target.innerText)
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
            icon: <img width='32' src="static/img/react.png"/>
        });
        let alert = ReactDOM.findDOMNode(msg);
        elementClass(alert).add('customAlert');
    }

    render() {
        let {t, choose} = this.props;
        return (
            <div className='ib page'>

                {/*Change store*/}
                <p>
                    <button className='btn' onClick={this.onBtnClick.bind(this)}>React</button>{' '}
                    <button className='btn' onClick={this.onBtnClick.bind(this)}>Redux</button>
                </p>
                <h3>You choose: {choose}</h3>
                <br/>

                {/*Modal*/}
                <Modal
                    isOpen={this.state.showModal}
                    style={customStyles}
                    contentLabel="Example Modal">
                    <button onClick={this.closeModal.bind(this)}>close</button>
                    <div>I am a modal</div>
                    <img width='70' src="static/img/lego-3d.svg"/>
                </Modal>
                <button className="hint--bottom" data-hint="Hint text"
                        onClick={this.showModalHandler.bind(this)}>
                    {t("test")}
                </button>
                <br/>
                <br/>

                {/*Alert*/}
                <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
                <button onClick={this.showAlert}>Show Alert</button>
                <br/>
                <br/>

                {/*Link*/}
                <Link to='dynamic'>
                    <button>Динамическая загрузка</button>
                </Link>

        </div>
        )
    }
}

Page.propTypes = {
    choose: PropTypes.string.isRequired,
    changeChoose: PropTypes.func.isRequired

};
export default Page;