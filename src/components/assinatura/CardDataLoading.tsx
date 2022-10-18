import { HiCreditCard } from 'react-icons/hi';
import { cardTitle } from '@/styles/StyledElements';

export default function CardDataLoading() {
  return (
    <section className="mt-10" aria-labelledby="cards">
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6 animate-pulse">
          <h3 className={cardTitle}>Cartão de crédito</h3>
          <div className="mt-2 sm:flex sm:items-start sm:justify-between">
            <div className="mt-1 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          </div>
          <div className="mt-5">
            <div className="rounded-md bg-gray-100 dark:bg-gray-700 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <h4 className="sr-only">Visa</h4>
              <div className="flex items-start">
                <div className="flex justify-center items-center w-12 h-8 sm:flex-shrink-0 sm:h-6 bg-gray-300 rounded dark:bg-gray-600">
                  <HiCreditCard className="w-5 h-5 text-gray-200" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-48 mb-2"></div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 sm:flex sm:items-center">
                    <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2"></div>
                    <span
                      className="hidden sm:mx-2 sm:inline"
                      aria-hidden="true"
                    >
                      &middot;
                    </span>
                    <div className="mt-1 sm:mt-0">
                      <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-36"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
