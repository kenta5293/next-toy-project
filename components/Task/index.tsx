import { AiFillStar } from 'react-icons/ai';
import { StyledTask } from './styled';

interface TaskProps {
  // Task Id
  id: number;
  // Task Title
  title: string;
  // Task State []
  state?: 'TASK_INBOX' | 'TASK_ARCHIVED' | 'TASK_PINNED';
  onArchived;
  onPinned;
}

export const Task = ({ id, title, state, onArchived, onPinned }: TaskProps) => {
  return (
    <StyledTask className={state}>
      <input />
      {title}
    </StyledTask>
  );
};
