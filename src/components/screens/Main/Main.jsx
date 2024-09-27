import React, { useEffect, useState } from 'react'
import { axiosDB } from '../../../utils/axiosDB'
import Holders from '../../items/Holders/Holders.jsx'
import './Main.css'
export default function Main() {
	const [allHolders, setAllHolders] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axiosDB.get()
				setAllHolders(response.data)
				setLoading(false)
			} catch (error) {
				console.error('Error fetching holders:', error)
			}
		}

		fetchData()
	}, [])

	console.log(allHolders)

	if (loading) {
		return <p>Loading holders...</p>
	}

	return (
		<div className='main'>
			<Holders allHolders={allHolders} />
		</div>
	)
}
