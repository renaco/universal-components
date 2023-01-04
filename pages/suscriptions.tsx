import React from 'react';

import UniversalNewsletter from '../src/components/newsletter/universal';
import ViveUSANewsletter from '../src/components/newsletter/viveusa';
import ClaseNewsLetter from '../src/components/newsletter/clase';

const Subscriptions = () => {
  return (
    <>
      <h2>Subscriptions</h2>
      <UniversalNewsletter />
      <ViveUSANewsletter />
      <ClaseNewsLetter />
    </>
  )
}

export default Subscriptions;