import { JSONAPISerializer } from "ember-cli-mirage";

export default JSONAPISerializer.extend({
  links(user) {
    return {
      recentEmojis: {
        related: `recent-emojis`,
        // related: `/recent-emojis?user_id=${user.id}`,
      },
    };
  },
});
