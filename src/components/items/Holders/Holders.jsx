import React, { useState } from 'react'
import Holder from '../Holder/Holder'
import './Holders.css'

export default function Holders({ allHolders }) {
	const [sortField, setSortField] = useState('amount')
	const [sortOrder, setSortOrder] = useState('desc')

	const handleSort = field => {
		const order = sortField === field && sortOrder === 'desc' ? 'asc' : 'desc'
		setSortField(field)
		setSortOrder(order)
	}

	const sortedHolders = allHolders.allHolders.slice().sort((a, b) => {
		if (sortOrder === 'asc') {
			return a[sortField] > b[sortField] ? 1 : -1
		} else {
			return a[sortField] < b[sortField] ? 1 : -1
		}
	})

	return (
		<div className='holders'>
			<div className='titles'>
				<strong>Wallet</strong>
				<strong className='sort' onClick={() => handleSort('amount')}>
					Amount
				</strong>
				<strong className='sort' onClick={() => handleSort('percentage')}>
					Percentage
				</strong>
				<strong className='sort' onClick={() => handleSort('tokens')}>
					Tokens
				</strong>
				<strong className='sort' onClick={() => handleSort('balance')}>
					Balance
				</strong>
			</div>
			{sortedHolders.map((holder, index) => (
				<Holder key={index} holder={holder} />
			))}
		</div>
	)
}
