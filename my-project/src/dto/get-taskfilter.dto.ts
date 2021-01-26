import { TaskStatus } from '../tasks/task.model';

export class GetTaskFilterDto {
  status: TaskStatus;
  search: string;
}
