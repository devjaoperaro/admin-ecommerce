import React from 'react'
import { useNotify, useRefresh, DateInput, useRedirect, Edit, SimpleForm, TextInput, SimpleFormIterator }
 from 'react-admin';
import { Form } from 'react-final-form';

const UserEdit = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({ data }) => {
        notify('Editado com sucesso');
        redirect('/usuarios');
        refresh();
    };

    const onFailure = (error) => {
        notify(`Não conseguiu editar: ${error.message}`)
        redirect('/usuarios');
        refresh();
    };

    return (
        <Edit title={'Editando usuários'} onFailure={onFailure} onSuccess={onSuccess} {...props}>
                <SimpleForm>
                    <TextInput label='Nome' source='username' />
                    <TextInput label='Email' source='email'/>
                    <DateInput label='Data de cadastro' source='cadastro'/>
                </SimpleForm>
        </Edit>
    )
        
};

export default UserEdit; 

