import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header, Link } from "./SharedLayout.styled";
import { Container, Flex, VStack } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import {selectIsLoggedIn, selectUserName} from '../components/redux/selectors'
import { selectToken } from "../components/redux/selectors";
import { logout } from "./redux/auth/auth-thunk";
import { dellToken } from "services/auth";


export const SharedLayout = () => {
    const isAuth = useSelector(selectToken)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const name = useSelector(selectUserName)
    const handleLogout = () => {
        dispatch(logout())
        dellToken()
        navigate('/login')
        console.log(name)
    }

    return (
        <Container maxW="80vw">
            <Header>
                <nav>
                    <Flex alignItems="flex-end" justifyContent="center">
                        <Link to="/" end>Contacts</Link>
                        {!isAuth
                        ? <>
                         <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                        </>
                        : <Link to="/">
                            <div style={{
                                display: "flex",
                                gap: '20px',
                            }
                    }>
                            <p>Welcome {name}</p>       
                                    <button onClick={() =>{handleLogout()}}
                                    >Logout</button>
                    </div>
                        
                        </Link>
                    }                   
                        </Flex>
                </nav>
            </Header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Container maxW="container.lg" p={10}>
            <Flex py={10}>
                        <VStack
                            w="full"
                    h="full" p={10}
                    spacing={10}
                    
                bg="blue.50"
                >
        <Outlet />
            </VStack>
            </Flex>
            
        </Container>

        </Suspense>   
        </Container>

    )
}