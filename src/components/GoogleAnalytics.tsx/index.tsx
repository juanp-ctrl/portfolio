import Script from 'next/script'

const GoogleAnalytics = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || ''

  if (!gaId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Default to denied until consent is given
          gtag('consent', 'default', {
            'analytics_storage': 'denied'
          });
          
          // Check for existing consent
          const savedConsent = localStorage.getItem('cookie-consent');
          if (savedConsent === 'true') {
            gtag('consent', 'update', {
              'analytics_storage': 'granted'
            });
          }
          
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics
