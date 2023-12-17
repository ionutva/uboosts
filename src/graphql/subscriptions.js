/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
      id
      title
      dueDate
      description
      assignee {
        fullName
        avatar
      }
      tags
      isCompleted
      isDeleted
      isImportant
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
      id
      title
      dueDate
      description
      assignee {
        fullName
        avatar
      }
      tags
      isCompleted
      isDeleted
      isImportant
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
      id
      title
      dueDate
      description
      assignee {
        fullName
        avatar
      }
      tags
      isCompleted
      isDeleted
      isImportant
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
