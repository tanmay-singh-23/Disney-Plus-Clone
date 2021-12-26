import React from "react";
import styled from "styled-components";

function Login() {
	return (
		<Container>
			<CTA>
				<CTALogoOne src="/images/cta-logo-one.svg"></CTALogoOne>
				<SignUp>Get All There</SignUp>
				<Description>
					No Way Home explores the concept of the multiverse and ties the MCU to
					past Spider-Man film series, with numerous actors including previous
					Spider-Man actors.
				</Description>
				<CTALogoTwo src="/images/cta-logo-two.png"></CTALogoTwo>
			</CTA>
		</Container>
	);
}

export default Login;

const Container = styled.div`
	position: relative;
	height: calc(100vh - 70px);
	display: flex;
	align-items: top;
	justify-content: center;

	&:before {
		position: absolute;
		content: "";
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-image: url("/images/login-background.jpg");
		background-position: top;
		background-repeat: no-repeat;
		background-size: cover;
		opacity: 0.7;
		z-index: -1;
	}
`;

const CTA = styled.div`
	max-width: 650px;
	padding: 80px 40px;
	width: 90%;
	margin-top: 6.55rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
	width: 100%;
	background-color: #0063e5;
	font-weight: bold;
	text-transform: uppercase;
	padding: 17px 0;
	color: #f9f9f9;
	border-radius: 4px;
	text-align: center;
	font-size: 19px;
	cursor: pointer;
	transition: all 250ms;
	letter-spacing: 1.5px;
	margin-top: 8px;
	margin-bottom: 12px;

	&:hover {
		background: #0483ee;
	}
`;

const Description = styled.p`
	text-align: center;
	font-size: 11px;
	letter-spacing: 1.5px;
	line-height: 1.5;
`;

const CTALogoTwo = styled.img`
	width: 90%;
`;
