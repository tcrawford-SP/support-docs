import type { NextPage } from 'next';
import { Box, Text, Button, Stack } from '@sparkpost/matchbox';
import SEO from 'components/site/seo';
import DocsLayout from 'components/site/docsLayout';

const SubmitATicketPage: NextPage = () => {
  return (
    <>
      <SEO title="Submit A Ticket" />
      <DocsLayout>
        <Box px="400" maxWidth="1150">
          <Stack>
            <Text as="h1" looksLike="h2">
              SparkPost Support Has Moved
            </Text>
            <Text>
              We have moved our support facility to{' '}
              <a href="https://app.sparkpost.com/" target="_blank" rel="noreferrer">
                app.sparkpost.com
              </a>
              .
            </Text>
            <Text>
              As always, you can find quick answers using the search bar at the top of the page,
              check out specific topics on the menu at the left, and you’ll find our{' '}
              <a href="https://developer.sparkpost.com/api/" target="_blank" rel="noreferrer">
                API documentation here
              </a>
              .
            </Text>
            <div>
              <Button
                color="blue"
                to="https://app.sparkpost.com/dashboard?supportTicket=true&supportIssue=general_issue"
                external
              >
                Login And Create a Ticket
              </Button>
            </div>
          </Stack>
        </Box>
      </DocsLayout>
    </>
  );
};

export default SubmitATicketPage;
