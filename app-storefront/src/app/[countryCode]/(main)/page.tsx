import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Features from "@modules/home/components/features"
import CommerceExperience from "@modules/home/components/commerce-experience"
import CaseStudy from "@modules/home/components/case-study"
import CommerceModules from "@modules/home/components/commerce-modules"
import Guide from "@modules/home/components/guide"
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
      <Hero />
      <Features />
      <CommerceExperience />
      <Guide />
      <CaseStudy />
      <CommerceModules />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      <Pricing />
      <Faq />
      <DemoCta />
    </>
  )
}
