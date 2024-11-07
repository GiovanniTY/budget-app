import { DateTime } from 'luxon';
import { BaseModel, column } from '@adonisjs/lucid/orm';

export default class Expense extends BaseModel {
  @column({ isPrimary: true })
  public id!: number;

  @column()
  public macroCategory!: string;  // Macro-categoria, ad esempio "Trasporti"

  @column()
  public category!: string;       // Categoria principale, ad esempio "Macchina"

  @column()
  public subCategory!: string;    // Sotto-categoria, ad esempio "Carburante"

  @column()
  public amount!: number;

  @column.date()
  public date!: DateTime;

  @column()
  public description!: string;    // Descrizione dell'elemento
}
