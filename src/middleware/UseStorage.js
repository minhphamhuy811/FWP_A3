import { useState, useEffect } from 'react'
const { getStorageValue } = require('./GetStorage')

export const useSessionStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue)
	})

	useEffect(() => {
		// storing input name
		sessionStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
}


