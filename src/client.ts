import { Connection, WorkflowClient } from '@temporalio/client';
import { SubscriptionWorkflow } from './workflows';
import { nanoid } from 'nanoid';

async function run() {
  const connection = await Connection.connect({
    // // Connect to localhost with default ConnectionOptions.
    // // In production, pass options to the Connection constructor to configure TLS and other settings:
    // address: 'foo.bar.tmprl.cloud', // as provisioned
    // tls: {} // as provisioned
  });

  const client = new WorkflowClient({
    connection,
    // namespace: 'default', // change if you have a different namespace
  });

  const result = await client.execute(SubscriptionWorkflow, {
    workflowId: 'business-meaningful-id',
    taskQueue: 'tutorial',
    args: ['foo@bar.com', '30 seconds'],
  });
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
