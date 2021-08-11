import './index.css'
import React from 'react'
// import rmitlogo from './assets/rmitlogo.svg'
import logobyt from './assets/logo_byt.svg'
import logoembvn from './assets/logo_chxhcnvn.svg'
import {Link} from 'react-router-dom'
function Login () {
	return (
		<div className="min-h-screen flex items-center justify-center bg-transparent py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<div className="flex justify-center items-center gap-x-2">
						<img className="h-12 w-auto" src={logoembvn} alt="logoembvn"/>
						<img className="h-12 w-auto" src={logobyt} alt="logobyt"/>
					</div>
					<div>
						<h2 className="mt-6 text-center text-xl font-bold text-gray-900">HỆ THỐNG QUẢN LÝ ĐƠN KHAI BÁO Y TẾ</h2>
						<p className="mt-2 text-center text-sm text-gray-600">
            Cổng Đăng Nhập
						</p>
					</div>
				</div>
				<form className="mt-8 space-y-6" action="#" method="POST">
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="rounded -space-y-px">
						<div>
							<label htmlFor="email-address" className="sr-only">
                Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-xl focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
                Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="mt-2 appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-xl focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
								placeholder="Password"
							/>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 text-primary focus:ring-transparent border-gray-300 rounded"
							/>
							<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
               Ghi nhớ người dùng
							</label>
						</div>

						<div className="text-sm">
							<a href="#" className="font-medium text-primary hover:text-red-700">
                Quên mật khẩu?
							</a>
						</div>
					</div>
					<div className="flex gap-x-2">
						<Link to={'/'} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-secondary hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900">
							Quay lại
						</Link>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-primary hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900"
						>
             Đăng nhập
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
