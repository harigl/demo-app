import { css } from 'react-emotion'

const SignInStyle = css`
	.login-container {
		background: #12a1f3;
		border: 1px solid #12a1f3;
		border-radius: 5px;
	}

	.login-header {
		width: 100%;
		margin: 0 auto;
		text-align: center;
	}

	img {
		max-width: 50%;
	}

	h1 {
		color: #ffffff;
		font-size: 1.8em;
	}

	input {
		border-left: none;
	}

	button,
	input {
		height: 50px;
	}

	button {
		width: 100%;
		border: none;
		min-height: 40px;
		font-weight: bold;
	}

	.input-group-text {
		border: none;
	}

	.input-group-text,
	button {
		background-color: #ffc118;
		color: #ffffff;
	}

	.invalid-feedback {
		color: #721c24;
		background-color: #f8d7da;
		padding: 2.5%;
	}
`

export default SignInStyle
