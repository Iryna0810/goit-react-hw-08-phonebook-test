import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Link } from "./SharedLayout.styled";
import { Container, Flex, VStack } from "@chakra-ui/react"



export const SharedLayout = () => {
    return (
        <Container maxW="80vw">
            <Header>
                <nav>
                    <Link to="/" end>Contacts</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
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