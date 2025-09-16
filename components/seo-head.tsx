import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export default function SEOHead({
  title = "SuPrazo Technologies - Innovative IT Solutions",
  description = "Driving Digital Excellence with Smart IT Solutions",
  canonical,
  ogImage = "/og-image.jpg",
  noindex = false,
}: SEOHeadProps) {
  const fullTitle = title.includes("SuPrazo") ? title : `${title} | SuPrazo Technologies`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}
