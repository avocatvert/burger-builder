const fields = {
   email: {
       configs: {
           name: 'E-mail',
           type: 'email',
           placeholder: 'Email address'
       },
       validations: {
           isEmail: true,
           required: true
       },
       field: 'input',
       value: '',
       isValid: false,
       touched: false
   },
    password: {
        configs: {
            name: 'Password',
            type: 'password',
            placeholder: 'min 8 characters/numbers'
        },
        validations: {
            minLength: 8,
            required: true
        },
        field: 'input',
        value: '',
        isValid: false,
        touched: false
    }
}

export default fields
