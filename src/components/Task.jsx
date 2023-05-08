import classNames from 'classnames';
import './Task.css';
import { useStore } from '../store';
import trash from '../assets/trash.svg';

const Task = ({ title, state }) => {
	const deleteTask = useStore(store => store.deleteTask);
	const setDraggedTask = useStore(store => store.setDraggedTask);

	const onDragStartHandler = () => setDraggedTask({ title, state });
	const deleteTaskHandler = (title) => () => deleteTask(title);
	
	return (
		<div
			className='task'
			draggable
			onDragStart={onDragStartHandler}
		>
			<div>{title}</div>
			<div className='bottomWrapper'>
				<img
					src={trash}
					className='trashButton'
					onClick={deleteTaskHandler(title)} 
				/>
				<div className={classNames('status', state)}>
					{state}
				</div>
			</div>
		</div>
	);
};

export default Task;
