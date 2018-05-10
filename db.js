{
  tasks: [
    {
      id: 2,
      startDate: null,
      endDate: null,
      status: 'pending',
      title: 'Second task',
      description: 'Testing associations',
      createdAt: '2018-05-08T21:28:54.342Z',
      updatedAt: '2018-05-08T21:28:54.342Z',
      projectId: 1,
      userId: 2,
      project: 1,
      children: [3, 4, 5],
      parents: [1],
      documents: [],
      user: 2,
      comments: []
    },

    {
      id: 4,
      startDate: null,
      endDate: null,
      status: 'pending',
      title: 'Fourth task',
      description: 'Testing associations',
      createdAt: '2018-05-08T21:28:54.342Z',
      updatedAt: '2018-05-08T21:28:54.342Z',
      projectId: 1,
      userId: 2,
      project: {
        id: 1,
        title: 'Project 1',
        createdAt: '2018-05-08T21:28:54.334Z',
        updatedAt: '2018-05-08T21:28:54.334Z'
      },
      children: [],
      parents: [
        {
          id: 1,
          startDate: null,
          endDate: null,
          status: 'pending',
          title: 'Second task',
          description: 'Testing associations',
          createdAt: '2018-05-08T21:28:54.342Z',
          updatedAt: '2018-05-08T21:28:54.342Z',
          projectId: 1,
          userId: 2,
          dependencies: {
            createdAt: '2018-05-08T21:28:54.394Z',
            updatedAt: '2018-05-08T21:28:54.394Z',
            ParentTaskId: 1,
            TaskId: 4
          }
        }
      ],
      documents: [],
      user: {
        id: 2,
        name: 'Amal',
        email: 'grace@hopper.com',
        createdAt: '2018-05-08T21:28:54.299Z',
        updatedAt: '2018-05-08T21:28:54.299Z'
      },
      comments: []
    },
    {
      id: 5,
      startDate: null,
      endDate: null,
      status: 'pending',
      title: 'Wu dong xi',
      description: 'Testing associations',
      createdAt: '2018-05-08T21:28:54.343Z',
      updatedAt: '2018-05-08T21:28:54.343Z',
      projectId: 1,
      userId: 2,
      project: {
        id: 1,
        title: 'Project 1',
        createdAt: '2018-05-08T21:28:54.334Z',
        updatedAt: '2018-05-08T21:28:54.334Z'
      },
      children: [],
      parents: [
        {
          id: 1,
          startDate: null,
          endDate: null,
          status: 'pending',
          title: 'Second task',
          description: 'Testing associations',
          createdAt: '2018-05-08T21:28:54.342Z',
          updatedAt: '2018-05-08T21:28:54.342Z',
          projectId: 1,
          userId: 2,
          dependencies: {
            createdAt: '2018-05-08T21:28:54.400Z',
            updatedAt: '2018-05-08T21:28:54.400Z',
            ParentTaskId: 1,
            TaskId: 5
          }
        }
      ],
      documents: [],
      user: {
        id: 2,
        name: 'Amal',
        email: 'grace@hopper.com',
        createdAt: '2018-05-08T21:28:54.299Z',
        updatedAt: '2018-05-08T21:28:54.299Z'
      },
      comments: []
    },
    {
      id: 3,
      startDate: null,
      endDate: null,
      status: 'pending',
      title: 'Third task',
      description: 'Testing associations',
      createdAt: '2018-05-08T21:28:54.342Z',
      updatedAt: '2018-05-08T21:28:54.342Z',
      projectId: 1,
      userId: 2,
      project: {
        id: 1,
        title: 'Project 1',
        createdAt: '2018-05-08T21:28:54.334Z',
        updatedAt: '2018-05-08T21:28:54.334Z'
      },
      children: [],
      parents: [
        {
          id: 1,
          startDate: null,
          endDate: null,
          status: 'pending',
          title: 'Second task',
          description: 'Testing associations',
          createdAt: '2018-05-08T21:28:54.342Z',
          updatedAt: '2018-05-08T21:28:54.342Z',
          projectId: 1,
          userId: 2,
          dependencies: {
            createdAt: '2018-05-08T21:28:54.386Z',
            updatedAt: '2018-05-08T21:28:54.386Z',
            ParentTaskId: 1,
            TaskId: 3
          }
        }
      ],
      documents: [],
      user: {
        id: 2,
        name: 'Amal',
        email: 'grace@hopper.com',
        createdAt: '2018-05-08T21:28:54.299Z',
        updatedAt: '2018-05-08T21:28:54.299Z'
      },
      comments: []
    },
    {
      id: 2,
      startDate: null,
      endDate: null,
      status: 'pending',
      title: 'First task',
      description: 'Testing associations',
      createdAt: '2018-05-08T21:28:54.342Z',
      updatedAt: '2018-05-08T21:28:54.342Z',
      projectId: 1,
      userId: 1,
      project: {
        id: 1,
        title: 'Project 1',
        createdAt: '2018-05-08T21:28:54.334Z',
        updatedAt: '2018-05-08T21:28:54.334Z'
      },
      children: [
        {
          id: 1,
          startDate: null,
          endDate: null,
          status: 'pending',
          title: 'Second task',
          description: 'Testing associations',
          createdAt: '2018-05-08T21:28:54.342Z',
          updatedAt: '2018-05-08T21:28:54.342Z',
          projectId: 1,
          userId: 2,
          dependencies: {
            createdAt: '2018-05-08T21:28:54.376Z',
            updatedAt: '2018-05-08T21:28:54.376Z',
            ParentTaskId: 2,
            TaskId: 1
          }
        }
      ],
      parents: [],
      documents: [],
      user: {
        id: 1,
        name: 'Jason',
        email: 'cody@email.com',
        createdAt: '2018-05-08T21:28:54.298Z',
        updatedAt: '2018-05-08T21:28:54.298Z'
      },
      comments: []
    }
  ]
}
