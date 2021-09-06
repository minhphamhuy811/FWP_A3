import React from 'react'

export default function generateYear() {
	const arr = []
	const start = 1910
	const end = new Date().getFullYear()
	for (let i = end; i >= start; i--) {
		arr.push(<option value={i}>{i}</option>)
	}
	return arr
}
