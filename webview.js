const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    if (document.getElementById('inbox-count') != null) {
      if (document.getElementById('inbox-count').getAttribute('title') != null) {
        count = parseInt(document.getElementById('inbox-count').getAttribute('title').replace(/[^0-9.]/g, ''), 10);
      }
    }

    count = parseInt(count, 10);

    if (isNaN(count)) {
      count = 0;
    }

    Franz.setBadge(count);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  Franz.loop(getMessages);
};