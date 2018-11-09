import React, { Component } from 'react';
import classes from './Form.module.css';
import Button from '../Button/Button';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength'
//import {fields} from './config';
import Field from '../Field/Field';



class Form extends Component {

    state = { ...this.props.fields}

    _allValid = () => (
        this.state && !Object.values(this.state)
        .some((el) => !el.isValid)
        )

     _checkValidity = (value, validations) => {
        if (validations.isEmail)  return isEmail(value)
        if (validations.minLength) return isLength(value,{min:validations.minLength,max:15}) 
     }

     _onInputChange = (event,id) => {
        const elt = {...this.state[id]} // deep clone 
        const eltValidations = {...elt.validations} // deep clone
        
        elt.value = event.target.value //update value of element
        elt.touched = elt.value !=='';
        
        //only when validation check is required
        elt.isValid = this._checkValidity(elt.value, eltValidations)
        elt.validations = eltValidations  //change copy
    
        this.setState({[id] : elt })
    }



    render() {
        return (
            <form onSubmit = {this.props.submit} className = {classes.Form}>
                {this.props.title}
                {
                    Object.entries(this.state).map(elt =>
                        <Field key = {elt[0]}
                            field={elt[1].field}
                            configs= {elt[1].configs } 
                            value={elt[1].value}
                            isValid={elt[1].isValid}
                            touched ={elt[1].touched}
                            changed={ event => this._onInputChange(event,elt[0]) }
                            />
                    )
                }
                <Button 
                    btnType='Continue' 
                    disabled={ !this._allValid() }>
                    {this.props.buttonLabel} 
                </Button>
            </form> 
        );
    }
}

export default Form;