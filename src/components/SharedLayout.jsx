import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Link } from "./SharedLayout.styled";
import { Container, Flex, VStack } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import {selectIsLoggedIn, selectUserName} from '../components/redux/selectors'



export const SharedLayout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const name = useSelector(selectUserName)

    return (
        <Container maxW="80vw">
            <Header>
                <nav>
                    <Flex alignItems="flex-end" justifyContent="center">
                        <Link to="/" end>Contacts</Link>
                        {!isLoggedIn
                        ? <>
                         <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                        </>
                        : <Link to="/userMenu">
                            <div style={{
                                display: "flex",
                                gap: '20px',
                            }
                    }>
                            <p>{name}</p>       
                            <button>Logout</button>
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