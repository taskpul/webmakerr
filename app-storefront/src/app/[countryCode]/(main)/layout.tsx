import { Metadata } from "next"
import Script from "next/script"

import { listCartOptions, retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import { getBaseURL } from "@lib/util/env"
import { StoreCartShippingOption } from "@medusajs/types"
import CartMismatchBanner from "@modules/layout/components/cart-mismatch-banner"
import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import FreeShippingPriceNudge from "@modules/shipping/components/free-shipping-price-nudge"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  const customer = await retrieveCustomer()
  const cart = await retrieveCart()
  let shippingOptions: StoreCartShippingOption[] = []

  if (cart) {
    const { shipping_options } = await listCartOptions()

    shippingOptions = shipping_options
  }

  return (
    <>
      <Script id="brevo-widget" strategy="beforeInteractive">
        {`(function(d, w, c) {
  w.BrevoConversationsID = '${process.env.NEXT_PUBLIC_BREVO_CONVERSATIONS_ID}';
  w[c] = w[c] || function() {
    (w[c].q = w[c].q || []).push(arguments);
  };
  var s = d.createElement('script');
  s.async = true;
  s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
  if (d.head) d.head.appendChild(s);
})(document, window, 'BrevoConversations');`}
      </Script>
      <Nav />
      {customer && cart && (
        <CartMismatchBanner customer={customer} cart={cart} />
      )}

      {cart && (
        <FreeShippingPriceNudge
          variant="popup"
          cart={cart}
          shippingOptions={shippingOptions}
        />
      )}
      <div className="container">{props.children}</div>
      <Footer />
    </>
  )
}
