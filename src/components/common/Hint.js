import React, {Component, Child, PropTypes} from 'react'

class Hint extends Component {
    constructor(props) {
        super(props)
    }

    getType(){
        return 'hint--' + this.props.type
    }
    render() {
        return (
            <div
                className={this.getType() + ' ' + this.props.className}
                data-hint={this.props.text}
            >
                {Child.only(this.props.children)}
            </div>
        )
    }
}

Hint.propTypes = {
    type: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
    text: PropTypes.string.isRequired
};

export default Hint;