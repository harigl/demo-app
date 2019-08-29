import React from 'react'
import { push } from 'connected-react-router'
import { useSelector, useDispatch } from 'react-redux'
import { useForm, useField } from 'react-final-form-hooks'
import { Form, Container, Row, Col } from 'reactstrap'
import SignInStyle from './styles/SignInStyle'
import { login } from '../../actions/user'
import Input from '../../components/base/Input'
import ButtonLoader from '../../components/base/ButtonLoader'
import errorParser from '../../helpers/errorParser'

export default function SignIn() {
  const dispatch = useDispatch()
  const accessToken = useSelector((state) => state.user.accessToken)
  const pending = useSelector((state) => state.user.pending)
  const message = useSelector((state) => state.user.message)

  const onSubmit = (values) => {
    values = {
      ...values
    }
    dispatch(login(values))
  }

  const validate = (values) => {
    const errors = {}
    if (!values.phone) {
      errors.phone = 'Phone is Required'
    }
    if (!values.password) {
      errors.password = 'Password is Required'
    }
    return errors
  }

  const { form, handleSubmit } = useForm({
    onSubmit,
    validate
  })

  const formFields = {
    phone: useField('phone', form),
    password: useField('password', form)
  }
  if (!accessToken) {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }} className={'mt-5 ' + SignInStyle}>
            <div className="mt-5 p-3 login-container">
              <div className="login-header">
                <img src="./mawingu.png" alt="Mawingu Logo" />
                <h1 className="my-3">Admin Login</h1>
              </div>
              <div className="login-body">
                <Form className="form" onSubmit={handleSubmit}>
                  <Input
                    {...{
                      name: 'phone',
                      icon: 'phone',
                      label: 'Phone',
                      rotate: 90,
                      type: 'tel',
                      error: errorParser('phone', formFields, message),
                      ...formFields.phone.input
                    }}
                  />
                  <Input
                    {...{
                      name: 'password',
                      icon: 'lock',
                      label: 'Password',
                      type: 'password',
                      error: errorParser('password', formFields, message),
                      ...formFields.password.input
                    }}
                  />
                  <ButtonLoader
                    loading={pending}
                    {...{
                      className: 'btn btn-primary',
                      type: 'submit'
                    }}
                  >
                    Login
                  </ButtonLoader>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  } else {
    dispatch(push('/'))
    return null
  }
}

// <div className={'mt-5 ' + SignInStyle}>
//            <div className="mt-5 p-3 login-container col-sm-12 col-md-5 offset-md-4 col-lg-3 offset-lg-5 shadow">
//              <div className="login-header">
//                <img src="./mawingu.png" alt="Mawingu Logo" />
//                <h1 className="my-3">Admin Login</h1>
//              </div>
//              <div className="login-body">
//                <Form className="form" onSubmit={handleSubmit}>
//                  <Input
//                    {...{
//                      name: 'phone',
//                      icon: 'phone',
//                      label: 'Phone',
//                      type: 'tel',
//                      error: errorParser('phone', formFields, message),
//                      ...formFields.phone.input
//                    }}
//                  />
//                  <Input
//                    {...{
//                      name: 'password',
//                      icon: 'lock',
//                      label: 'Password',
//                      type: 'password',
//                      error: errorParser('password', formFields, message),
//                      ...formFields.password.input
//                    }}
//                  />
//                  <ButtonLoader
//                    loading={pending}
//                    {...{
//                      className: 'btn btn-primary',
//                      type: 'submit'
//                    }}
//                  >
//                    Login
//                  </ButtonLoader>
//                </Form>
//              </div>
//            </div>
//          </div>
