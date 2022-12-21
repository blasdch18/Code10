import Swal from "sweetalert2";
import { destroy } from "../../services";

function TaskCard (props) {

	const { task, updateTask  } = props;

	const statusClass = {
		1:"bg-primary",
		2:"bg-success",
		3:"bg-danger",
	};

	async function confirmUpdate() {
		const res = await createAlert(
			"Estas seguro de confirmar que terminaste la tarea")		

		if (res.isConfirmed) {
			updateTask(task.id);
		}
	}

	async function confirmDestroy(){
		const isConfirmed = await createAlert(
			"Esta seguro de hacer esta accion, ya no hay vuelta atras"
		);
		if( isConfirmed){
			await destroy(task.id);
		}

	};
	

	async function createAlert (text) {
		const res = await Swal.fire({
			title: "Importante",
			text,
			showCancelButton: true,
			showConfirmButton: true,
		});
		return res.isConfirmed;
	}

    return (
        <div 
			className={`mt-3 card p-3 mt-3 shadow-sm bg-opacity-25 ${
				statusClass[task.status]
	        }`}
		>
			<div className="d-flex">
				{task.status === 1 && (
					<span className="me-3">
						<button					
							onClick={confirmUpdate}	
							className="btn btn-sm btn-outline-primary py-0 small opacity-75 checkButton ">
							✓
						</button>
					</span>
				)}	
				<span>{task.name}</span>						
			</div>

			<hr className="border border-muted border-1" />
			{task.status ===1 && (			
				<div className="d-flex justify-content-between">
					<span className="text-muted small">
						{String(task.createdAt)}
					</span>				
					<span>
						<button className="btn btn-sm btn-outline-secondary py-0 small ">
							✎
						</button>
						<button 	
							onClick={confirmDestroy}
							className="btn btn-sm btn-outline-danger py-0 small opacity-75">
							×
						</button>	
					</span>
				</div>
			)}
		</div>
    );
}


export default TaskCard;