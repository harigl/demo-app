import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select'
import PaginationStyle from './styles/PaginationStyle'

export default function Pagination({ totalPage, selectedPage, onPageChange, isDisabled, itemPerPage }) {
	const [page, setPage] = React.useState(parseInt(selectedPage, 10) || 1)

	const totalOption = totalPage % itemPerPage === 0 ? totalPage / itemPerPage : parseInt(totalPage / itemPerPage, 10) + 1

	let options = []
	for (let i = 1; i <= totalOption; i++) {
		options.push({ value: i, label: String(i) })
	}

	const onPageSelect = (page) => {
		setPage(page.value)
		if (onPageChange) onPageChange(page.value)
	}

	const valueFromId = (options, id) => options.find((o) => o.value === id)

	const customDropDownStyles = {
		container: () => ({
			width: 80,
			marginRight: 5
		}),
		menu: () => ({
			width: 80
		})
	}

	return (
		<div className={PaginationStyle}>
			<div className="d-flex justify-content-end">
				<span className="font-weight-normal mr-2">Page</span>
				<Select styles={customDropDownStyles} isDisabled={isDisabled} value={valueFromId(options, page)} onChange={onPageSelect} options={options} />
				<span className="font-weight-normal">of {totalOption}</span>
				{page !== 1 && (
					<button className="btn btn-rounded mx-2" onClick={() => onPageSelect(valueFromId(options, page - 1))}>
						<FontAwesomeIcon icon="chevron-left" />
					</button>
				)}

				{page !== totalOption && (
					<button className="btn btn-rounded" onClick={() => onPageSelect(valueFromId(options, page + 1))}>
						<FontAwesomeIcon icon="chevron-right" />
					</button>
				)}
			</div>
		</div>
	)
}
