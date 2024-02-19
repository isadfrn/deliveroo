exports.seed = (knex) => {
  return knex("user")
    .del()
    .then(() => {
      return knex("user").insert([
        {
          id: knex.raw("uuid_generate_v4()"),
          name: "Isabella Nunes",
          email: "isabellanunes@example.com",
          phone: "99999999999",
          password:
            "$2a$12$EZmpgPeSDQQAJAPJPm.zb.GQEpBnViLi3PExrzQIPZ2Hhrt1ZVM9i",
          role: "ADMIN",
          avatar_url: "http://example.com/avatar2.png",
        },
      ]);
    });
};
