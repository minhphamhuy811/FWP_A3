import React from 'react'
import {Link} from 'react-router-dom'
import { useSessionStorage } from '../middleware/UseStorage'
import patient from '../controllers/patient.controller'

export default function SymptomStatus() {
	const [cough, setCough] = useSessionStorage('cough',false)
	const [fever, setFever] = useSessionStorage('fever',38)
	const [headache, setHeadache] = useSessionStorage('headache',false)
	const [soreThroat, setSoreThroat] = useSessionStorage('soreThroat',false)
	const [stuffNose, setStuffNose] = useSessionStorage('stuffNose',false)
	const [difficultyBreathing, setDifficultyBreathing] = useSessionStorage('difficultyBreathing',false)
	const [chestache, setChestache] = useSessionStorage('chestache',false)
	const [muscleache, setMuscleache] = useSessionStorage('muscleache',false)
	const [ageusia, setAgeusia] = useSessionStorage('ageusia',false)
	const [anosmia, setAnosmia] = useSessionStorage('anosmia',false)
	const [nausea, setNausea] = useSessionStorage('nausea',false)
	const [stomachache, setStomachache] = useSessionStorage('stomachache',false)

	function resetSymptomStatus() {
		setCough(false)
		setFever(38)
		setHeadache(false)
		setSoreThroat(false)
		setStuffNose(false)
		setDifficultyBreathing(false)
		setChestache(false)
		setMuscleache(false)
		setAgeusia(false)
		setAnosmia(false)
		setNausea(false)
		setStomachache(false)
		sessionStorage.clear()
	}

	function sendAndResetForm() {
		patient.post()
		sessionStorage.clear()
	}

	return(
		<div className="flex flex-col bg-gray-100">
			<div className="border-blue-900 px-4 mb-4 min-h-screen relative w-full max-w-xl mx-auto">
				<div className="bg-white border border-transparent rounded-2xl p-4 mb-4">
					<div className="text-center">
						<h1 className="font-bold text-4xl">KHAI BÁO SỨC KHỎE</h1>
					</div>
					<div className="flex flex-col my-4 justify-center items-center ">
						<h3 className="font-bold">Các dấu hiệu, biểu hiện nhiễm SARS-CoV-2</h3>
						<form method="post" action="/">

							<div className="flex flex-col">
								<p className="font-light my-2">1. Ho <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="cough" value={cough} onChange={() => setCough(true)} checked={cough}/> Có	</label>
									<label><input className="style-radio radio-option" type="radio" name="cough" value={cough} onChange={() => setCough(false)} checked={!cough}/> Không	</label>
								</div>
							</div>

							<div className="flex flex-col">
								<p className="font-light my-2">2. Sốt (trên 37.5 độ C) <a className="text-red-600 italic">(*)</a></p>
								<input type="number" value={fever} className="rounded-full border-0 focus:ring-0 pr-4 font-bold" readOnly="true"/>
								<input type="range" value={fever} placeholder="nhập nhiệt độ của bạn" min="34" max="42" step="0.5" onChange={event => setFever(event.target.value)} />
							</div>

							<div className="flex flex-col">
								<p className="font-light my-2">3. Đau đầu <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="headache-option" value={headache} onChange={() => setHeadache(true)} checked={headache}/> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="headache-option" value={headache} onChange={() => setHeadache(false)} checked={!headache}/> Không	</label>
								</div>
							</div>

							<div className="flex flex-col">
								<p className="font-light my-2">4. Đau họng, rát họng <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="sorethroat-option" value={soreThroat} onChange={() => setSoreThroat(true)} checked={soreThroat}/> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="sorethroat-option" value={soreThroat} onChange={() => setSoreThroat(false)} checked={!soreThroat}/> Không	</label>
								</div>
							</div>

							<div className="flex flex-col">
								<p className="font-light my-2">5. Sổ mũi, chảy mũi, ngạt mũi <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="nasal-option" value={stuffNose}  onChange={() => setStuffNose(true)} checked={stuffNose}/> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="nasal-option" value={stuffNose} onChange={() => setStuffNose(false)} checked={!stuffNose}/> Không	</label>
								</div>
							</div>

							<div className="flex flex-col">
								<p className="font-light my-2">6. Khó thở <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="sob-option" value={difficultyBreathing} onChange={() => setDifficultyBreathing(true)} checked={difficultyBreathing}/> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="sob-option" value={difficultyBreathing} onChange={() => setDifficultyBreathing(false)} checked={!difficultyBreathing}/> Không	</label>
								</div>
							</div>
							<div className="flex flex-col">
								<p className="font-light my-2">7. Đau ngực, tức ngực <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="chestpain-option" value={chestache}  onChange={() => setChestache(true)} checked={chestache}/> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="chestpain-option" value={chestache} onChange={() => setChestache(false)} checked={!chestache}/> Không	</label>
								</div>
							</div>
							<div className="flex flex-col">
								<p className="font-light my-2">8. Đau mỏi người, đau cơ <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="malaise-option" value={muscleache}  onChange={() => setMuscleache(true)} checked={muscleache}/> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="malaise-option" value={muscleache} onChange={() => setMuscleache(false)} checked={!muscleache}/> Không	</label>
								</div>
							</div>
							<div className="flex flex-col">
								<p className="font-light my-2">9. Mất vị giác <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="taste-option" value={ageusia} onChange={() => setAgeusia(true)} checked={ageusia}/> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="taste-option" value={ageusia} onChange={() => setAgeusia(false)} checked={!ageusia}/> Không	</label>
								</div>
							</div>
							<div className="flex flex-col">
								<p className="font-light my-2">10. Mất khứu giác <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="smell-option" value={anosmia} onChange={() => setAnosmia(true)} checked={anosmia}/> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="smell-option" value={anosmia} onChange={() => setAnosmia(false)} checked={!anosmia}/> Không	</label>
								</div>
							</div>
							<div className="flex flex-col">
								<p className="font-light my-2">11. Buồn nôn <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="nausea-option" value={nausea} onChange={() => setNausea(true)} checked={nausea}/> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="nausea-option" value={nausea} onChange={() => setNausea(false)} checked={!nausea}/> Không	</label>
								</div>
							</div>
							<div className="flex flex-col">
								<p className="font-light my-2">12. Đau bụng, Tiêu chảy <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="gastro-option" value={stomachache} onChange={() => setStomachache(true)} checked={stomachache}/> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="gastro-option" value={stomachache} onChange={() => setStomachache(false)} checked={!stomachache}/> Không	</label>
								</div>
							</div>
						</form>
					</div>

				</div>
				<div className="bg-white border border-transparent rounded-2xl p-2 px- ">
					<div className="flex justify-around items-center text-center">
						<Link className="group flex justify-center border border-transparent rounded-xl text-white bg-secondary hover:bg-red-900 focus:outline-none p-4 mr-2 text-white font-bold" style={{borderRadius: '15px'}} onClick={() => resetSymptomStatus()}>XÓA</Link>
						<Link to={'/symptom-info'} className="group flex justify-center border border-transparent bg-yellow-400 py-4 w-1/2 rounded-l-xl text-white hover:bg-yellow-800 focus:outline-none font-bold">QUAY LẠI</Link>
						<Link to={'/symptom-info'} className="group flex justify-center border border-transparent bg-green-600 p-4 w-1/2 rounded-r-xl hover:bg-green-900 focus:outline-none text-white font-bold" onClick={() => sendAndResetForm()}>HOÀN TẤT</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
