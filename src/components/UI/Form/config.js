export const fields = {
    email: {
        configs: {
            name: null,
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
            name: null,
            type: 'password',
            placeholder: 'Password'
        },
        validations: {
            minLength: 6,
            required: true
        },
        field: 'input',
        value: '',
        isValid: false,
        touched: false
    }
}