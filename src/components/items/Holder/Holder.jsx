import React, { useState } from 'react'
import { axiosDB } from '../../../utils/axiosDB'
import './Holder.css'
export default function Holder({ holder }) {
	const [walletId, setWalletId] = useState(holder.account._id)
	const [walletDataActive, setWalletDataActive] = useState(false)
	const [walletData, setWalletData] = useState({
		totalTransactions: [],
		totalTokens: [],
		balance: 0,
	})

	const getWalletData = async () => {
		try {
			const response = await axiosDB.get(`/wallet/${walletId}`)
			return response.data
		} catch (e) {
			alert(e)
		}
	}
	const onClick = async () => {
		if (walletDataActive) {
			setWalletDataActive(false)
			return
		}

		const walletRequestData = await getWalletData()
		if (walletRequestData) {
			setWalletData({
				totalTransactions: walletRequestData?.totalTransactions,
				totalTokens: walletRequestData?.totalTokens,
				balance: walletRequestData?.balance,
			})
			setWalletDataActive(true)
		}
	}

	return (
		<div onClick={onClick} className='holder'>
			<div className='holder-data'>
				<p>
					{holder?.account._id.slice(0, 5)}...{holder?.account._id.slice(-5)}
				</p>
				<p>{holder?.amount}</p>
				<p>{holder?.percentage}</p>
			</div>
			{walletData && walletDataActive ? (
				<div className='holder-wallet-data'>
					<p>Total tokens: {walletData.totalTokens?.length}</p>
					<p>Total tranactions: {walletData.totalTransactions?.length}</p>
					<p>Wallet balance: {walletData?.balance}</p>
				</div>
			) : null}
		</div>
	)
}
