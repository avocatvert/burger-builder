const inputs = {
    firstName: {
        configs: {
            name: 'First Name',
            type: 'text',
            placeholder: ''
        },
        validations: {
            required: true,
            minLength: 6,
            maxLength: 20
        },
        field: 'input',
        value: '',
        isValid: false,
        touched: false
    },

    lastName: {
        configs: {
            name: 'Last Name',
            type: 'text',
            placeholder: ''
        },
        validations: {
            required: true,
            minLength: 6,
            maxLength: 20
        },
        field: 'input',
        value: '',
        isValid: false,
        touched: false
    },
    email: {
        configs: {
            name: 'E-mail',
            type: 'email',
            placeholder: ''
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
    street: {
        configs: {
            name: 'Street',
            type: 'text',
            placeholder: ''
        },
        validations: {
            required: true,
            minLength: 6,
            maxLength: 25
        },
        field: 'input',
        value: '',
        isValid: false,
        touched: false
    },

    zipCode: {
        configs: {
            name: 'Zip/Postal Code',
            type: 'text',
            placeholder: ''
        },
        validations: {
            required: true
        },
        field: 'input',
        value: '',
        isValid: false,
        touched: false
    },

    country: {
        configs: {
            name: 'Country',
            type: 'text',
            placeholder: ''
        },
        validations: {
            required: true,
            minLength: 6,
            maxLength: 25
        },
        field: 'input',
        value: '',
        isValid: false,
        touched: false
    }
} //orderForm.input


export default inputs