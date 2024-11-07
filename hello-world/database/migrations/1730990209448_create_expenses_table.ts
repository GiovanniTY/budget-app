import { BaseSchema } from '@adonisjs/lucid/schema';

export default class Expenses extends BaseSchema {
  public async up() {
    this.schema.createTable('expenses', (table) => {
      table.increments('id');
      table.string('macro_category');     // Macro-categoria, ad esempio "Trasporti"
      table.string('category');           // Categoria principale, ad esempio "Macchina"
      table.string('sub_category');       // Sotto-categoria, ad esempio "Carburante"
      table.decimal('amount', 12, 2);
      table.date('date');
      table.string('description', 255);   // Descrizione dell'elemento
    });
  }

  public async down() {
    this.schema.dropTable('expenses');
  }
}
