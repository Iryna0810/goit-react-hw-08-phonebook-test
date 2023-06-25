import { Button, Container, FormLabel, Input} from "@chakra-ui/react"
import { useState } from "react";
import {FormWrapper} from '../components/styled'
import { useDispatch } from "react-redux";
import { login } from "components/redux/auth/auth-operation";


const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default: return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
        dispatch(login({ email, password }))
        setEmail('');
        setPassword('');
    }

    return (
        <Container p={10}>
            <FormWrapper action="" onSubmit={handleSubmit}>
                 {/* <FormLabel >
                    Name
                </FormLabel>
                <Input
                    placeholder="Input your name"
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                    name="name"
                    value={name}
                    onChange={handleChange}
                ></Input> */}
                <FormLabel mt={10}>
                    Email
                </FormLabel>
                <Input
                    placeholder="Input your email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                ></Input>
                <FormLabel mt={10}>
                    Password
                </FormLabel>
                <Input
                    placeholder="Input your password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                ></Input>
            <Button type="submit" size='lg' w="full" mt={10}>Login</Button>
            </FormWrapper>
        </Container>
    )
};

export default Login 