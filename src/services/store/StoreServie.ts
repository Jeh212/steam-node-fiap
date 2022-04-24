import { Loja, prisma } from '@prisma/client';
import { StoreRepository } from '../../repositories/store/StoreRepository';
import { ErrorHandler } from '../../utils/error/ErrorHandler';

class StoreServie {
  constructor(private readonly storeRepository: StoreRepository) {}

  async createWeekDeal(data: Loja) {
    const createDeal = await this.storeRepository.create(data);

    return createDeal;
  }

  async getWeekDeals(weekDealId: string) {
    console.log(weekDealId);

    const weekDeal = await this.storeRepository.getWeekDeal(weekDealId);

    if (weekDeal === null) throw new ErrorHandler('Cart nof found!', 404);

    return weekDeal;
  }

  async deleteWeekDeal(weekDealId: string) {
    const deletedWeek = await this.storeRepository.deleteWeekDeal(weekDealId);

    return deletedWeek;
  }
}
export { StoreServie };
