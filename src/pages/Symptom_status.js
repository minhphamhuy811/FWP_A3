import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Symptom_status() {
	const [cough, setCough] = useState('')
	const [fever, setFever] = useState('')
	const [headache, setHeadache] = useState('')
	const [soreThroat, setSoreThroat] = useState('')
	const [stuffNose, setStuffNose] = useState('')
	const [difficultyBreathing, setDifficultyBreathing] = useState('')
	const [chestache, setChestache] = useState('')
	const [muscleache, setMuscleache] = useState('')
	const [ageusia, setAgeusia] = useState('')
	const [anosmia, setAnosmia] = useState('')
	const [nausea, setNausea] = useState('')
	const [stomachache, setStomachache] = useState('')

	function resetSymptomStatus() {
		setCough(null)
		setFever(null)
		setHeadache(null)
		setSoreThroat(null)
		setStuffNose(null)
		setDifficultyBreathing(null)
		setChestache(null)
		setMuscleache(null)
		setAgeusia(null)
		setAnosmia(null)
		setNausea(null)
		setStomachache(null)
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
									<label><input className="style-radio radio-option" type="radio" name="cough-option" value={cough} required='true' onSelect={() => setCough(true)} /> Có	</label>
									<label><input className="style-radio radio-option" type="radio" name="cough-option" value={cough} onSelect={() => setCough(false)}/> Không	</label>
								</div>
							</div>

							<div className="flex flex-col">
								<p className="font-light my-2">2. Sốt (trên 37.5 độ C) <a className="text-red-600 italic">(*)</a></p>
								<input type="number" value={fever} className="rounded-full border-0 focus:ring-0 pr-4 font-bold" readOnly="true"/>
								<input type="range" placeholder="nhập nhiệt độ của bạn" min="34" max="42" step="0.5" required='true' onChange={event => setFever(event.target.value)} />
							</div>

							<div className="flex flex-col">
								<p className="font-light my-2">3. Đau đầu <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="headache-option" value={headache} onSelect={() => setHeadache(true)} /> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="headache-option" value={headache} onSelect={() => setHeadache(false)} /> Không	</label>
								</div>
							</div>

							<div className="flex flex-col">
								<p className="font-light my-2">4. Đau họng, rát họng <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="sorethroat-option" value={soreThroat} onSelect={() => setSoreThroat(true)} /> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="sorethroat-option" value={soreThroat} onSelect={() => setSoreThroat(false)}/> Không	</label>
								</div>
							</div>

							<div className="flex flex-col">
								<p className="font-light my-2">5. Sổ mũi, chảy mũi, ngạt mũi <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="nasal-option" value={stuffNose}  onSelect={() => setStuffNose(true)} /> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="nasal-option" value={stuffNose} onSelect={() => setStuffNose(false)}/> Không	</label>
								</div>
							</div>

							<div className="flex flex-col">
								<p className="font-light my-2">6. Khó thở <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="sob-option" value={difficultyBreathing} onSelect={() => setDifficultyBreathing(true)} /> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="sob-option" value={difficultyBreathing} onSelect={() => setDifficultyBreathing(false)}/> Không	</label>
								</div>
							</div>
							<div className="flex flex-col">
								<p className="font-light my-2">7. Đau ngực, tức ngực <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="chestpain-option" value={chestache}  onSelect={() => setChestache(true)} /> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="chestpain-option" value={chestache} onSelect={() => setChestache(false)} /> Không	</label>
								</div>
							</div>
							<div className="flex flex-col">
								<p className="font-light my-2">8. Đau mỏi người, đau cơ <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="malaise-option" value={muscleache}  onSelect={() => setMuscleache(true)} /> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="malaise-option" value={muscleache} onSelect={() => setMuscleache(false)}/> Không	</label>
								</div>
							</div>
							<div className="flex flex-col">
								<p className="font-light my-2">9. Mất vị giác <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="taste-option" value={ageusia} onSelect={() => setAgeusia(true)} /> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="taste-option" value={ageusia} onSelect={() => setAgeusia(false)}/> Không	</label>
								</div>
							</div>
							<div className="flex flex-col">
								<p className="font-light my-2">10. Mất khứu giác <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="smell-option" value={anosmia} onSelect={() => setAnosmia(true)} /> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="smell-option" value={anosmia} onSelect={() => setAnosmia(false)}/> Không	</label>
								</div>
							</div>
							<div className="flex flex-col">
								<p className="font-light my-2">11. Buồn nôn <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="nausea-option" value={nausea} onSelect={() => setNausea(true)} /> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="nausea-option" value={nausea} onSelect={() => setNausea(false)}/> Không	</label>
								</div>
							</div>
							<div className="flex flex-col">
								<p className="font-light my-2">12. Đau bụng, Tiêu chảy <a className="text-red-600 italic">(*)</a></p>
								<div>
									<label><input className="style-radio radio-option" type="radio" name="gastro-option" value={stomachache} onSelect={() => setStomachache(true)} /> Có	</label>
									<label><input className=" style-radio radio-option" type="radio" name="gastro-option" value={stomachache} onSelect={() => setStomachache(false)}/> Không	</label>
								</div>
							</div>
						</form>
					</div>

				</div>
				<div className="bg-white border border-transparent rounded-2xl p-2">
					<div className="flex justify-around items-center text-center">
						<Link className="group flex justify-center border border-transparent rounded-xl text-white bg-secondary hover:bg-red-900 focus:outline-none p-4 mr-2 text-white font-bold" style={{borderRadius: '15px'}} onClick={() => resetSymptomStatus()}>XÓA</Link>
						<Link to={'/symptom-info'} className="group flex justify-center border border-transparent bg-yellow-400 py-4 w-1/2 rounded-l-xl text-white hover:bg-yellow-800 focus:outline-none font-bold">QUAY LẠI</Link>
						<button className="group flex justify-center border border-transparent bg-green-600 p-4 w-1/2 rounded-r-xl hover:bg-green-900 focus:outline-none text-white font-bold">HOÀN TẤT</button>
					</div>
				</div>
			</div>
		</div>
	)
}
