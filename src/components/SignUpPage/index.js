import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../Button';
import Input from '../Input';
import Logo from '../Logo.png';
import Loader from "react-loader-spinner";

import { Container, StyledLink } from './style';
import { useContext } from 'react/cjs/react.development';
import UserContext from '../../contexts/UserContext';

function SignUpPage() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [name, setName] = useState('');
     const [isLoading, setIsLoading] = useState(false);
     const { image, setAndPersistUser } = useContext(UserContext);
     const navigate = useNavigate();

     function handleSignUp(e) {
          e.preventDefault();

          const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, {
               email,
               password,
               name,
               image
          });

          setIsLoading(true);

          promise.then(response => {
               setIsLoading(false);
               navigate('/')
          });
          promise.catch(error => {
               alert(error.response.data.message)
               setIsLoading(false);
          });
     }

     return (
          <Container>
               <img src={Logo} alt="Logo Principal" />
               <form onSubmit={handleSignUp}>
                    <Input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
                    <Input type="password" value={password} placeholder="senha" onChange={(e) => setPassword(e.target.value)} disabled={isLoading} />
                    <Input type="name" value={name} placeholder="nome" onChange={(e) => setName(e.target.value)} disabled={isLoading} />
                    <Input type="text" value={image} placeholder="foto" onChange={(e) => setAndPersistUser(e.target.value)} disabled={isLoading} />
                    <Button type="submit" disabled={isLoading}>
                         {isLoading ? <Loader type="ThreeDots" color="#FFFFFF" height={50} width={50} /> : "Cadastrar"}
                    </Button>
               </form>
               <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
          </Container>
     );
}

export default SignUpPage;