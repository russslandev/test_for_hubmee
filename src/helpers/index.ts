import { ITask } from "../types";

export const filterTasks = (tasks: ITask[], searchInputValue: string, isCheckedFilter: boolean) => {
  let filteredTasks: ITask[] = [...tasks];

  if (searchInputValue) {
    filteredTasks = filteredTasks.filter((task) => task.task.includes(searchInputValue));
  }

  if (isCheckedFilter) {
    filteredTasks = filteredTasks.filter((task) => task.checked);
  }

  filteredTasks.sort((a, b) => {
    const indexA = a.task.indexOf(searchInputValue);
    const indexB = b.task.indexOf(searchInputValue);

    if (indexA < indexB) return -1;
    if (indexA > indexB) return 1;
    return 0;
  });
  return filteredTasks;
};