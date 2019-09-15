import { shallow } from 'enzyme';
import React from 'react';
import BlogPost from '../BlogPost';

describe('Blog Post', () => {
  function renderShallow() {
    const data = {
      markdownRemark: {
        id: 1,
        excerpt: '',
        frontmatter: {
          title: 'Sample Title',
          path: '/sample-title',
          date: 'September 14, 2009',
          tags: ['tag-a', 'tag-b']
        },
        html: '<p><strong>html</strong> output</p>'
      }
    };
    return shallow(<BlogPost data={data} />);
  }

  it('can render a default post', () => {
    expect(renderShallow()).toMatchSnapshot();
  });
});
