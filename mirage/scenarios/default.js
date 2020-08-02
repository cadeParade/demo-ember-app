import _ from 'lodash';

export default function (server) {
  const emojis = createEmoji(server);
  createUsers(server, 10, emojis);
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
  return server.createList('user', count, {recentEmojis: _.sampleSize(emojis, 5)});
}
