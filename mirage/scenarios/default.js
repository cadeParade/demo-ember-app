import faker from "faker";
import _ from "lodash";

export default function(server) {
  const emojis = createEmoji(server);
  createUsers(server, 10, emojis);
  createPosts(server, 10);
}

function createPosts(server, count) {
  const posts = Array(count)
    .fill()
    .map(() => {
      return { name: faker.lorem.sentence(), body: faker.lorem.paragraph() };
    });
  return posts.map((post) => {
    return server.create("post", post);
  });
}

function createEmoji(server) {
  const emojis = [
    "👍",
    "👎",
    "💅",
    "🍺",
    "🦄",
    "🌈",
    "🙅‍♀️",
    "👑",
    "💜",
    "💰",
    "🕯",
    "💸",
    "💎",
    "🙃",
    "🤓",
    "😎",
    "🤩",
    "🤗️",
  ];

  return emojis.map((emoji) => {
    return server.create("emoji", { emoji });
  });
}

function createUsers(server, count, emojis) {
  const names = Array(count)
    .fill()
    .map(() => `${faker.name.firstName()} ${faker.name.lastName()}`);
  return names.map((name) => {
    const recentEmojis = _.sampleSize(emojis, 5);
    return server.create("user", { name, recentEmojis });
  });
}
