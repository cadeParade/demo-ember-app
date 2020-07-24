export default function() {
  this.get("/users", (schema, request) => {
    const x = schema.users.all();
    console.log("x", x);
    return x;
  });

  this.get("/emojis/:id", (schema, request) => {
    return schema.emojis.find(request.params.id);
  });
}
