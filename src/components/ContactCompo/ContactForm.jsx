import { Alert, Box, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, Snackbar, TextField, Typography } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik';
import ContactFormSchema from './ContactFormSchema';
import emailjs from '@emailjs/browser';


const Contactform = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: '',
    },
    validationSchema: ContactFormSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      // Send the form values using emailjs
      const emailService = 'service_z5bonw9';
      const templateId = 'template_xvmr7wk';
      const yourUserId = 'tISMwdyPc9SBQJVoU'
      emailjs.send(emailService, templateId, {
        to_name: 'Rashmi Chaudhary',
        from_name: values.firstName,
        from_last_name: values.lastName,
        from_email: values.email,
        from_phoneNumber: values.phoneNumber,
        from_subject: values.subject,
        from_message: values.message,
      }, yourUserId)
        .then((response) => {
          // console.log('Email sent successfully:', response);
          setOpen(true)
          // Reset the form and enable the submit button
          resetForm();
          setSubmitting(false);
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          setSubmitting(false);
        });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "40px", color: "#000" }}>
          <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <TextField
              id="firstName"
              label="First Name"
              margin="normal"
              variant="standard"
              sx={{ width: "40%" }}
              {...formik.getFieldProps('firstName')}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              id="lastName"
              label="Last Name"
              variant="standard"
              sx={{ width: "40%" }}
              margin="normal"
              {...formik.getFieldProps('lastName')}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Box>
          <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", flexWrap: "wrap" }}>
            <TextField
              id="email"
              label="Email"
              variant="standard"
              sx={{ width: "40%" }}
              margin="normal"
              {...formik.getFieldProps('email')}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              id="phoneNumber"
              label="Phone Number"
              variant="standard"
              sx={{ width: "40%" }}
              margin="normal"
              {...formik.getFieldProps('phoneNumber')}
              error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />
          </Box>
          <Box>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Select Subject ?</FormLabel>
              <RadioGroup
                sx={{ fontSize: "20px" }}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
              >
                <FormControlLabel value="11th" control={<Radio />} label="11th" />
                <FormControlLabel value="12th  " control={<Radio />} label="12th" />
                <FormControlLabel value="iit" control={<Radio />} label="I.I.T" />
                <FormControlLabel value="jeemains" control={<Radio />} label="J.E.E Mains" />
                <FormControlLabel value="jeeadvance" control={<Radio />} label="J.E.E Advance" />
                <FormControlLabel value="neet" control={<Radio />} label="NEET"
                />
              </RadioGroup>
              <FormHelperText sx={{ marginLeft: '0px', color: 'red' }}>{formik.touched.subject && formik.errors.subject ? formik.errors.subject : null}</FormHelperText>

            </FormControl>
          </Box>

          <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <TextField
              id="message"
              label="Message"
              placeholder="Write your message.."
              variant="outlined"
              sx={{ width: "100%" }}
              multiline
              rows={4}
              margin="normal"
              {...formik.getFieldProps('message')}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Box>
          <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <Button
              disabled={!formik.isValid || formik.isSubmitting}
              style={{
                backgroundColor: !formik.isValid || formik.isSubmitting ? '#CCCCCC' : '#1976D2',
                color: 'white',
              }}
              type={'submit'}
              sx={{ background: "red", textTransform: "capitalize", color: "#fff" }}>Send Message</Button>
          </Box>
        </Box>
      </form>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </>
  )
}

export default Contactform