import React, { PureComponent } from 'react';
import { StyleRoot } from './styled';

class Download extends PureComponent {
  getNetscapeBookmarkFormat = () => {
    // const { posts, settings } = this.props;
    const { posts } = this.props;
    const settings = {
      title: '__read_later__',
    };

    let list = '';

    posts.forEach(post => {
      const { url, title, dateAdded } = post;
      list += `<DT><A HREF="${url}" ADD_DATE="${dateAdded}">${title}</A>`;
    });

    const data = `
    <!DOCTYPE NETSCAPE-Bookmark-file-1>
    <!--This is an automatically generated file.
    It will be read and overwritten.
    Do Not Edit! -->
    <Title>Bookmarks</Title>
    <H1>Bookmarks</H1>
    <DT><H3 FOLDED>${settings.title}</H3>
    <DL><p>
    ${list}
    </DL><p>
    `;

    return data;
  };
  render() {
    const netscapeBookmarkFormat = `data:text/html;charset=utf-8,${this.getNetscapeBookmarkFormat()}`;
    const date = new Date();
    return (
      <StyleRoot
        data={netscapeBookmarkFormat}
        download={`readLater_${date.getFullYear()}_${date.getMonth()}_${date.getDate()}_${date.getHours()}${date.getMinutes()}${date.getSeconds()}.html`}
      >
        export
      </StyleRoot>
    );
  }
}

export default Download;