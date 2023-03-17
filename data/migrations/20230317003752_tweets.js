/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('roles',tbl=>{
    tbl.increments();
    tbl.string('name', 128)
    .notNullable();

  })
  .createTable('users',tbl=>{
    tbl.increments();
    tbl.string('name', 128)
    .notNullable();
    tbl.string('email',128)
    .unique()
    .notNullable();
    tbl.string('password',128);
    tbl.integer('role_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('roles')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')


  })
  .createTable('tweets',tbl=>{
    tbl.increments();
    tbl.string('message',128)
    .notNullable();
    tbl.string('created_at',128)
    .defaultTo(knex.fn.now())
    .notNullable();
    tbl.integer('user_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
     })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
  .dropTableIfExists('tweets')
};
