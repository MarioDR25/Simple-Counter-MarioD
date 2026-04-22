//create your first component

const Home = (props) => {
	return (
		<div className="text-center h-100 d-flex flex-column justify-content-center align-items-center m-auto bg-secondary gap-4">
			<SecondsCounter {...props} />

			<div className="d-flex gap-5">

				<fieldset className="border p-4 rounded shadow-sm">
					<legend className="float-none w-auto px-3 fs-5 fw-bold text-white">Cronómetro</legend>
					<button className="btn btn-success px-4" type="button" onClick={props.start}>Iniciar</button>
				</fieldset>

				<fieldset className="border p-4 rounded shadow-sm">
					<legend className="float-none w-auto px-3 fs-5 fw-bold text-white">Controles</legend>
					<div className="d-flex gap-2">
						<button className="btn btn-warning px-4 text-white" type="button" onClick={props.pause}>Pausar</button>
						<button className="btn btn-info px-4 text-white" type="button" onClick={props.restart}>Reiniciar</button>
					</div>
				</fieldset>

				<fieldset className="border p-4 rounded shadow-sm">
					<legend className="float-none w-auto px-3 fs-5 fw-bold text-white">Temporizador</legend>
					<div className="input-group">
						<input id="inputTime" type="text" className="form-control" placeholder="ej 3434 seg" aria-label="Time input" />
						<button className="btn btn-danger" type="button "
							onClick={() => {
								let inputValue = document.getElementById("inputTime");
								const value = inputValue.value;
								props.onSetTime(value);
								inputValue.value = ""
							}}>Establecer</button>
					</div>
				</fieldset>
			</div>
		</div>
	);
};



function SecondsCounter(props) {

	return (
		<div className="w-75 d-flex text-white gap-1 bg-dark justify-content-center align-items-center h-25 rounded-5 " >

			<p className="bg-danger p-4 rounded-2 me-3"><i className="fa-regular fa-clock fs-1" style={{ color: "#fff" }}></i></p>
			<p className="bg-secondary p-4 rounded-2">{props.hor}</p>
			<p>:</p>
			<p className="bg-secondary p-4 rounded-2">{props.min}</p>
			<p>:</p>
			<p className="bg-secondary p-4 rounded-2">{props.seg}</p>
		</div>
	)
}

export default Home;



