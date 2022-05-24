import { useEffect, useState } from "react";
import Error from "./Error";

function Formulario({ setPacientes, paciente }) {
	const [ nombre, setNombre ]           = useState('');
	const [ propietario, serPropietario ] = useState('');
	const [ email, setEmail ]             = useState('');
	const [ fecha, setFecha ]             = useState('');
	const [ sintomas, setSintomas ]       = useState('');
	const [ error, setError ]             = useState(false);
	
	useEffect(() => {
		if (Object.keys(paciente).length > 0) {
			setNombre(paciente.nombre ?? '');
			serPropietario(paciente.propietario ?? '');
			setEmail(paciente.email ?? '');
			setFecha(paciente.fecha ?? '');
			setSintomas(paciente.sintomas ?? '');
		}
	}, [ paciente ]);
	
	const handleSubmit = e => {
		e.preventDefault();
		
		if ([ nombre, propietario, email, fecha, sintomas ].includes('')) {
			setError(true);
			
			console.log('Hay al menos 1 campo vacio');
		} else {
			setError(false);
			
			console.log('Todos llenos');
		}
		
		const generarID = () => {
			const fecha  = Date.now();
			const random = Math.random().toString(36).substring(2);
			
			return random + fecha;
		};
		
		const newPaciente = {
			id: generarID(),
			nombre,
			propietario,
			email,
			fecha,
			sintomas
		};
		
		setPacientes(oldState => [ ...oldState, newPaciente ]);
		
		setNombre('');
		serPropietario('');
		setEmail('');
		setFecha('');
		setSintomas('');
	};
	
	// @formatter:off
	return (
		<div className="md:w-1/2 lg:w-2/5 mx-5">
			<h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
			<p className="text-lg mt-5 text-center mb-10">
				Añade Pacientes y { '' } <span className="text-indigo-600 font-bold ">Administralos</span>
			</p>
			<form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={ handleSubmit }>
				{ error && <Error>Faltan completar campos</Error> }
				<div className="mb-5">
					<label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
						Nombre Mascota
					</label>
					<input id="mascota"
					       type="text"
					       placeholder="Nombre de la Mascota"
					       className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					       value={ nombre }
					       onChange={ (e) => setNombre(e.target.value) }
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
						Nombre Propietario
					</label>
					<input id="propietario"
					       type="text"
					       placeholder="Nombre del Propietario"
					       className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					       value={ propietario }
					       onChange={ (e) => serPropietario(e.target.value) }
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="email" className="block text-gray-700 uppercase font-bold">
						Email
					</label>
					<input id="email"
					       type="email"
					       placeholder="Email Contacto Propietario"
					       className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					       value={ email }
					       onChange={ (e) => setEmail(e.target.value) }
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
						Alta
					</label>
					<input id="alta"
					       type="date"
					       className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					       value={ fecha }
					       onChange={ (e) => setFecha(e.target.value) }
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
						Síntomas
					</label>
					<textarea id="sintomas"
					          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					          placeholder="Describe los Síntomas"
					          value={ sintomas }
					          onChange={ (e) => setSintomas(e.target.value) }
					/>
				</div>
				<input type="submit"
				       value={ paciente.id ? 'Editar paciente' : 'Agregar Paciente' }
				       className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" />
			</form>
		</div>
	);
}

export default Formulario;