import * as Yup from 'yup';

const ContactFormSchema =  Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string(),

  });

export default ContactFormSchema;
