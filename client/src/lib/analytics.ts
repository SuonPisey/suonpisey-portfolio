const normalizeEndpoint = (endpoint: string) => endpoint.replace(/\/+$/, "");

export function initializeAnalytics() {
  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT?.trim();
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID?.trim();

  if (!endpoint || !websiteId) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = `${normalizeEndpoint(endpoint)}/umami`;
  script.dataset.websiteId = websiteId;
  document.head.appendChild(script);
}
