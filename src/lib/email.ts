type GmailComposeOptions = {
  to: string;
  subject: string;
  body: string;
  cc?: string;
  bcc?: string;
};

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
  const popup = window.open('', '_blank', 'noopener,noreferrer');

  if (popup) {
    popup.location.href = composeUrl;
    return true;
  }

  const link = window.document.createElement('a');
  link.href = composeUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.click();
  return true;
};
