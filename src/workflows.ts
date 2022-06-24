import * as wf from '@temporalio/workflow'; // don't need to import everything
import type * as activities from './activities';
// import activity types

const acts = wf.proxyActivities<typeof activities>({
  // don't need to destructure activities
  startToCloseTimeout: '1 minute',
});

export const cancelSubscription = wf.defineSignal('cancelSignal'); // new

export async function SubscriptionWorkflow(
  email: string,
  trialPeriod: string | number
) {
  let isCanceled = false; // internal variable to track cancel state
  wf.setHandler(cancelSubscription, () => void (isCanceled = true)); // new
  await acts.sendWelcomeEmail(email);
  await wf.sleep(trialPeriod);
  if (isCanceled) {
    await acts.sendCancellationEmailDuringTrialPeriod(email); // new
  } else {
    await acts.sendSubscriptionOverEmail(email);
  }
}