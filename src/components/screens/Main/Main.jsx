import React, { useEffect, useState } from 'react'
import { axiosDB } from '../../../utils/axiosDB'
import Holders from '../../items/Holders/Holders.jsx'
import './Main.css'

export default function Main() {
	const [allHolders, setAllHolders] = useState([])
	const [loading, setLoading] = useState(true)
	const [timeElapsed, setTimeElapsed] = useState(0) // Timer state

	useEffect(() => {
		let timer

		if (loading) {
			// Start the timer when loading starts
			timer = setInterval(() => {
				setTimeElapsed(prevTime => prevTime + 1)
			}, 1000)
		}

		const fetchData = async () => {
			try {
				const response = await axiosDB.get()
				setAllHolders(response.data)
				setLoading(false)
			} catch (error) {
				console.error('Error fetching holders:', error)
			} finally {
				clearInterval(timer) // Stop the timer when loading is complete
			}
		}

		fetchData()

		// Cleanup the timer when the component is unmounted
		return () => {
			clearInterval(timer)
		}
	}, [loading])

	if (loading) {
		return (
			<>
				<div className='loader'></div>
				<p
					style={{
						color: 'white',
						padding: '40px',
						width: 'max-content',
						textWrap: 'nowrap',
						margin: 'auto',
					}}
				>
					{timeElapsed} seconds
				</p>
			</>
		)
	}

	return (
		<div className='main'>
			<Holders allHolders={allHolders} />
		</div>
	)
}
