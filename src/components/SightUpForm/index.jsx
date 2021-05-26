import React, {Component} from 'react'
import style from "./SignUpForm.module.css"


class SignUpForm {

    submitHandler = (event) =>{
        event.preventDefault();
        console.log(event);
        const {
            target,
            target:{
                elements:{
                    firstname: {value: firstname},
                    lastname: {value: lastname},
                    email: {value: email},
                    password: {value: password}

                },
            },
        } = event;
        const{registerUser} = this.props;
        registerUser({firstname, lastname, email, password})
    };
    render() {
        return (
            <form className = {style.container} onSubmit = {this.submitHandler}>
                <input className = {style.input} type = "text" name = "firstname" placeholder = "Введите имя" />
                <input className = {style.input} type = "text" name = "lastname" placeholder = "Введите фамилию"/>
                <input className = {style.input} type = "text" name = "email" placeholder = "Введите адрес"/>
                <input className = {style.input} type = "text" name = "password" placeholder = "Введите пароль"/>
                <input className = {style.input} type = "submit"/>
                
            </form>
        );
    }
}

export default SignUpForm;