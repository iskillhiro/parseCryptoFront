import React from 'react'
import Holder from '../Holder/Holder'
import './Holders.css'
export default function Holders({ allHolders }) {
	return (
		<div className='holders'>
			<div className='titles'>
				<strong>Wallet</strong>
				<strong>Amount</strong>
				<strong>Percentage</strong>
			</div>
			{allHolders.allHolders
				.slice()
				.reverse()
				.map((holder, index) => (
					<Holder key={index} holder={holder} />
				))}
		</div>
	)
}
