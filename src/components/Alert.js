import React from 'react'

export function WrongInput() {
	return(
		<a className="text-red-600 italic text-sm">    Vui lòng nhập lại</a>
	)
}

export function CorrectInput() {
	return(
		<a className="text-green-600 italic text-sm">   OK</a>
	)
}