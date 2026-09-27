import Script from "next/script";

export function GoogleAnalytics() {
  const id = "G-YBH7JWVX0E";
  if (!id) return null;
  return <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
    <Script id="ga4" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${id}', { page_path: window.location.pathname });
      document.addEventListener('click',function(event){
        var link=event.target.closest&&event.target.closest('a');
        if(!link)return;
        var href=(link.getAttribute('href')||'').trim();
        var url=link.href||href;
        var txt=(link.textContent||'').trim().replace(/\s+/g,' ').slice(0,100);
        var params={link_url:url,link_text:txt,page_location:window.location.href};
        if(typeof window.gtag!=='function')return;
        if(href.indexOf('tel:')===0){window.gtag('event','phone_click',params);}
        else if(/book\.mylimobiz\.com/i.test(url)){window.gtag('event','reservation_click',params);}
        else if(href.indexOf('mailto:')===0){window.gtag('event','email_click',params);}
      });
    `}</Script>
  </>;
}
