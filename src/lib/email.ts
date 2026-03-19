type GmailComposeOptions = {
  to: string;
  subject: string;
  body: string;
  cc?: string;
  bcc?: string;
};

const PRODUCTION_HOME_URL = 'https://biteksolutions.org/';

export const buildGmailComposeUrl = ({
  to,
  subject,
  body,
  cc,
  bcc,
}: GmailComposeOptions) => {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    tf: '1',
    to,
    su: subject,
    body,
  });

  if (cc) {
    params.set('cc', cc);
  }

  if (bcc) {
    params.set('bcc', bcc);
  }

  return `https://mail.google.com/mail/?${params.toString()}`;
};

export const redirectToGmailCompose = (options: GmailComposeOptions) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.location.assign(buildGmailComposeUrl(options));
};

export const openGmailCompose = (options: GmailComposeOptions) => {
  if (typeof window === 'undefined') {
    return false;
  }

  const composeUrl = buildGmailComposeUrl(options);
  const popup = window.open(composeUrl, '_blank', 'noopener,noreferrer');

  if (popup) {
    return true;
  }

  const link = window.document.createElement('a');
  link.href = composeUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.click();
  return true;
};

export const getSiteHomeUrl = () => {
  if (typeof window === 'undefined') {
    return PRODUCTION_HOME_URL;
  }

  const isLocalHost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
  return isLocalHost ? `${window.location.origin}/` : PRODUCTION_HOME_URL;
};

export const redirectToSiteHome = () => {
  if (typeof window === 'undefined') {
    return;
  }

  window.setTimeout(() => {
    window.location.replace(getSiteHomeUrl());
  }, 150);
};
