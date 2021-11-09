import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Task } from './index';

export default {
  component: Task,
  title: 'Task',
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '1',
  title: 'Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2021, 0, 1, 9, 0),
};

export const Pinned = Template.bind({});
Pinned.args = {
  title: 'Task_Pinned',
  state: 'TASK_PINNED',
};

export const Archived = Template.bind({});
Archived.args = {
  title: 'Task_Archived',
  state: 'TASK_ARCHIVED',
};
