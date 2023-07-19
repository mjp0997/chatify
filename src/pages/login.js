import { useState } from 'react';

// Components
import Input from '@/components/Input';

// Layouts
import AuthLayout from '@/layouts/AuthLayout';

// Styles
import { AuthContainer, AuthForm, AuthLink, AuthRow, AuthSubmit, AuthText, AuthTitle } from '@/components/auth/styles';

const Login = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   return (
      <AuthContainer>
         <AuthTitle>Sign in</AuthTitle>

         <AuthText>We are Different, We Make You Different.</AuthText>

         <AuthForm>
            <Input
               type='email'
               placeholder='Enter your email'
               value={email}
               handleValue={setEmail}
            />

            <Input
               type='password'
               placeholder='Enter your password'
               value={password}
               handleValue={setPassword}
            />

            <AuthRow>
               <p>Remember me</p>

               <AuthLink href='/'>Reset password</AuthLink>
            </AuthRow>

            <AuthSubmit>Sign in</AuthSubmit>
         </AuthForm>

         <AuthText>Don't have an account? <AuthLink href='/'>Sign in</AuthLink></AuthText>
      </AuthContainer>
   );
}

Login.getLayout = function getLayout(page) {
   return (
      <AuthLayout>{page}</AuthLayout>
   );
}

export default Login;