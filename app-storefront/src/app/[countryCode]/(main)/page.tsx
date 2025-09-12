import { Metadata } from "next"
import Script from "next/script"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import AppointmentScheduling from "@modules/home/components/appointment-scheduling"
import SalesTeam from "@modules/home/components/sales-team"
import SalesWorkflow from "@modules/home/components/sales-workflow"
import ClientExperience from "@modules/home/components/client-experience"
import MoreFeatures from "@modules/home/components/more-features"
import CommerceExperience from "@modules/home/components/commerce-experience"
import CommerceModules from "@modules/home/components/commerce-modules"
import Faq from "@modules/home/components/faq"
import DemoCta from "@modules/home/components/demo-cta"
import Pricing from "@modules/home/components/pricing"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Script id="chatwoot-script" strategy="lazyOnload">
        {`(function(d,t) {
    var BASE_URL="http://chat.webmakerr.com";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.async = true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken: 'oBf1gBsAco2ZJUAhbqS1akh3',
        baseUrl: BASE_URL
      })
    }
  })(document,"script");`}
      </Script>
      <div className="bg-[#f4f4f4]">
        <Hero />
        <AppointmentScheduling />
        <SalesTeam />
        <SalesWorkflow />
        <ClientExperience />
        <MoreFeatures />
        <CommerceExperience />
        <CommerceModules />
        <div className="py-12">
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
        <Pricing />
        <Faq />
        <DemoCta />
      </div>
    </>
  )
}
