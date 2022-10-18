import { useState, useEffect } from 'react';
import CardDataLoading from './CardDataLoading';
import CardData from './CardData';
import NoCardData from './NoCardData';

export default function Cards() {
  const [savedCard, setSavedCard] = useState(null);
  const [modalCard, setModalCard] = useState(false);
  const onCloseModal = () => setModalCard(false);

  useEffect(() => {
    setSavedCard({
      end: '4532',
      type: 'visa',
      expiration: '12/27',
    });
  }, []);

  return (
    <>
      {savedCard != null ? (
        savedCard.end ? (
          <CardData
            savedCard={savedCard}
            setSavedCard={setSavedCard}
            modalCard={modalCard}
            setModalCard={setModalCard}
          />
        ) : (
          <NoCardData
            setSavedCard={setSavedCard}
            modalCard={modalCard}
            setModalCard={setModalCard}
          />
        )
      ) : (
        <CardDataLoading />
      )}
    </>
  );
}
