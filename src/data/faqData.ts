const faqData = [
  {
    title: '01 決選相關問題',
    faq: [
      {
        id: 1,
        question: '決選評選時需準備口頭簡報 15 分鐘，請問簡報口頭表達的語言有限制嗎？',
        answer: '決選時的口頭表達以中文為限（簡報及問答環節皆是），現場會有同步口譯將您的表達內容翻譯給非中文母語人士的委員。',
      },
      {
        id: 1,
        question: '決審評審委員會看到我初選階段的作品嗎？',
        answer: '不會，決審評審委員只會看到您決選階段繳交的作品。',
      },
    ],
  },
  {
    title: '02 作品繳交',
    faq: [
      {
        id: 1,
        question: '800字內的作品說明文字，是以英文單字還是中文字數計算？',
        answer: '800字的內容以英文或中英對照為限，您可以提交「800個英文單字」，或是「800個英文單字與其翻譯對照」的檔案。',
      },
      {
        id: 2,
        question: '作品說明文字要怎麼繳交？',
        answer: '作品說明文字需與圖面分開，獨立為一份純文字的pdf或word檔案繳交。',
      },
      {
        id: 3,
        question: '學生組須繳交的 「1 張 A1 圖面」，是指只限繳交1張，或是能繳交超過1張？',
        answer: '初審階段只需繳交1張A1圖面，不得超過1張A1圖面。',
      },
      {
        id: 4,
        question: '初審、決審繳交的A1圖面，是否有橫式或直式的規定或建議？',
        answer: '直式或橫式不拘；入圍決審者，將由主辦單位另行通知規定排版尺寸和數量，俾利後續評審及公開展覽使用。',
      },
      {
        id: 5,
        question: '作品完成了， 要如何繳交？',
        answer: '<p>step 1. 作品及說明文字請放入同一資料夾，資料夾名稱及收件主旨請統一命名為：參賽組別＿團隊名稱＿作品名稱＿中正紀念堂園區新願景概念競圖參賽作品。</p><p>step 2. 將資料夾上傳至雲端空間（建議優先採用Google Drive，其他雲端系統亦可）。</p><p>step 3. 上傳完畢後，請將檔案下載連結寄至「info@vipassanacreative.com」。</p><p>主辦單位確認收件內容無誤後，將發送回函，完成交件和收件程序，您的作品也將進入評審程序。</p>',
      },
      {
        id: 6,
        question: '圖面中可以有說明文字嗎？',
        answer: '可以，作品說明文字是指作品的整體概述，圖面中仍可以加入相關文字說明。',
      },
      {
        id: 7,
        question: '我如何知道自己交件成功了？',
        answer: '收件截止後５日內，主辦單位將以email通知交件者，是否交件成功與符合資格規定，請參賽者留意信件。',
      },
    ],
  },
  {
    title: '03 競圖內容',
    faq: [
      {
        id: 1,
        question: '本次競圖範圍？',
        answer: '本次競圖以中山南路、信義路、杭州南路、愛國東路圍合之中正紀念堂園區全區為重點設計範圍，參賽者需回應評比標準提到的內容。',
      },
    ],
  },
  {
    title: '04 競圖報名相關問題',
    faq: [
      {
        id: 1,
        question: '完成報名是什麼時後？報名有截止日嗎？ ',
        answer: '本次競圖需於初審交件截止日2022.11.10前完成報名。完成報名後，方可取得相關圖資，以及優先參加民眾參與活動，以便完成評比標準之內容，請有志參加者儘早完成報名。',
      },
      {
        id: 2,
        question: '請問我提交報名表單後，會收到「報名成功確認信」嗎？ ',
        answer: '主辦單位不會個別寄出報名成功確認信，但會在確認報名表單內容無誤後，寄發基地圖資使用切結書給報名者。',
      },
      {
        id: 3,
        question: '報名後主辦方會提供基地相關資料或圖檔嗎。',
        answer: '會。在您填寫報名表單後，主辦單位將寄送一份圖檔使用切結書，報名者簽立同意書後，將統一寄發基本圖資。',
      },
      {
        id: 4,
        question: '在報名時尚未有明確的設計方向，就先決定 「 團隊名稱 」，未來是否還可以更改團隊名稱以切合設計理念？',
        answer: '可以，只要在初審交件截止日前，主動來信至info@vipassanacreative.com要求修改即可。',
      },
      {
        id: 5,
        question: '請問提交表單後，團隊成員還能變動（增加或是退出）嗎？',
        answer: '可以，只要在初審交件截止日前，主動來信至info@vipassanacreative.com要求修改團隊資訊，並附上新成員簽署的切結書即可。',
      },
      {
        id: 6,
        question: '本次競圖是否允許重複投稿，一人可同時參與不同組別嗎？',
        answer: '不可以。本次競圖每位參賽者僅限報名一個組別，且不可重複投稿。',
      },
      {
        id: 7,
        question: '如果參賽者有兩個提案，可再額外報名一組嗎？',
        answer: '不行，本次競圖不允許同一人重複投稿，且每位參賽者僅限報名一個組別。',
      },
    ],
  },
  {
    title: '05 想像中正紀念堂的100種方式系列活動相關問題',
    faq: [
      {
        id: 1,
        question: '中正要討論講座、工作坊會錄影並會放上網站嗎？',
        answer: '會，請上競圖執行小組<a href="https://www.youtube.com/playlist?list=PLZJKcj3-88_jHVt2MOGOuW8zSzpLb4r6r" style="text-decoration: revert;" rel="noreferrer noopener" target="_blank">游觀創意YouTube頻道觀賞<a>',
      },
    ],
  },
];

export default faqData;
