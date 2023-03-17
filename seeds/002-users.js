/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    {name: 'Murat Dede', email: 'murat1_dede@hotmail.com', password:'',role_id:1},
    {name: 'Selahattin Dede', email: 'selomuro@hotmail.com', password:'',role_id:2},
    {id: 3, colName: 'rowValue3'}
  ]);
};
