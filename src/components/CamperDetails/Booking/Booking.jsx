import { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  BookingContainer,
  FormHeader,
  FormSecondaryText,
  InputsGroup,
  ErrorText,
  SuccessMessage,
} from "./Booking.styled";
import { ButtonGeneral } from "../../ButtonGeneral/ButtonGeneral";

const Booking = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    date: Yup.date().required("Required"),
    comment: Yup.string().required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    setSuccessMessage("Form successfully sent!");
    resetForm();

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <BookingContainer>
      <Formik
        initialValues={{
          name: "",
          email: "",
          date: "",
          comment: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({ resetForm }) => (
          <Form autoComplete="off">
            <FormHeader>Book your campervan now</FormHeader>

            <FormSecondaryText>
              Stay connected! We are always ready to help you.
            </FormSecondaryText>

            <InputsGroup>
              <Field type="text" name="name" id="name" placeholder="Name*" />
              <ErrorMessage
                render={(msg) => <ErrorText>{msg}</ErrorText>}
                name="name"
              />

              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
              />
              <ErrorMessage
                render={(msg) => <ErrorText>{msg}</ErrorText>}
                name="email"
              />

              <Field
                type="date"
                name="date"
                id="date"
                placeholder="Booking date"
              />
              <ErrorMessage
                render={(msg) => <ErrorText>{msg}</ErrorText>}
                name="date"
              />

              <Field
                as="textarea"
                name="comment"
                id="comment"
                rows="5"
                placeholder="Comment*"
              />
              <ErrorMessage
                render={(msg) => <ErrorText>{msg}</ErrorText>}
                name="comment"
              />
            </InputsGroup>

            <ButtonGeneral type="submit">Send</ButtonGeneral>
            {successMessage && (
              <SuccessMessage>{successMessage}</SuccessMessage>
            )}
          </Form>
        )}
      </Formik>
    </BookingContainer>
  );
};

export default Booking;
