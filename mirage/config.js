export default function() {
  this.get("/users", (schema) => {
    return schema.users.all();
  });

  this.get("/users/:id", (schema, request) => {
    return schema.users.find(request.params.id);
  });

  this.get("/posts", (schema) => {
    return schema.posts.all();
  });

  this.get("/recent-emojis", (schema, request) => {
    const user = schema.users.find(request.queryParams.user_id);
    return user.recentEmojis;
  });
}
