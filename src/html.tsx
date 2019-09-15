import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  static propTypes = {
    headComponents: PropTypes.node,
    preBodyComponents: PropTypes.node,
    body: PropTypes.node,
    postBodyComponents: PropTypes.node
  };

  render() {
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
          {this.props.headComponents}
        </head>
        <body>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
