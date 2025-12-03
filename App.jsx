import { useState } from "react"

export default function App() {
	const [status, setStatus] = useState("")
	const [history, setHistory] = useState([])

	const handlePonto = (tipo) => {
		const registro = {
			tipo,
			hora: new Date().toLocaleTimeString(),
			data: new Date().toLocaleDateString(),
		}

		setHistory([registro, ...history])
		setStatus(`Ponto registrado: ${tipo}`)

		setTimeout(() => setStatus(""), 2000)
	}

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-6 gap-6 bg-gray-100 text-center">
			<h1 className="text-2xl font-bold">
				Registro de Ponto - Econ Construtora
			</h1>

			<div className="flex gap-4">
				<button
					className="px-6 py-3 rounded-2xl shadow-lg bg-green-500 text-white"
					onClick={() => handlePonto("Entrada")}
				>
					Registrar Entrada
				</button>

				<button
					className="px-6 py-3 rounded-2xl shadow-lg bg-red-500 text-white"
					onClick={() => handlePonto("Saída")}
				>
					Registrar Saída
				</button>
			</div>

			{status && <p className="text-lg font-medium text-blue-600">{status}</p>}

			<div className="w-full max-w-md mt-4 bg-white p-4 rounded-xl shadow-md">
				<h2 className="font-bold mb-2">Histórico</h2>
				<ul className="space-y-2">
					{history.map((item, index) => (
						<li key={index} className="text-sm border-b pb-1">
							{item.data} - {item.hora} | {item.tipo}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
