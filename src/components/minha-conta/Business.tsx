import { useState, useEffect } from 'react';
import InfosBusiness from './InfosBusiness';
import InfosBusinessLoading from './InfosBusinessLoading';
import AvatarBusiness from './AvatarBusiness';
import AvatarBusinessLoading from './AvatarBusinessLoading';
import { dividedCard, cardTitle, cardSubtitle } from '@/styles/StyledElements';

export default function Business() {
  const [businessData, seBusinesslData] = useState(null);

  useEffect(() => {
    seBusinesslData({
      name: 'Lojas Hiper',
      alias: 'lojashiper',
      token: '12039881023898398398192898398392928902',
      secret_key: 'tkn_1209384878988298928929891091892983983',
    });
  }, []);

  return (
    <section className="mt-10" aria-labelledby="business-data">
      <div className={dividedCard}>
        <div className="px-4 py-5 sm:p-6">
          <div>
            <h2 id="business-data" className={cardTitle}>
              Informações da loja
            </h2>
            <p className={cardSubtitle}>
              Estas são as informações e os dados sobre a loja da Yampi atrelada
              a sua conta.
            </p>
            {businessData ? (
              <>
                <AvatarBusiness businessData={businessData} />
                <InfosBusiness businessData={businessData} />
              </>
            ) : (
              <>
                <AvatarBusinessLoading />
                <InfosBusinessLoading />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
