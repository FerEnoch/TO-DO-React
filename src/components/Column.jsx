import { useStore } from '../store';
import { useState } from 'react';
// import { shallow } from 'zustand/shallow';
import './Column.css';
import Task from './Task';
import classNames from 'classnames';


const Column = ({ state }) => {
	const [ insertedTask, setInsertedTask ] = useState('');
	const [ openModal, setOpenModal ] = useState(false);
	const [ drop, setDrop ] = useState(false);
	const addTask = useStore(store => store.addTask);
	const setDraggedTask = useStore(store => store.setDraggedTask);
	const draggedTask = useStore(store => store.draggedTask);
	const tasks = useStore(
		store => store.tasks
		// 	.filter(
		// 		task => task.state === state)
		// , shallow 
	); 
	// No creo que sea del todo buena práctica usar shallow... tendríamos demasiado trabajo innecesario
	// hecho por Zustand, además de extras re-renderings	
	
	const onDropHandler = () => {
		setDrop(false);
		addTaskHandler({ newTaskTitle: draggedTask.title });
		setDraggedTask(null);
	};

	const addTaskHandler = ({ newTaskTitle: title }) => addTask({ title, state });
	
	return (
		<div className={classNames('column', { drop: drop })} 
			onDragOver={ e => {
				e.preventDefault();
				setDrop(true); 
			}}
			onDragLeave={ e => {
				e.preventDefault();
				setDrop(false);
			}}
			onDrop={onDropHandler}
		>
			<div className='titleWrapper'>
				<p>{state}</p>
				<button 
					type='button' 
					onClick={() => setOpenModal(true)}
				>
			New task
				</button>
			</div>
			{
				tasks
					.filter(task => task.state === state)
					.map((task, i) => {
						return (
							<Task
								key={`${i + task.title}`}
								title={task.title} 
								state={task.state}
							/>
						); 
					})
			}
			{
				openModal && (
					<div className='Modal'>
						<div className='modalContent'>
							<input
								value={insertedTask} 
								onChange={(e) => setInsertedTask(e.target.value)} 
							/>
							<button 
								type='button'
								onClick={() => { 							
									addTaskHandler({ newTaskTitle: insertedTask });
									setOpenModal(false);
									setInsertedTask('');
								}}>
						Add task
							</button>
						</div>
					</div>
				)
			}
		</div>
	);
};

export default Column;
