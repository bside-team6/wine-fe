import { API_URL } from '~/api/urls';
import { createMswHandler } from '~/helpers/msw';
import type {
  ITimelineWineNote,
  ITimelineWineNoteList,
  IWineNoteDetail,
} from '~/types';
import { WINE_TYPE } from '~/types';

export const wineNote: IWineNoteDetail = {
  id: 10,
  wineId: 100,
  wineName: '라 피우 벨 로제',
  wineType: WINE_TYPE.ROSE,
  sweet: 1,
  score: 4,
  price: 40_000,
  drinkDate: '2021-09-13',
  descript:
    '잘 익은 레드 베리와 살구, 패션 프루츠 시트러스 등의 상큼한 과실향과 함께 라벤더와 바이올렛 등의 아로마가 더해진다. 입 안에서는 풍성한 꽃향기와 둥글고 우아한 타닌감이 균형감 있으면서 드라이한 피니쉬를 보여주는 로제 와인이다.',
  wineNoteFoodList: ['연어'],
  regDate: '2021-10-12T00:00:00',
  updateDate: '2021-10-12T00:00:00',
  wineasyUserId: 2,
  wineasyUserNickName: 'helloworld',
  isLike: true,
  isPublic: true,
  viewCount: 0,
  wineNoteLikeCount: 0,
  wineNoteWineImages: [
    {
      id: 8,
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/default_thumbnail_3.jpg',
      imageName: 'default_image_3',
    },
  ],
  previousWineNoteId: 9,
  nextWineNoteId: 11,
};

export const getWineNoteSuccessHandler = createMswHandler(
  `${API_URL.WINE_NOTE}/:wineNoteId`,
  'get',
  wineNote,
  'real',
);

export const getWineNoteLoadingHandler = createMswHandler(
  `${API_URL.WINE_NOTE}/:wineNoteId`,
  'get',
  undefined,
  'infinite',
);

export const wineNotes: ITimelineWineNote[] = [
  {
    id: 10,
    wineId: 30,
    wineName: '발비 소프라니, 브라케토 다퀴',
    wineType: WINE_TYPE.SPARKLING,
    sweet: 4,
    score: 4.6,
    price: 46_000,
    drinkDate: '2021-09-13',
    descript:
      '심홍의 장미 빛이 살 짝 감도는 루비 레드, 매우 향긋하며, 과일향이 풍부하고, 머스크의 향, 블랙베리, 라즈베리향, 달콤하면서 부드럽고 정교한 맛을 가진 와인이다.',
    regDate: '2021-10-12T00:00:00',
    updateDate: '2021-10-12T00:00:00',
    wineasyUserId: 1,
    wineasyUserNickName: '안녕하세요',
    isLike: false,
    isPublic: true,
    viewCount: 0,
    wineNoteLikeCount: 0,
    wineNoteWineImagePath:
      'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/default_thumbnail_3.jpg',
  },
  {
    id: 11,
    wineId: 30,
    wineName: '비에티, 모스카토 다스티',
    wineType: WINE_TYPE.WHITE,
    sweet: 4,
    score: 4.5,
    price: 42_000,
    drinkDate: '2021-09-13',
    descript: '최고의 포도로 생산한 모스카토 다스티',
    regDate: '2021-10-12T00:00:00',
    updateDate: '2021-10-12T00:00:00',
    wineasyUserId: 2,
    wineasyUserNickName: '닉네임123',
    isLike: true,
    isPublic: true,
    viewCount: 0,
    wineNoteLikeCount: 0,
    wineNoteWineImagePath:
      'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/default_thumbnail_4.jpg',
  },
  {
    id: 12,
    wineId: 0,
    wineName: '로센티크',
    wineType: WINE_TYPE.RED,
    sweet: 1,
    score: 4.5,
    price: 72_000,
    drinkDate: '2021-09-13',
    descript: '테루아를 순수하게 표현한 내추럴 와인',
    isLike: false,
    isPublic: true,
    viewCount: 0,
    regDate: '2021-10-12T00:00:00',
    updateDate: '2021-10-12T00:00:00',
    wineasyUserId: 3,
    wineasyUserNickName: 'abcde',
    wineNoteLikeCount: 0,
    wineNoteWineImagePath:
      'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/default_thumbnail_2.jpg',
  },
  {
    id: 9,
    wineId: 0,
    wineName: '프리바다 모스카텔 드 세투발 알마냑',
    wineType: WINE_TYPE.FORTIFIED,
    sweet: 5,
    score: 3.6,
    price: 120_000,
    drinkDate: '2021-09-13',
    descript: '풍부한 맛과 긴 여운을 가진 주정강화 와인',
    wineasyUserId: 4,
    wineasyUserNickName: 'helloworld',
    regDate: '2021-10-11T00:00:00',
    updateDate: '2021-10-11T00:00:00',
    isLike: true,
    isPublic: true,
    viewCount: 0,
    wineNoteLikeCount: 0,
    wineNoteWineImagePath:
      'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/default_thumbnail_3.jpg',
  },
  {
    id: 2,
    wineId: 1,
    wineName: '메네골리, 부가티 아마로네',
    wineType: WINE_TYPE.RED,
    sweet: 2,
    score: 4,
    price: 850_000,
    drinkDate: '2021-10-10',
    descript: undefined,
    wineasyUserId: 4,
    wineasyUserNickName: 'helloworld',
    regDate: '2021-10-10T00:00:00',
    updateDate: '2021-10-10T00:00:00',
    isLike: true,
    isPublic: true,
    viewCount: 2,
    wineNoteLikeCount: 2,
    wineNoteWineImagePath: '',
  },
  {
    id: 1,
    wineId: 10,
    wineName: '바로싸 보이, 치키 틸리',
    wineType: WINE_TYPE.WHITE,
    sweet: 1,
    score: 3.0,
    price: 98_000,
    drinkDate: '2021-10-09',
    descript: '믿고 마시는 올드 바인 리슬링',
    wineasyUserId: 2,
    wineasyUserNickName: 'nickname123',
    regDate: '2021-10-09T00:00:00',
    updateDate: undefined,
    isLike: true,
    isPublic: false,
    viewCount: 4,
    wineNoteLikeCount: 0,
    wineNoteWineImagePath: '',
  },
];

export const getWineNotesSuccessHandler = (delay?: 'real') =>
  createMswHandler<ITimelineWineNoteList>(
    API_URL.WINE_NOTE,
    'get',
    {
      totalElements: 6,
      totalPages: 1,
      currentPage: 0,
      wineNoteTimeLineResultList: wineNotes,
    },
    'real',
  );

export const getWineNotesLoadingHandler = createMswHandler(
  API_URL.WINE_NOTE,
  'get',
  undefined,
  'infinite',
);

export const getWineNotesEmptyHandler = createMswHandler(
  API_URL.WINE_NOTE,
  'get',
  [],
  'real',
);

export const popularWineNotes: IWineNoteDetail[] = [
  {
    id: 2,
    wineId: 1,
    wineName: '장 로롱, 물랭아방',
    wineType: WINE_TYPE.RED,
    sweet: 1,
    score: 3.0,
    price: 69_000,
    drinkDate: '2021-10-10',
    descript: undefined,
    wineNoteFoodList: [],
    wineasyUserId: 3,
    wineasyUserNickName: 'abcde',
    regDate: '2021-10-10T00:00:00',
    updateDate: '2021-10-10T00:00:00',
    isLike: true,
    isPublic: true,
    viewCount: 2,
    wineNoteLikeCount: 2,
    wineNoteWineImages: [],
  },
  {
    id: 10,
    wineId: 100,
    wineName: '라 피우 벨 로제',
    wineType: WINE_TYPE.ROSE,
    sweet: 1,
    score: 4.5,
    price: 58_000,
    drinkDate: '2021-09-13',
    descript:
      '잘 익은 레드 베리와 살구, 패션 프루츠 시트러스 등의 상큼한 과실향과 함께 라벤더와 바이올렛 등의 아로마가 더해진다. 입 안에서는 풍성한 꽃향기와 둥글고 우아한 타닌감이 균형감 있으면서 드라이한 피니쉬를 보여주는 로제 와인이다.',
    wineNoteFoodList: ['연어'],
    wineasyUserId: 4,
    wineasyUserNickName: 'helloworld',
    regDate: '2021-10-12T00:00:00',
    updateDate: '2021-10-12T00:00:00',
    isLike: true,
    isPublic: true,
    viewCount: 0,
    wineNoteLikeCount: 0,
    wineNoteWineImages: [
      {
        id: 8,
        imagePath:
          'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/default_thumbnail_3.jpg',
        imageName: 'default_image_3',
      },
    ],
  },
  {
    id: 11,
    wineId: 0,
    wineName: '미켈레 끼아를로, 치프레시 니짜',
    wineType: WINE_TYPE.RED,
    sweet: 1,
    score: 4.5,
    price: 60_000,
    drinkDate: '2021-09-13',
    descript: '2018 Wine Enthusiast Top 100 No.1',
    wineNoteFoodList: ['치즈'],
    wineasyUserId: 2,
    wineasyUserNickName: 'nickname123',
    regDate: '2021-10-12T00:00:00',
    updateDate: '2021-10-12T00:00:00',
    isLike: false,
    isPublic: true,
    viewCount: 0,
    wineNoteLikeCount: 0,
    wineNoteWineImages: [
      {
        id: 9,
        imagePath:
          'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/default_thumbnail_4.jpg',
        imageName: 'default_image_4',
      },
    ],
  },
];

export const getPopularWineNotesSuccessHandler = createMswHandler(
  API_URL.POPULAR_WINE_NOTE,
  'get',
  popularWineNotes,
  'real',
);

export const getPopularWineNotesEmptyHandler = createMswHandler(
  API_URL.POPULAR_WINE_NOTE,
  'get',
  [],
  'real',
);

export const getPopularWineNotesLoadingHandler = createMswHandler(
  API_URL.POPULAR_WINE_NOTE,
  'get',
  undefined,
  'infinite',
);
