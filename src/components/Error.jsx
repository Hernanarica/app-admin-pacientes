function Error({ children }) {
	return (
		<div className="bg-red-200 py-2 text-center rounded">
			<p className="font-medium text-red-800">{ children }</p>
		</div>
	);
}

export default Error;