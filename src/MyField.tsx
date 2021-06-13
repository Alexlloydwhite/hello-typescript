import { FieldProps } from 'formik';
import * as React from 'react';
import { TextField } from '@material-ui/core'
import { TextFieldProps } from '@material-ui/core/TextField/TextField';

const MyField: React.FC<FieldProps & TextFieldProps> = ({ label, placeholder, field}) => {
    return (<TextField placeholder={placeholder} {...field} />);
}

export default MyField;