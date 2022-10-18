import { Button } from 'flowbite-react';
import AddCardModal from './AddCardModal';
import {
  defaultButton,
  cardTitle,
  cardSubtitle,
} from '@/styles/StyledElements';

export default function NoCardData({ setSavedCard, modalCard, setModalCard }) {
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
                  É necessário que sua conta possua ao menos um cartão de
                  crédito configurado como padrão para pagamento.
                </p>
              </div>
              <div className="-mx-5 mt-4 border-t border-gray-200 dark:border-gray-700 sm:hidden"></div>
              <div className="mt-4 sm:mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center text-right">
                <Button type="button" onClick={() => setModalCard(true)}>
                  Adicionar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
