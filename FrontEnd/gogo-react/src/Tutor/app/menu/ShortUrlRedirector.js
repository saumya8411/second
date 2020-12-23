import React from 'react';
import Helmet from 'react-helmet';
import { Button } from 'reactstrap';

const ShortUrlRedirector = ({ fullUrl }) => {
  console.log(fullUrl);
  return (
    <div style={{ paddingBottom: '25%' }}>
      <Helmet>
        <meta httpEquiv="refresh" content={`2; url= ${fullUrl}`} />
      </Helmet>
      <h1>Redirecting....Please wait</h1>
      <p>
        Click the button if the page is not automatically redirected even after
        5 seconds.{' '}
      </p>

      <a href={fullUrl}>
        <Button>Redirect me</Button>
      </a>
    </div>
  );
};

export default ShortUrlRedirector;
