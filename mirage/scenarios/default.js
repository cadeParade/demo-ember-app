import faker from "faker";
import _ from "lodash";

export default function(server) {
  const emojis = createEmoji(server);
  createUsers(server, 10, emojis);
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
    const user = server.create("user", { name, recentEmojis });
  });
}
