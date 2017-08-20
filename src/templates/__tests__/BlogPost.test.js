import React from 'react';
import BlogPost from '../BlogPost';

describe('Blog Post', () => {
  let data;

  beforeEach(() => {
    data = {
      markdownRemark: {
        frontmatter: {
          title: 'Sample Title',
          path: '/sample-title',
          date: 'September 14, 2009'
        },
        html: '<p><strong>html</strong> output</p>'
      }
    };
  });

  function renderShallow() {
    return shallow(<BlogPost data={data} />);
  }

  it('can render a default post', () => {
    expect(renderShallow()).toMatchSnapshot();
  });
});
