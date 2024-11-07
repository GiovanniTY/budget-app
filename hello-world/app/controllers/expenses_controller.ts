import { HttpContext } from '@adonisjs/core/http';
import Expense from '#models/expense';

export default class ExpenseController {
  // Creare una nuova spesa
  public async store({ request, response }: HttpContext) {
    const data = request.only(['macroCategory', 'category', 'subCategory', 'amount', 'date', 'description']);
    const expense = await Expense.create(data);
    return response.created(expense);
  }

  // Ottenere tutte le spese
  public async index() {
    return await Expense.all();
  }

  // Ottenere una singola spesa
  public async show({ params, response }: HttpContext) {
    const expense = await Expense.find(params.id);
    if (expense) {
      return expense;
    } else {
      return response.status(404).json({ message: 'Expense not found' });
    }
  }

  // Aggiornare una spesa esistente
  public async update({ params, request, response }: HttpContext) {
    const expense = await Expense.find(params.id);
    if (expense) {
      const data = request.only(['macroCategory', 'category', 'subCategory', 'amount', 'date', 'description']);
      expense.merge(data);
      await expense.save();
      return response.ok(expense);
    } else {
      return response.status(404).json({ message: 'Expense not found' });
    }
  }

  // Cancellare una spesa
  public async destroy({ params, response }: HttpContext) {
    const expense = await Expense.find(params.id);
    if (expense) {
      await expense.delete();
      return response.status(204);
    } else {
      return response.status(404).json({ message: 'Expense not found' });
    }
  }
}
