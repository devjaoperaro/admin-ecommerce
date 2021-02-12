import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, Datagrid, TextField, EditButton, DateInput } from 'react-admin';

const estilo = makeStyles({
    button: {
        fontWeight: 'bold',
        fontSize: '15px',
        '& svg': { display: 'none' }
    },
});

const MyEditButton = props => {
    const classes = estilo();
    return <EditButton className={classes.button} {...props} />;
};

const UserList = props => {
    return (
    <List {... props} title='Lista de Clientes'>
        <Datagrid>
            <TextField label="Nome" source='username'/>
            <TextField label="Email" source='email'/>
            <TextField label="Data de cadastro" source='cadastro'  />
            <MyEditButton label='Editar' />
        </Datagrid>
    </List>
    )
};

export default UserList; 

