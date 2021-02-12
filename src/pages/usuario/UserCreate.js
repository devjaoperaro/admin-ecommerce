import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
    Create,
    SimpleForm,
    TextInput,
    PasswordInput,
    DateInput,
    ReferenceArrayInput,
    ReferenceInput,
    SelectInput,
    SelectArrayInput,
    SimpleFormIterator
} from 'react-admin';

const UserCreate = ({...props }) => {
    return (
        <Create title='Cadastrar usuário' {...props}>
                <SimpleForm variant='outlined'>
                    
                    <TextInput label='Nome completo' source='username' />
                    
                    <TextInput label='E-mail' placeholder='E-mail' source='email' />

                    <DateInput label='Data de cadastro' source='cadastro' type='date'/>

                    <PasswordInput label='Senha' source='password' initiallyVisible/>

                </SimpleForm>
        </Create>
    );
};

export default UserCreate;