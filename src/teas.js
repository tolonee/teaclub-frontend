import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const TeaList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="variety" />
        </Datagrid>
    </List>
);