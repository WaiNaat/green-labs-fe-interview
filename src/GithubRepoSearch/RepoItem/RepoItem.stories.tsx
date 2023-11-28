/* eslint-disable relay/must-colocate-fragment-spreads */
import type { Meta, StoryObj } from '@storybook/react';
import type { RepoItemStoryQuery as RepoItemStoryQueryType } from './__generated__/RepoItemStoryQuery.graphql';
import type { WithRelayParameters } from '@imchhh/storybook-addon-relay';
import { graphql } from 'react-relay';
import RepoItem from '.';

const meta: Meta<typeof RepoItem> = {
  component: RepoItem,
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
        query RepoItemStoryQuery @relay_test_operation {
          search(query: "안녕하세요", type: REPOSITORY, first: 5) {
            edges {
              node {
                ... on Repository {
                  ...RepoItemFragment
                }
              }
            }
          }
        }
      `,

      getReferenceEntry: (queryResult) => ['data', queryResult.search?.edges?.at(-1)?.node],

      mockResolvers: {
        Repository: () => ({
          name: 'i-love-graphql',
          owner: {
            login: 'WaiNaat',
            avatarUrl: 'https://avatars.githubusercontent.com/u/77872742',
          },
          description: 'REST API 게 섰거라',
          id: 'base64hash',
          stargazerCount: 777777,
          viewerHasStarred: true,
          url: 'https://github.com/WaiNaat',
        }),
      },
    } satisfies WithRelayParameters<RepoItemStoryQueryType>,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
