import _ from 'lodash';

export default function (server) {
  createUsers(server, 10);
  createPosts(server, 10);
}

function createPosts(server, count) {
  return server.createList('post', count);
}

function createEmoji(server) {
  const emojis = [
    '👍',
    '👎',
    '💅',
    '🍺',
    '🦄',
    '🌈',
    '🙅‍♀️',
    '👑',
    '💜',
    '💰',
    '🕯',
    '💸',
    '💎',
    '🙃',
    '🤓',
    '😎',
    '🤩',
    '🤗️',
  ];

  return emojis.map(emoji => {
    return server.create('emoji', {emoji});
  });
}

function createUsers(server, count, emojis) {
  return server.createList('user', count);
}
