import { useState, useEffect } from 'react';
import InfosUser from './InfosUser';
import InfosUserLoading from './InfosUserLoading';
import AvatarUser from './AvatarUser';
import AvatarUserLoading from './AvatarUserLoading';
import { dividedCard, cardTitle, cardSubtitle } from '@/styles/StyledElements';

export default function Persional() {
  const [personalData, setPersonalData] = useState(null);

  useEffect(() => {
    setPersonalData({
      first_name: 'Gustavo',
      last_name: 'Araujo',
      email: 'mail@example.com',
      cpf: '000.000.000-00',
      phone: '(00) 00000-0000',
      cep: '80035-230',
      state: 'PR',
      city: 'Curitiba',
      address: 'Rua Cel Amazonas Marcondes',
      number: '123',
      complement: '',
      neighborhood: 'Cabral',
      created_account_date: '25 de Out, 2022',
    });
  }, []);

  return (
    <section className="mt-10" aria-labelledby="billing-data">
      <div className={dividedCard}>
        <div className="px-4 py-5 sm:p-6">
          <div>
            <h2 id="billing-data" className={cardTitle}>
              Informações pessoais
            </h2>
            <p className={cardSubtitle}>
              Estes são os dados informados sobre suas informações pessoais e de
              faturamento.
            </p>
            {personalData ? (
              <>
                <AvatarUser personalData={personalData} />
                <InfosUser personalData={personalData} />
              </>
            ) : (
              <>
                <AvatarUserLoading />
                <InfosUserLoading />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
