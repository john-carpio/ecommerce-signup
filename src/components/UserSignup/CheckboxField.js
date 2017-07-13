import React from 'react';

class TextField extends React.Component {
    constructor(props) {
        super(props);
        this._handleInputChange = this._handleInputChange.bind(this);
        this.state = {
            showError: null,
            errorMsg: null,
            checked: typeof props.checked !== 'undefined' ? props.checked : false
        }
    }

    _handleInputChange(e) {
        if(!this.props.required) {
            return
        }
        const { checked } = e.target;
        console.log(checked)
        const isValid = this.props.required && e.target.checked;
        const requiredError = this.props.requiredError || 'This box should be checked';
        this.setState({
            checked,
            showError: !isValid,
            errorMsg: isValid ? '' : requiredError
        })
    }

    render() {
        const { type, id, fieldLabel, fieldClass } = this.props;
        return (
            <div className={`${fieldClass} ${this.state.showError ? 'has-error' : ''}`}>
                <input id={id} onChange={this._handleInputChange} checked={this.state.checked} name={id} type='checkbox'/>
                {fieldLabel &&
                <label htmlFor='isOver18'>
                    {fieldLabel}
                </label>
                }
                {this.state.showError &&
                <div className='error-container'>
                    {this.state.errorMsg}
                </div>
                }
            </div>
        )
    }
}

export default TextField;
