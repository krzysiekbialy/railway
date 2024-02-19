import Link from "next/link";
import styled from "styled-components";

const ErrorContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 50px;
`;

const Heading = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

const StyledLink = styled.a`
  color: #0070f3;
  text-decoration: none;
  font-size: 18px;
`;

const Custom404 = () => {
  return (
    <ErrorContainer>
      <Heading>404 - Page Not Found</Heading>
      <Text>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Text>
      <Link href="/" passHref>
        <StyledLink>Go back home</StyledLink>
      </Link>
    </ErrorContainer>
  );
};

export default Custom404;
