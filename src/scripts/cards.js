const CARDS_MOCK = [
  {
    imageSrc: 'https://londonvisa.ru/sites/default/files/obuchenie-v-anglii1.jpg',
    review: {
      favorite: 0,
      stars: 0,
      hit: 0
    },
    word: 'remark',
    synonym: 'note',
    transcription: '[rimɑ́ːrk]',
    description: [
      'To remark is to say something. - Remarquer, c\'est dire quelque chose',
      'The teacher remarked on how quickly the students were learning. L\'enseignant a noté la rapidité avec laquelle les élèves apprenaient.'
    ]
  },
  {
    imageSrc: 'https://www.merrimackmedia.com/wp-content/uploads/2020/11/shutterstock_551474275.jpg',
    review: {
      favorite: 12,
      stars: 1,
      hit: 7
    },
    word: 'awful',
    synonym: 'terrible',
    transcription: '[ɔ́ːfəl]',
    description: [
      'To remark is to say something. - Remarquer, c\'est dire quelque chose',
      'The teacher remarked on how quickly the students were learning. L\'enseignant a noté la rapidité avec laquelle les élèves apprenaient.'
    ]
  },
  {
    imageSrc: 'https://londonvisa.ru/sites/default/files/obuchenie-v-anglii1.jpg',
    review: {
      favorite: 0,
      stars: 11,
      hit: 6
    },
    word: 'remark',
    synonym: 'note',
    transcription: '[rimɑ́ːrk]',
    description: [
      'To remark is to say something. - Remarquer, c\'est dire quelque chose',
      'The teacher remarked on how quickly the students were learning. L\'enseignant a noté la rapidité avec laquelle les élèves apprenaient.'
    ]
  },
];


const getCardHTML = ({
  imageSrc,
  review,
  word,
  synonym,
  transcription,
  description
}) => {
  return `
    <div class="card">
      <div class="card__image" style="background-image: url('${imageSrc}');">
        <ul class="card__review">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12.8004 16C12.66 16 12.522 15.963 12.4004 15.8928L8.00039 13.3552L3.60039 15.8928C3.47878 15.963 3.34082 16 3.2004 16C3.05997 16 2.92201 15.963 2.8004 15.8928C2.67878 15.8226 2.57779 15.7216 2.50758 15.6C2.43736 15.4784 2.40039 15.3404 2.40039 15.2V2.4C2.40103 1.76368 2.65409 1.1536 3.10404 0.703646C3.55399 0.253696 4.16407 0.000635372 4.80039 0H11.2004C11.8367 0.000635372 12.4468 0.253696 12.8967 0.703646C13.3467 1.1536 13.5998 1.76368 13.6004 2.4V15.2C13.6004 15.4122 13.5161 15.6157 13.3661 15.7657C13.216 15.9157 13.0126 16 12.8004 16Z" fill="white"/>
            </svg>
            <span>${review.favorite}</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M15.4829 5.73784L10.6864 5.03988L8.54222 0.687582C8.48365 0.568419 8.38731 0.471953 8.26829 0.413317C7.96981 0.265781 7.6071 0.388728 7.45786 0.687582L5.3137 5.03988L0.517213 5.73784C0.384974 5.75675 0.26407 5.81917 0.171503 5.91375C0.0595945 6.02891 -0.0020722 6.18385 5.31712e-05 6.34452C0.00217854 6.50518 0.0679221 6.65843 0.182838 6.77059L3.65316 10.1582L2.83328 14.9418C2.81405 15.0531 2.82635 15.1675 2.86878 15.2721C2.91121 15.3768 2.98207 15.4674 3.07333 15.5338C3.16459 15.6001 3.27259 15.6396 3.38509 15.6476C3.4976 15.6556 3.6101 15.6319 3.70983 15.5792L8.00004 13.3208L12.2902 15.5792C12.4074 15.6416 12.5434 15.6624 12.6737 15.6397C13.0024 15.583 13.2235 15.2709 13.1668 14.9418L12.3469 10.1582L15.8172 6.77059C15.9117 6.67791 15.974 6.55685 15.9929 6.42445C16.0439 6.09344 15.8135 5.78702 15.4829 5.73784Z" fill="white"/>
            </svg>
            <span>${review.stars}</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.7778 0.145004C14.7585 0.101615 14.7269 0.0648056 14.687 0.03906C14.6472 0.0133145 14.6007 -0.000255464 14.5532 3.64241e-06H7.59971C7.55795 7.33269e-05 7.51687 0.0106378 7.48024 0.0307292C7.44361 0.0508207 7.4126 0.0797969 7.39005 0.115004L2.04389 8.615C2.01815 8.65201 2.00311 8.69542 2.00043 8.74045C1.99775 8.78547 2.00753 8.83037 2.0287 8.87018C2.04986 8.90999 2.08159 8.94318 2.12038 8.96609C2.15917 8.98899 2.20353 9.00073 2.24855 9H6.07722L2.69781 15.625C2.67841 15.6644 2.66929 15.7081 2.6713 15.752C2.67332 15.7958 2.6864 15.8385 2.70933 15.8759C2.73226 15.9134 2.76429 15.9444 2.80243 15.9661C2.84057 15.9878 2.88357 15.9995 2.92743 16H4.42496C4.4596 16.0002 4.49391 15.9932 4.52571 15.9795C4.55751 15.9657 4.58609 15.9454 4.60965 15.92L13.3802 6.425C13.415 6.38945 13.4384 6.3443 13.4474 6.29533C13.4565 6.24635 13.4507 6.1958 13.4308 6.15013C13.411 6.10447 13.378 6.06579 13.3361 6.03904C13.2941 6.01229 13.2452 5.9987 13.1955 6H9.83102L14.7379 0.410003C14.7695 0.374491 14.7902 0.330518 14.7973 0.283458C14.8044 0.236397 14.7976 0.188286 14.7778 0.145004Z" fill="white"/>
            </svg>
            <span>${review.hit}</span>
          </li>
        </ul>
      </div>
      <div class="card__content">
        <header class="card__header">
          <div class="card__title">
            <div class="card__word">
              <span>${word}</span>
              <span>/</span>
              <span>${synonym}</span>
            </div>
            <button class="button card__audio">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.1845 3.6192C19.1563 3.44999 19.0922 3.2888 18.9964 3.14648C18.9006 3.00416 18.7754 2.88403 18.6293 2.79419C18.4832 2.70435 18.3195 2.64688 18.1492 2.62567C17.979 2.60445 17.8062 2.61998 17.6425 2.6712L9.2425 5.2956C8.99825 5.37185 8.78477 5.52418 8.63322 5.73035C8.48167 5.93651 8.39999 6.18573 8.4001 6.4416V16.2C7.85945 15.7945 7.19774 15.5835 6.52215 15.601C5.84657 15.6186 5.19671 15.8637 4.67786 16.2967C4.15901 16.7298 3.80156 17.3253 3.66343 17.9868C3.5253 18.6484 3.61459 19.3372 3.91682 19.9416C4.21905 20.5461 4.71652 21.0308 5.32863 21.3172C5.94074 21.6037 6.63163 21.675 7.28936 21.5197C7.94709 21.3645 8.53313 20.9917 8.95252 20.4618C9.37192 19.9318 9.6001 19.2758 9.6001 18.6V10.0416L18.0001 7.416V10.8276C18.4117 10.8636 18.8137 10.9392 19.2001 11.0484V3.816C19.2001 3.7488 19.1941 3.684 19.1845 3.6192ZM22.8001 17.4C22.8001 18.8322 22.2312 20.2057 21.2185 21.2184C20.2058 22.2311 18.8323 22.8 17.4001 22.8C15.9679 22.8 14.5944 22.2311 13.5817 21.2184C12.569 20.2057 12.0001 18.8322 12.0001 17.4C12.0001 15.9678 12.569 14.5943 13.5817 13.5816C14.5944 12.5689 15.9679 12 17.4001 12C18.8323 12 20.2058 12.5689 21.2185 13.5816C22.2312 14.5943 22.8001 15.9678 22.8001 17.4ZM20.0845 16.878L16.4917 14.898C16.4004 14.8475 16.2975 14.8217 16.1932 14.8231C16.0889 14.8245 15.9867 14.8531 15.8968 14.906C15.8069 14.959 15.7324 15.0345 15.6806 15.125C15.6287 15.2156 15.6014 15.3181 15.6013 15.4224V19.3824C15.6012 19.4868 15.6284 19.5895 15.6801 19.6802C15.7318 19.7709 15.8064 19.8466 15.8963 19.8997C15.9862 19.9527 16.0885 19.9814 16.1929 19.9829C16.2973 19.9844 16.4003 19.9585 16.4917 19.908L20.0845 17.928C20.1783 17.8761 20.2565 17.8001 20.3109 17.7077C20.3653 17.6154 20.394 17.5102 20.394 17.403C20.394 17.2958 20.3653 17.1906 20.3109 17.0983C20.2565 17.0059 20.1783 16.9299 20.0845 16.878Z" fill="#BABABA"/>
              </svg>
            </button>
          </div>
          <div class="card__subtitle">
            <span>${transcription}</span>
            <span class="tag tag_orange tag_selected">compound</span>
          </div>
        </header>
        <div class="card__description">
          <span>${description[0]}</span>
          <div class="separator_horizontal"></div>
          <span>${description[1]}</span>
        </div>
        <footer class="card__actions">
          <button class="button button_success">Add to learned</button>
          <button class="button button_alert">Remove from dictionary</button>
        </footer>
      </div>
    </div>
  `;
};

const getCardNodes = (cards) => {
  const nodes = [];

  for (const card of cards) {
    const cardNode = document.createElement('div');
    cardNode.innerHTML = getCardHTML(card);

    nodes.push(cardNode);
  }

  return nodes;
};

const insertCards = (cards) => {
  const cardsNode = document.body.querySelector('.cards');

  if (cardsNode) {
    cardsNode.append(...getCardNodes(cards));
  }
};

document.addEventListener('DOMContentLoaded', () => insertCards(CARDS_MOCK));
