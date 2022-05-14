import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../Button';
import Input from '../Input';
// import Loader from "react-loader-spinner";

import { Container, StyledLink } from './style';
// import { useContext } from 'react/cjs/react.development';
// import UserContext from '../../contexts/UserContext';

function SignUpPage() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [checkPassword, setCheckPassword] = useState('');
     const [name, setName] = useState('');
     const [isLoading, setIsLoading] = useState(false);
     // const { image, setAndPersistUser } = useContext(UserContext);
     const navigate = useNavigate();

     function handleSignUp(e) {
          e.preventDefault();

          const promise = axios.post(`http://localhost:5000/sign-up`, {
               email,
               password,
               name,
               // image
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
               <h1>My Wallet</h1>
               <form onSubmit={handleSignUp}>
                    <Input type="name" value={name} placeholder="Nome" onChange={(e) => setName(e.target.value)} disabled={isLoading} />
                    <Input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
                    <Input type="password" value={password} placeholder="Senha" onChange={(e) => setPassword(e.target.value)} disabled={isLoading} />
                    <Input type="password" value={checkPassword} placeholder="Confirme sua senha" onChange={(e) => setCheckPassword(e.target.value)} disabled={isLoading} />
                    <Button type="submit" disabled={isLoading}>
                         {/* {isLoading ? <Loader type="ThreeDots" color="#FFFFFF" height={50} width={50} /> : "Cadastrar"} */}
                         Cadastrar
                    </Button>
               </form>
               <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
          </Container>
     );
}

export default SignUpPage;
