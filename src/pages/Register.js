import '../index.css'
import React, {useState} from 'react'
import logobyt from '../assets/logo_byt.svg'
import logoembvn from '../assets/logo_chxhcnvn.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Register () {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const setAdmin = async () => {
		await axios.post('http://localhost:3307/register', {
			email,
			password
		})
	}

	const passwordVerify = () => {
		if (password === confirmPassword){
			console.log(setAdmin())
		}
		else {
			window.alert('Your password is incorrect!')
		}
	}

	return (
		<div className="images min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full bg-white py-6 px-4 rounded-2xl space-y-8">
				<div>
					<div className="flex justify-center items-center gap-x-2">
						<img className="h-12 w-auto" src={logoembvn} alt="logoembvn"/>
						<img className="h-12 w-auto" src={logobyt} alt="logobyt"/>
					</div>
					<div>
						<h2 className="mt-6 text-center text-xl font-bold text-gray-900">HỆ THỐNG QUẢN LÝ ĐƠN KHAI BÁO Y TẾ</h2>
						<p className="mt-2 text-center text-sm text-gray-600">
							Đăng Ký Tài Khoản Quản Trị Viên
						</p>
					</div>
				</div>
				<form className="mt-8 space-y-6">
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="rounded -space-y-px">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Địa chỉ Email
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-xl focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-sm md:text-md"
								placeholder="Địa chỉ Email"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
                Mật khẩu
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="mt-2 appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-xl focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-sm md:text-md"
								placeholder="Mật khẩu"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Xác Nhận Mật khẩu
							</label>
							<input
								id="confPassword"
								name="confPassword"
								type="password"
								autoComplete="current-password"
								required
								className="mt-2 appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-xl focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-sm md:text-md"
								placeholder="Xác Nhận Mật khẩu"
								value={confirmPassword}
								onChange={e => setConfirmPassword(e.target.value)}
							/>
						</div>
					</div>
					<div className="flex gap-x-2">
						<Link to={'/admin-login'} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-secondary hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900">
							Quay lại
						</Link>
						<Link
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-primary hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900"
							onClick={passwordVerify}>
							Đăng ký
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}
