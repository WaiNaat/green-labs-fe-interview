import type { Preview } from '@storybook/react';
import GlobalStyle from '../src/GlobalStyle.style';
import { Suspense } from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Suspense>
          <Story />
        </Suspense>
      </>
    ),
  ],
};

export default preview;
