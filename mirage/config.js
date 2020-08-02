export default function() {
  this.logging = true;
  this.get("/users", (schema) => {
    return schema.users.all();
  });

  this.get("/users/:id", (schema, request) => {
    return schema.users.find(request.params.id);
  });

  this.get("/posts", (schema) => {
    return schema.posts.all();
  });

  this.get("/users/:user_id/recent-emojis", (schema, request) => {
    const user = schema.users.find(request.params.user_id);
    return user.recentEmojis;
  });

  this.get("/recent-emojis", (schema, request) => {
    const user = schema.users.find(request.queryParams.user_id);
    return user.recentEmojis;
  });
}
