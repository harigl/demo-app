import React from 'react'
import moment from 'moment'

const DateFormater = ({ date }) => {
	date = moment(date)
	return date.isValid() ? (
		<span>
			{moment(date)
				.local()
				.format('Do MMM YYYY LT') || ''}
		</span>
	) : null
}

export default DateFormater
