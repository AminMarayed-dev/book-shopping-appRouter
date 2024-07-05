import FormCheckout from "@/app/(rootLayout)/checkout/components/form-checkout";
import PaymentCheckOut from "@/app/(rootLayout)/checkout/components/payment-checkout";

function CheckOut() {
  return (
    <>
      <FormCheckout />
      <PaymentCheckOut />
    </>
  );
}

export default CheckOut;
