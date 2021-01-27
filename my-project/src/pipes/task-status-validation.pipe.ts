import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from 'src/tasks/task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any) {
    console.log('value', value);

    if (!this.isStatusValid(value)) {
      throw new BadRequestException('Value is invalid status');
    }
    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}
