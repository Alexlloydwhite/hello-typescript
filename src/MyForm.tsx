import { Button } from '@material-ui/core';
import { Form, Formik, Field } from 'formik';
import * as React from 'react';
import MyField from './MyField';

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

interface Props {
    onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '' }}
            onSubmit={(values, {resetForm}) => {
                onSubmit(values);
                resetForm();
            }}
        >
            {({ values }) => (
                <Form>
                    <div>
                        <Field
                            name="firstName"
                            placeholder="First Name"
                            component={MyField}
                        />
                    </div>
                    <div>
                        <Field
                            name="lastName"
                            placeholder="Last Name"
                            component={MyField}
                        />
                    </div>
                    <div>
                        <Field
                            name="email"
                            placeholder="Email"
                            component={MyField}
                        />
                    </div>
                    <Button variant="contained" type="submit">Submit</Button>
                    <pre>
                        {JSON.stringify(values, null, 2)}
                    </pre>
                </Form>
            )}
        </Formik>
    );
};