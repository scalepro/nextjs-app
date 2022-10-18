import { Button } from 'flowbite-react';
import AddCardModal from './AddCardModal';
import {
  defaultButton,
  cardTitle,
  cardSubtitle,
} from '@/styles/StyledElements';

export default function CardData({
  savedCard,
  setSavedCard,
  modalCard,
  setModalCard,
}) {
  return (
    <>
      <AddCardModal
        setSavedCard={setSavedCard}
        modalCard={modalCard}
        setModalCard={setModalCard}
      />
      <section className="mt-10" aria-labelledby="cards">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className={cardTitle}>Cartão de crédito</h3>
            <div className="mt-2 sm:flex sm:items-start sm:justify-between">
              <div className={cardSubtitle}>
                <p>
                  Este é o cartão que está definido como padrão em sua conta e
                  que será usado para as futuras cobranças.
                </p>
              </div>
            </div>
            <div className="mt-5">
              <div className="rounded-md bg-gray-100 dark:bg-gray-700 px-6 py-5 sm:flex sm:items-start sm:justify-between">
                <h4 className="sr-only">{savedCard.type}</h4>
                <div className="flex items-start">
                  <img
                    className="fill-gray-200 h-8 mt-1 w-auto sm:flex-shrink-0 sm:h-6"
                    src={
                      '/credit-card-icons/flat-rounded/' +
                      savedCard.type +
                      '.svg'
                    }
                  />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      Terminando em {savedCard.end}
                    </div>
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 sm:flex sm:items-center">
                      <div>Expira {savedCard.expiration}</div>
                      <span
                        className="hidden sm:mx-2 sm:inline"
                        aria-hidden="true"
                      >
                        &middot;
                      </span>
                      <div className="mt-1 sm:mt-0">
                        Atualizado em 05 de Out de 2022
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mx-6 mt-4 border-t border-gray-200 dark:border-gray-600 sm:hidden"></div>
                <div className="mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0 flex justify-end">
                  <Button type="button" onClick={() => setModalCard(true)}>
                    Alterar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
