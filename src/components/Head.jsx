import { Helmet } from "react-helmet";
import React from "react";

const Seo = ({ title, description, pathSlug, image, keywords }) => {
  const url = `${pathSlug}`;
  return (
    <Helmet
      htmlAttributes={{ lang: "es" }}
      title={title}
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          property: "og:descripcion",
          content: keywords,
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:site_name",
          content: "Mobilem",
        },
        {
          property: "og:url",
          content: url,
        },
        {
          property: "og:image",
          content: image,
        },
      ]}
      links={[
        {
          rel: "canonical",
          href: url,
        },
      ]}
    />
  );
};
export default Seo;
