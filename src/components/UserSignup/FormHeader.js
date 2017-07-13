import React from 'react';

class FormHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='form-header'>
                <i className='icon icon-circle icon-large'>
                    <span className='fa fa-user-circle-o'></span>
                </i>
                <h3 className='title'>
                    Create new account
                </h3>
                <p className='subtitle'>
                    Enter your credentials below
                </p>
            </div>
        )
    }

}


export default FormHeader;
