import type { Meta, StoryObj } from '@storybook/react';

import SearchBox from '.';

const meta: Meta<typeof SearchBox> = {
  component: SearchBox,
  decorators: [
    (Story) => (
      <div style={{ width: '50%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
