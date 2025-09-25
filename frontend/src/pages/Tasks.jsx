import { useState } from 'react'
import './Tasks.css'

function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete React Basics',
      dueDate: '2024-03-25',
      priority: 'high',
      completed: false
    },
    {
      id: 2,
      title: 'Practice CSS Grid',
      dueDate: '2024-03-28',
      priority: 'medium',
      completed: false
    }
  ])

  const [newTask, setNewTask] = useState('')

  const addTask = (e) => {
    e.preventDefault()
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          title: newTask,
          dueDate: new Date().toISOString().split('T')[0],
          priority: 'medium',
          completed: false
        }
      ])
      setNewTask('')
    }
  }

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div className="tasks">
      <h1 className="section-title">Task Manager</h1>
      <div className="tasks-container">
        <form onSubmit={addTask} className="add-task-form">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="task-input"
          />
          <button type="submit" className="button">Add Task</button>
        </form>

        <div className="task-list">
          {tasks.map(task => (
            <div key={task.id} className={`task-card ${task.completed ? 'completed' : ''}`}>
              <div className="task-checkbox">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
              </div>
              <div className="task-content">
                <h3>{task.title}</h3>
                <p>Due: {task.dueDate}</p>
              </div>
              <div className={`task-priority ${task.priority}`}>
                {task.priority}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks 