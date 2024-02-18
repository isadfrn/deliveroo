exports.up = (knex) => {
  return knex.schema.createTable("users", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("name").notNullable();
    table.string("email").unique().notNullable();
    table.string("phone").unique().notNullable();
    table.string("password").notNullable();
    table.enum("role", ["USER", "ADMIN"]).defaultTo("USER");
    table.string("avatar_url");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
};

exports.down = (knex) => knex.schema.dropTableIfExists("users");
