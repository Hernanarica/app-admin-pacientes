function Paciente({ id, nombre, email, fecha, sintomas, propietario, setPaciente }) {
	const handleEditar = () => {
		setPaciente({ id, nombre, email, fecha, sintomas, propietario });
	};
	
	return (
		<div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
			<p className="font-bold mb-3 text-gray-700 uppercase">Nombre: { nombre } <span className="font-normal normal-case"></span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">Propietario: { propietario } <span className="font-normal normal-case"></span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">Email: { email } <span className="font-normal normal-case"></span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: { fecha } <span className="font-normal normal-case"></span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: { sintomas } <span className="font-normal normal-case"></span>
			</p>
			<div className="flex justify-between mt-10">
				<button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" onClick={ handleEditar }>Editar</button>
				<button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">Eliminar</button>
			</div>
		</div>
	);
}

export default Paciente;