import React from 'react';
import Task from './Task';

const TaskList = ({taskList}) => {
    return (
        <div>
            {taskList.map(task => {
                return (
                    <Task task={task} key={task.id}/>
                )
            })}
        </div>
    );
};

export default TaskList;