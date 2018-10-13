const orderForm =  {
        inputs: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    isValid: false,
                    required: true
                },
                touched: false
            },


            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    isValid: false,
                    required: true
                },
                touched: false
            },


            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip/Postal Code'
                },
                value: '',
                validation: {
                    isValid: false,
                    required: true
                },
                touched: false
            },

            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    isValid: false,
                    required: true
                },
                touched: false
            },
            email: {
                elementType: 'email',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your E-mail'
                },
                value: '',
                validation: {
                    isValid: false,
                    required: true
                },
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [{
                            value: 'fasttest',
                            children: 'Fasttest'
                        },
                        {
                            value: 'cheapest',
                            children: 'Cheapest'
                        }
                    ]
                },
                value: 'Fasttest',
                validation: {
                    isValid: true,
                    required: false,
                },
                touched: true
            }
        }, //orderForm.input
        allInputsValid: false,
    }

export default orderForm