import React, { useState, useEffect } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import LockIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom';
import './style.scss';

const MyLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    // useEffect(() => {
    //     localStorage.setItem('permissions', 'temp');
    // }, []);

    const submit = e => {
        e.preventDefault();
        try {
            login({ email, password });
            localStorage.removeItem('permissions');
        } catch (error) {
            localStorage.setItem('permissions', 'temp');
            notify('E-mail ou senha inválida');
        }
    };

    return (
        <ThemeProvider>
            <div className='container'>
                <form className='form-control' onSubmit={submit}>
                    <h1>Bem vindo ao CRM!</h1>
                    <h4>Entre com os dados para acessar o sistema.</h4>

                    <input
                        type='email'
                        id='email'
                        placeholder='E-mail'
                        name='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <span id='email-icon'>
                        <EmailIcon />
                    </span>

                    <input
                        type='password'
                        id='password'
                        placeholder='Senha'
                        required
                        name='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <span id='password-icon'>
                        <LockIcon />
                    </span>

                    <Button className='btn-login' type='submit'>
                        LOGIN
                    </Button>

                    <Button
                        component={Link}
                        to={{ pathname: '/forgot' }}
                        className='btn-reset'
                    >
                        Esqueci minha senha
                    </Button>
                </form>
            </div>
        </ThemeProvider>
    );
};

export default MyLoginPage;