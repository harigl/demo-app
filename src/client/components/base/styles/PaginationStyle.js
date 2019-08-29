import { css } from 'react-emotion'

const PaginationStyle = css`
	select {
		width: 50px;
		padding-left: 7px;
		padding-right: 0;
	}

	span {
		line-height: 36px;
		font-size: 0.75em;
		color: #757575;
	}

	.btn-rounded {
		background-color: #efefef;
		border: 1px solid #efefef;
		border-radius: 30px;
		transition: color 0.2s linear;
	}
`

export default PaginationStyle
