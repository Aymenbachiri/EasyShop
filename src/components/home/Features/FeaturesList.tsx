import { CustomerSupportIcon } from "@/lib/icons/CustomerSupportIcon";
import { ProductIcon } from "@/lib/icons/ProuductIcon";
import { SecurePaymentIcon } from "@/lib/icons/SecurePaymentIcon";

type Feature = {
  label: string;
  description: string;
  icon: JSX.Element;
};

export const FeaturesList: Feature[] = [
  {
    label: "Easy Product Listing",
    description:
      "Effortlessly add and manage your products with our intuitive listing tools, designed to help you start selling quickly.",
    icon: <ProductIcon />,
  },
  {
    label: "Secure Payments",
    description:
      "ShopBase ensures your transactions are safe and secure, with multiple payment options and robust fraud protection.",
    icon: <SecurePaymentIcon />,
  },
  {
    label: "24/7 Customer Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any issues or questions.",
    icon: <CustomerSupportIcon />,
  },
];
