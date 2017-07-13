import React from 'react';
import moment from 'moment';


class DateField extends React.Component {

  constructor(props) {
    super(props);
    this._handleInputChange = this._handleInputChange.bind(this);
    this.dateFormat = 'YYYY-MM-DD';
    this.state = {
        selectedDay: moment().format(this.dateFormat),
        isInvalidDate: false,
        showError: false,
        errorMessage: null
    }
  }

  _handleInputChange(e) {
      const { minAge } = this.props;
      let isInvalidDate, selectedDay, showError, isUnderMinAge, errorMsg;
      if(this._isValidDate(e.target.value)) {
          const age = moment().diff(moment(e.target.value, this.dateFormat).format(this.dateFormat), 'years');
          const isUnderMinAge = age < minAge;
          if(isUnderMinAge) {
              isInvalidDate = false;
              selectedDay = e.target.value;
              showError = !!isUnderMinAge;
              errorMsg = !!isUnderMinAge ? `You are under ${minAge}` : null;
          }
      } else {
          isInvalidDate = true,
          showError = false,
          errorMsg = null,
          selectedDay = e.target.value
      }
      this.setState({
          isInvalidDate,
          showError,
          errorMsg,
          selectedDay
      })
  }

  _isValidDate(formattedDate) {
      return moment(formattedDate).isValid();
  }

  _formatDate(date) {
      return moment(date).format(this.dateFormat);
  }



  render() {const { type, id, fieldLabel, fieldClass } = this.props;
  return (
            <div className={`${fieldClass} ${this.state.showError ? 'has-error' : ''}`}>
                <div className='form-field text-field'>
                    {fieldLabel &&
                    <label htmlFor={id}>
                      {fieldLabel}
                    </label>
                    }
                    <input id={id} name={id}
                    onChange={this._handleInputChange}
                    onKeyDown={this._handleInputChange}
                    value={this.state.selectedDay}
                    type='date'/>
                    {(this.state.showError || this.state.isInvalidDate) &&
                    <div className='error-container'>
                        {this.state.errorMsg}
                        {this.state.isInvalidDate && 'Invalid Date.'}
                    </div>
                  }
              </div>
          </div>
      )
  }
}

export default DateField;
