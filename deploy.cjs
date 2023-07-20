/* eslint-disable no-undef */
const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish(
  path.join(__dirname, 'dist'),
  {
    branch: 'gh-pages',
    repo: 'https://github.com/vuvandinh123/vvd-nft.git',
  },
  (err) => {
    if (err) {
      console.error('Lỗi khi triển khai:', err);
    } else {
      console.log('Triển khai hoàn tất');
    }
  }
);
