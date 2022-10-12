import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export declare class Assignee {
  readonly fullName?: string | null;
  readonly avatar?: string | null;
  constructor(init: ModelInit<Assignee>);
}

type TaskMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Task {
  readonly id: string;
  readonly title?: string | null;
  readonly dueDate?: string | null;
  readonly description?: string | null;
  readonly assignee?: Assignee | null;
  readonly tags?: (string | null)[] | null;
  readonly isCompleted?: boolean | null;
  readonly isDeleted?: boolean | null;
  readonly isImportant?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Task, TaskMetaData>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task, TaskMetaData>) => MutableModel<Task, TaskMetaData> | void): Task;
}