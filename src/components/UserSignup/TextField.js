import React from 'react';

class TextField extends React.Component {
    constructor(props) {
        super(props);
        this._handleInputBlur = this._handleInputBlur.bind(this);
        this._handleInputChange = this._handleInputChange.bind(this);
        this.defaultType = 'text';
        this.state = {
            showError: null,
            errorMsg: null,
            value: typeof props.value !== 'undefined' ? props.value : ''
        }
    }

    _handleInputBlur(e) {
        const { value } = e.target;
        const label = this.props.fieldLabel || 'This field';
        const hasValue = value || value.trim().length;
        if(this.props.required && !hasValue) {
            this.setState({
                showError: true,
                errorMsg: `${label} is required.`
            });
        }
    }

    _handleInputChange(e) {
        const { value } = e.target;
        let { showError, errorMsg } = this.state;
        const hasValue = value || value.trim().length;
        if(this.props.required && hasValue && showError) {
            showError = false,
            errorMsg = null
        }
        this.setState({
            value,
            showError,
            errorMsg
        });
    }

    render() {
        const { type, id, fieldLabel, fieldClass } = this.props;
        return (
            <div className={`${fieldClass} ${this.state.showError ? 'has-error' : ''}`}>
                {fieldLabel &&
                <label htmlFor={id}>
                    {fieldLabel}
                </label>
                }
                <input onChange={this._handleInputChange} onBlur={this._handleInputBlur} value={this.state.value} id={id} name={id} type={type || this.defaultType}/>
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
