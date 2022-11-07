import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type EagerAssignee = {
  readonly fullName: string;
  readonly avatar?: string | null;
}

type LazyAssignee = {
  readonly fullName: string;
  readonly avatar?: string | null;
}

export declare type Assignee = LazyLoading extends LazyLoadingDisabled ? EagerAssignee : LazyAssignee

export declare const Assignee: (new (init: ModelInit<Assignee>) => Assignee)

type TaskMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTask = {
  readonly id: number;
  readonly aid?: string | null;
  readonly title?: string | null;
  readonly dueDate?: string | null;
  readonly description?: string | null;
  readonly assignee?: (Assignee | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly isCompleted?: boolean | null;
  readonly isDeleted?: boolean | null;
  readonly isImportant?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTask = {
  readonly id: number;
  readonly aid?: string | null;
  readonly title?: string | null;
  readonly dueDate?: string | null;
  readonly description?: string | null;
  readonly assignee?: (Assignee | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly isCompleted?: boolean | null;
  readonly isDeleted?: boolean | null;
  readonly isImportant?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Task = LazyLoading extends LazyLoadingDisabled ? EagerTask : LazyTask

export declare const Task: (new (init: ModelInit<Task, TaskMetaData>) => Task) & {
  copyOf(source: Task, mutator: (draft: MutableModel<Task, TaskMetaData>) => MutableModel<Task, TaskMetaData> | void): Task;
}