export interface TaskProps {
  id: number;
  title: string;
  isComplete: boolean;
  handleDeleteTask: (id: string) => void;
  handleEditTask: (id: string, isComplete: boolean) => void;
}
