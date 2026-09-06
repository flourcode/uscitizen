/* Google Analytics for every page of the site.
   Replace G-XXXXXXXXXX below with your GA4 Measurement ID (Admin > Data streams > your web stream).
   That is the only edit needed; every page loads this file. Leave it as-is and nothing is sent. */
(function(){
  var ID="G-XXXXXXXXXX";
  if(ID.indexOf("G-XXXX")===0)return;
  var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+ID;document.head.appendChild(s);
  window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
  gtag("js",new Date());gtag("config",ID,{anonymize_ip:true});
})();