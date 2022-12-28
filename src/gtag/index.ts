declare global {
  // eslint-disable-next-line no-var, @typescript-eslint/no-explicit-any
  var dataLayer: Array<any>;
}

export function initialize(): void {
  if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID);
  }
}
