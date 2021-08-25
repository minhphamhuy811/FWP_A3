export const getStorageValue = (key, defaultValue) => {
	// getting stored value
	const saved = sessionStorage.getItem(key)
	const initial = JSON.parse(saved)
	return initial || defaultValue
}
