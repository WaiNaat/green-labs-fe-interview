/* eslint-disable relay/must-colocate-fragment-spreads */
import type { Meta, StoryObj } from '@storybook/react';
import type { WithRelayParameters } from '@imchhh/storybook-addon-relay';
import type { StarStoryQuery as StarStoryQueryType } from './__generated__/StarStoryQuery.graphql';
import { graphql } from 'react-relay';
import Star from '.';

const meta: Meta<typeof Star> = {
  component: Star,
  decorators: [
    (Story) => (
      <div style={{ width: '50%' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    data: { table: { disable: true } },
  },
  parameters: {
    relay: {
      query: graphql`
        query StarStoryQuery @relay_test_operation {
          search(query: "안녕하세요", type: REPOSITORY, first: 5) {
            edges {
              node {
                ... on Repository {
                  ...StarFragment
                }
              }
            }
          }
        }
      `,

      getReferenceEntry: (queryResult) => ['data', queryResult.search?.edges?.at(-1)?.node],
    } satisfies WithRelayParameters<StarStoryQueryType>,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Starred: Story = {
  parameters: {
    relay: {
      ...meta.parameters?.relay,
      mockResolvers: {
        Repository: () => ({
          id: 'base64hash',
          stargazerCount: 777777,
          viewerHasStarred: true,
        }),
      },
    },
  },
};

export const Unstarred: Story = {
  parameters: {
    relay: {
      ...meta.parameters?.relay,
      mockResolvers: {
        Repository: () => ({
          id: 'base64hash',
          stargazerCount: 0,
          viewerHasStarred: false,
        }),
      },
    },
  },
};
