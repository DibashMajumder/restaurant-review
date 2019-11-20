import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	padding: 10px;
	background-color: tomato;
`;

const Footer = () => (
	<StyledFooter className="footer-distributed">
		<div className="footer-right">
			<a href="www.facebook.com">
				<i className="fa fa-facebook" />
			</a>
			<a href="www.twitter.com">
				<i className="fa fa-twitter" />
			</a>
			<a href="www.linkedin.com">
				<i className="fa fa-linkedin" />
			</a>
			<a href="www.github.com">
				<i className="fa fa-github" />
			</a>
		</div>
		<div className="footer-left">
			<p className="footer-links">
				<a href="#">Home</a>·<a href="#">Blog</a>·
				<a href="#">Pricing</a>·<a href="#">About</a>·
				<a href="#">Faq</a>·<a href="#">Contact</a>
			</p>
			<p> Company Name© 2015 </p>
		</div>
	</StyledFooter>
);

export default Footer;
