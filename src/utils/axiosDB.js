import axios from 'axios'
import { API_URL } from '../data/config'

export const axiosDB = axios.create({
	baseURL: API_URL,
})
