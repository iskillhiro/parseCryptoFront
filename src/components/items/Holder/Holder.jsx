import React from 'react'
import './Holder.css'
export default function Holder({ holder }) {
	return (
		<div className='holder'>
			<div className='holder-data'>
				<p>
					{holder?.account._id.slice(0, 5)}...{holder?.account._id.slice(-5)}
				</p>
				<p>{holder?.amount.toFixed(2)}</p>
				<p>{holder?.percentage.toFixed(2)}</p>
				<p>{holder?.balance.toFixed(2)}</p>
			</div>
		</div>
	)
}
