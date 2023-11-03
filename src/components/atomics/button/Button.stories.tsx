import Button from '@/components/atomics/button/Button';
import {Meta, StoryObj} from '@storybook/react';
import {ComponentType} from 'react';

const meta = {
  title: 'Atomic/Button',
  component: Button as ComponentType,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    border: 'border-lg',
    children: 'Button',
  },
};




