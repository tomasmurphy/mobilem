import { Helmet } from 'react-helmet';
import React from 'react';

const Seo = ({ title, description, pathSlug, keywords }) => {
  const url = `https://malikgabroun.com/${pathSlug}`
	return (
<Helmet htmlAttributes={{ lang: 'es' }} title={title} meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: keywords,
        },
		]}
    links={[
     {
          rel: 'canonical',
          href: url,
      },
    ]}
    />
 );
}
export default Seo;