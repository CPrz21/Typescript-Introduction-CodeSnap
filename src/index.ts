enum bakeryItemType {
  Cake,
  Bread,
  Other,
}

enum currencies {
  gbp,
  usd,
  aud,
  eur,
}

interface BakeryItem {
  name: string;
  description?: string;
  imageURL?: string;
  numberInStock: number;
  type: bakeryItemType;
  price: number;
}

const donut: BakeryItem = {
  name: "Donut",
  description:
    "This Donut has really vibrant pink on it which makes it taste better!!",
  numberInStock: 10,
  type: bakeryItemType.Bread,
  price: 10,
};

interface PaymentMethod {
  id: string;
  currency: currencies;
  availableBalance: number;
}

interface CreditCardPaymentMethod extends PaymentMethod {
  expiryDate: Date;
  type: "credit" | "debit";
  cardValid: boolean;
}

type CashPaymentMethod = PaymentMethod;

const myPaymentMethod: CreditCardPaymentMethod = {
  id: "my-default-payment-method",
  currency: currencies.usd,
  availableBalance: 6,
  expiryDate: new Date(),
  type: "credit",
  cardValid: true,
};

const myBackupPaymentMethod: CashPaymentMethod = {
  id: "my-backup-payment-method",
  currency: currencies.usd,
  availableBalance: 2000,
};

interface Customer {
  id: string;
  primaryPaymentMethod: CreditCardPaymentMethod | CashPaymentMethod;
  backupPaymentMethod?: CreditCardPaymentMethod | CashPaymentMethod;
  itemInBasket: BakeryItem[];
}

const customer: Customer = {
  id: "my-first-customer",
  primaryPaymentMethod: myPaymentMethod,
  backupPaymentMethod: myBackupPaymentMethod,
  itemInBasket: [donut],
};

// Making payment
const makePayment = (paymentMethod: PaymentMethod, amount: number) => {
  if (paymentMethod.availableBalance < amount)
    throw new Error("Payment Method doesnt have sufficient fund.");

  paymentMethod.availableBalance -= amount;

  console.log("Payment as taken successfully");
};

// Buying a  bakery item
const payForItemsBasket = (customer: Customer) => {
  customer.itemInBasket.forEach((bakeryItem) => {
    try {
      makePayment(customer.primaryPaymentMethod, bakeryItem.price);
      bakeryItem.numberInStock -= 1;
    } catch (error) {
      console.log(
        "Error encountered whilst making payment. Details: ",
        error.message
      );
    }
  });
};

console.log("sdsdsdsd");

payForItemsBasket(customer);
