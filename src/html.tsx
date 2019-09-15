import React from 'react';

export default function HTML({
  body,
  headComponents,
  postBodyComponents,
  preBodyComponents
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700|Source+Serif+Pro"
          rel="stylesheet"
        />
        {headComponents}
      </head>
      <body>
        {preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}
