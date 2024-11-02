import type { FaqItemProps } from "./FaqItem";

export const faqList: FaqItemProps[] = [
  {
    value: "create-account",
    question: "How do I create an account?",
    answer:
      "To create an account, click on the 'Sign Up' button at the top right corner of the page. Fill in the required information and follow the prompts to complete your registration.",
  },
  {
    value: "payment-methods",
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit cards, debit cards, and PayPal. You can choose your preferred payment method during checkout.",
  },
  {
    value: "track-order",
    question: "How can I track my order?",
    answer:
      "You can track your order by logging into your account and visiting the 'Orders' section. You'll find tracking information for all your recent purchases.",
  },
  {
    value: "return-policy",
    question: "What is your return policy?",
    answer:
      "You can return any unopened and unused items within 30 days of purchase for a full refund. Please refer to our return policy page for more details.",
  },
];
