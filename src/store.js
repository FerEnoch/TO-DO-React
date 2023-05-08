import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const store = (set, get) => ({
	tasks: [],
	draggedTask: null,
	addTask: newTask => {
		const { tasks, draggedTask } = get();
		let updatedTasks = [ ...tasks, newTask ]; 
		if (draggedTask) {
			const draggedTaskIndex = updatedTasks.findIndex(task => task.title === draggedTask.title);
			updatedTasks = updatedTasks.toSpliced(draggedTaskIndex, 1);
		}
		set( () => ({
			tasks: updatedTasks
		}),
		false,
		'addTask'); 
	},
	deleteTask: taskTitle => {
		const { tasks } = get();
		const deletedTaskIndex = tasks.findIndex(task => task.title === taskTitle);
		const updatedTasks =  tasks.toSpliced(deletedTaskIndex, 1);
		// Alternative: updatedTasks = tasks.filter(task => task.title !== taskTitle);
		set( () => ({ tasks: updatedTasks }), false, 'deleteTask');
	},
	setDraggedTask: draggedTask => {
		set(() => ({ draggedTask: draggedTask }),
			false,
			'setDraggedTask');
	}
});
export const useStore = create(persist(devtools(store), { name: 'tasks' }));