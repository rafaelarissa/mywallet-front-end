import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../Button';
import Input from '../Input';
// import Loader from "react-loader-spinner";
// import TokenContext from '../../contexts/TokenContext';
import { Container, StyledLink } from './style';
// import UserContext from '../../contexts/UserContext';

function LoginPage() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [isLoading, setIsLoading] = useState(false);
     const navigate = useNavigate();

     // const { setAndPersistUser } = useContext(UserContext)
     // const { setAndPersistToken } = useContext(TokenContext);

     function handleLogin(e) {
          e.preventDefault();

          const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, {
               email,
               password,
          });

          setIsLoading(true);

          promise.then(response => {
               // setToken(response.data.token)
               // setAndPersistUser(response.data.image)
               setIsLoading(false);
               // setAndPersistToken(response.data.token);
               navigate('/hoje')
          });

          promise.catch(error => {
               alert(error.response.data.message)
               setIsLoading(false);
          });
     }

     return (
          <Container>
               <h1>My Wallet</h1>
               <form onSubmit={handleLogin}>
                    <Input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
                    <Input type="password" value={password} placeholder="Senha" onChange={(e) => setPassword(e.target.value)} disabled={isLoading} />
                    <Button type="submit" disabled={isLoading}>
                         {/* {isLoading ? <Loader type="ThreeDots" color="#FFFFFF" height={50} width={50} /> : "Entrar"} */}
                         Entrar
                    </Button>
               </form>
               <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
          </Container>
     );
}

export default LoginPage;
