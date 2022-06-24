import { Customer } from "./types";

export async function sendWelcomeEmail(email: string) {
  console.log(`Sending welcome email to ${email}`);
}
export async function sendCancellationEmailDuringTrialPeriod(email: string) {
  console.log(`Sending trial cancellation email to ${email}`);
}
export async function chargeCustomerForBillingPeriod(customer: Customer, chargeAmount: number) {
  console.log(`Charging ${customer.Email} amount ${chargeAmount} for their billing period`);
}
export async function sendCancellationEmailDuringActiveSubscription(customer: Customer) {
  console.log(`Sending active subscriber cancellation email to ${customer.Email}`);
}
export async function sendSubscriptionOverEmail(email: string) {
  console.log(`Sending subscription over email to ${email}`);
}