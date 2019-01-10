const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];

const someResults = tasks.reduce((acc, task) => {
    const type = task.type;
    const title = task.title;
    const category = task.category;

    if (category === 'Frontend') {
        acc.frontendTime += task.timeSpent;
    }

    if (type === 'bug') {
        acc.bugTime += task.timeSpent;
    }

    if (title.includes('UI')) {
        acc.UITasks++;
    }

    if (category in acc.categories) {
        acc.categories[category]++;
    } else {
        acc.categories[category] = 1;
    }

    return acc;
}, {
    frontendTime: 0,
    bugTime: 0,
    categories: {},
    UITasks: 0
});

const bigTasks = tasks.filter(task => task.timeSpent > 4).map(task => {
    return {title: task.title, category: task.category}
});


console.log('Time spent for frontend =', someResults.frontendTime);
console.log('Time spent for bugs =', someResults.bugTime);
console.log('UI tasks count =', someResults.UITasks);
console.log('Tasks count in categories =', someResults.categories);
console.log('Tasks with time spent more then 4 =', bigTasks);