import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface ISubItems {
  id: number;
  sub_item_key: string;
  sub_item_value: string;
}

interface INavItems {
  id: number;
  main_item_key: string;
  main_item_value: string;
  sub_items: ReadonlyArray<ISubItems>;
}

interface IAuthButton {
  id: number;
  button_key: string;
  button_value: string;
}

const nav_items: ReadonlyArray<INavItems> = [
  {
    id: 1,
    main_item_key: "Anasayfa",
    main_item_value: "Homepage",
    sub_items: [
      {
        id: 1,
        sub_item_key: "TA 250 Film",
        sub_item_value: "TA_250_Film",
      },
      {
        id: 2,
        sub_item_key: "Imdb 250",
        sub_item_value: "Imdb_250",
      },
      {
        id: 3,
        sub_item_key: "1001 Film",
        sub_item_value: "1001_Film",
      },
      {
        id: 4,
        sub_item_key: "Yeni Çıkanlar",
        sub_item_value: "New_Released",
      },
      {
        id: 5,
        sub_item_key: "Beklenenler",
        sub_item_value: "Expected",
      },
      {
        id: 6,
        sub_item_key: "Gelişmiş Film Arama",
        sub_item_value: "Advanced_Film_Search",
      },
      {
        id: 7,
        sub_item_key: "Dizi Takvimi",
        sub_item_value: "Series_Schedule",
      },
      {
        id: 8,
        sub_item_key: "Gruplar",
        sub_item_value: "Groups",
      },
    ],
  },
  {
    id: 2,
    main_item_key: "Forum",
    main_item_value: "Forum",
    sub_items: [
      {
        id: 1,
        sub_item_key: "Forum İçinde Ara",
        sub_item_value: "Search_Inside_Forum",
      },
      {
        id: 2,
        sub_item_key: "Çeviri Duyuruları",
        sub_item_value: "Translate_Announcements",
      },
      {
        id: 3,
        sub_item_key: "Kullanıcı Grupları",
        sub_item_value: "User_Groups",
      },
    ],
  },
  {
    id: 3,
    main_item_key: "Altyazı",
    main_item_value: "Subtitle",
    sub_items: [
      {
        id: 1,
        sub_item_key: "Yeni Çıkanlar",
        sub_item_value: "New_Released",
      },
      {
        id: 2,
        sub_item_key: "Beklenenler",
        sub_item_value: "Expectations",
      },
      {
        id: 3,
        sub_item_key: "Son 100 Altyazı",
        sub_item_value: "Last_100_Subtitles",
      },
      {
        id: 4,
        sub_item_key: "Top 100 Altyazı",
        sub_item_value: "Top_100_Subtitles",
      },
      {
        id: 5,
        sub_item_key: "Altyazı Arama",
        sub_item_value: "Search_For_Subtitle",
      },
    ],
  },
  {
    id: 4,
    main_item_key: "Filmler",
    main_item_value: "Films",
    sub_items: [
      {
        id: 1,
        sub_item_key: "Yeni Çıkanlar",
        sub_item_value: "New_Released",
      },
      {
        id: 2,
        sub_item_key: "Beklenenler",
        sub_item_value: "Expectations",
      },
      {
        id: 3,
        sub_item_key: "Son 100 Altyazı",
        sub_item_value: "Last_100_Subtitles",
      },
      {
        id: 4,
        sub_item_key: "Top 100 Altyazı",
        sub_item_value: "Top_100_Subtitles",
      },
      {
        id: 5,
        sub_item_key: "Altyazı Arama",
        sub_item_value: "Search_For_Subtitle",
      },
    ],
  },
  {
    id: 5,
    main_item_key: "Diziler",
    main_item_value: "Series",
    sub_items: [
      {
        id: 1,
        sub_item_key: "Yeni Çıkanlar",
        sub_item_value: "New_Released",
      },
      {
        id: 2,
        sub_item_key: "Beklenenler",
        sub_item_value: "Expectations",
      },
      {
        id: 3,
        sub_item_key: "Son 100 Altyazı",
        sub_item_value: "Last_100_Subtitles",
      },
      {
        id: 4,
        sub_item_key: "Top 100 Altyazı",
        sub_item_value: "Top_100_Subtitles",
      },
      {
        id: 5,
        sub_item_key: "Altyazı Arama",
        sub_item_value: "Search_For_Subtitle",
      },
    ],
  },
  {
    id: 6,
    main_item_key: "Haberler",
    main_item_value: "News",
    sub_items: [
      {
        id: 1,
        sub_item_key: "Yeni Çıkanlar",
        sub_item_value: "New_Released",
      },
      {
        id: 2,
        sub_item_key: "Beklenenler",
        sub_item_value: "Expectations",
      },
      {
        id: 3,
        sub_item_key: "Son 100 Altyazı",
        sub_item_value: "Last_100_Subtitles",
      },
      {
        id: 4,
        sub_item_key: "Top 100 Altyazı",
        sub_item_value: "Top_100_Subtitles",
      },
      {
        id: 5,
        sub_item_key: "Altyazı Arama",
        sub_item_value: "Search_For_Subtitle",
      },
    ],
  },
  {
    id: 7,
    main_item_key: "Listeler",
    main_item_value: "Lists",
    sub_items: [
      {
        id: 1,
        sub_item_key: "Yeni Çıkanlar",
        sub_item_value: "New_Released",
      },
      {
        id: 2,
        sub_item_key: "Beklenenler",
        sub_item_value: "Expectations",
      },
      {
        id: 3,
        sub_item_key: "Son 100 Altyazı",
        sub_item_value: "Last_100_Subtitles",
      },
      {
        id: 4,
        sub_item_key: "Top 100 Altyazı",
        sub_item_value: "Top_100_Subtitles",
      },
      {
        id: 5,
        sub_item_key: "Altyazı Arama",
        sub_item_value: "Search_For_Subtitle",
      },
    ],
  },
  {
    id: 8,
    main_item_key: "Senkronizer",
    main_item_value: "Synchronizer",
    sub_items: [
      {
        id: 1,
        sub_item_key: "Yeni Çıkanlar",
        sub_item_value: "New_Released",
      },
      {
        id: 2,
        sub_item_key: "Beklenenler",
        sub_item_value: "Expectations",
      },
      {
        id: 3,
        sub_item_key: "Son 100 Altyazı",
        sub_item_value: "Last_100_Subtitles",
      },
      {
        id: 4,
        sub_item_key: "Top 100 Altyazı",
        sub_item_value: "Top_100_Subtitles",
      },
      {
        id: 5,
        sub_item_key: "Altyazı Arama",
        sub_item_value: "Search_For_Subtitle",
      },
    ],
  },
  {
    id: 9,
    main_item_key: "Altyazı Gönder",
    main_item_value: "Subtitle_Send",
    sub_items: [
      {
        id: 1,
        sub_item_key: "Yeni Çıkanlar",
        sub_item_value: "New_Released",
      },
      {
        id: 2,
        sub_item_key: "Beklenenler",
        sub_item_value: "Expectations",
      },
      {
        id: 3,
        sub_item_key: "Son 100 Altyazı",
        sub_item_value: "Last_100_Subtitles",
      },
      {
        id: 4,
        sub_item_key: "Top 100 Altyazı",
        sub_item_value: "Top_100_Subtitles",
      },
      {
        id: 5,
        sub_item_key: "Altyazı Arama",
        sub_item_value: "Search_For_Subtitle",
      },
    ],
  },
  {
    id: 10,
    main_item_key: "Rastgele Film",
    main_item_value: "Random_Film",
    sub_items: [
      {
        id: 1,
        sub_item_key: "Yeni Çıkanlar",
        sub_item_value: "New_Released",
      },
      {
        id: 2,
        sub_item_key: "Beklenenler",
        sub_item_value: "Expectations",
      },
      {
        id: 3,
        sub_item_key: "Son 100 Altyazı",
        sub_item_value: "Last_100_Subtitles",
      },
      {
        id: 4,
        sub_item_key: "Top 100 Altyazı",
        sub_item_value: "Top_100_Subtitles",
      },
      {
        id: 5,
        sub_item_key: "Altyazı Arama",
        sub_item_value: "Search_For_Subtitle",
      },
    ],
  },
];

const auth_buttons: ReadonlyArray<IAuthButton> = [
  {
    id: 1,
    button_key: "Kayıt",
    button_value: "Sign_Up",
  },
  {
    id: 2,
    button_key: "Giriş",
    button_value: "Sign_In",
  },
];

export default function Header_Navigation(): JSX.Element {
  return (
    <div className="grid grid-cols-24 gap-0 text-white">
      {nav_items.map((item: INavItems) => (
        <div
          key={item.id}
          className="col-span-2 flex items-center justify-center gap-x-1"
        >
          <span>{item.main_item_key}</span>{" "}
          <FontAwesomeIcon
            style={{ height: "8px", width: "8px" }}
            icon={faChevronDown}
          />
        </div>
      ))}
      <div className="col-span-2"></div>
      {auth_buttons.map((item: IAuthButton) => (
        <div key={item.id} className="col-span-1">
          <button>{item.button_key}</button>
        </div>
      ))}
    </div>
  );
}
