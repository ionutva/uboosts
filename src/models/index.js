// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Task, Assignee } = initSchema(schema);

export {
  Task,
  Assignee
};