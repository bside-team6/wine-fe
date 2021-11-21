import { rest } from 'msw';
import { API_URL } from '~/api/urls';
import { createMswHandler, delayedResponse } from '~/helpers/msw';
import type { IPageable, IWineNote, IWineNoteDetail } from '~/types';
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
  matchingFoods: ['연어'],
  regDate: '2021-10-12T00:00:00',
  updateDate: '2021-10-12T00:00:00',
  userId: 2,
  userNickName: 'helloworld',
  isLike: true,
  isFitted: true,
  isPublic: true,
  viewCount: 0,
  likeCount: 0,
  wineImages: [
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

export const getWineNoteSuccessHandler = createMswHandler<IWineNoteDetail>(
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

export const wineNotes: IWineNote[] = [
  {
    id: 10,
    wineId: 30,
    wineName: '발비 소프라니, 브라케토 다퀴',
    wineType: WINE_TYPE.SPARKLING,
    descript:
      '심홍의 장미 빛이 살짝 감도는 루비 레드, 매우 향긋하며, 과일향이 풍부하고, 머스크의 향, 블랙베리, 라즈베리향, 달콤하면서 부드럽고 정교한 맛을 가진 와인이다.',
    score: 2,
    regDate: '2021-10-12T00:00:00',
    userId: 1,
    userNickName: '안녕하세요',
    isLike: false,
    isPublic: true,
    viewCount: 0,
    likeCount: 0,
    wineImages: [
      {
        id: 8,
        imagePath:
          'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/default_thumbnail_1.jpg',
        imageName: 'default_image_3',
      },
    ],
  },
  {
    id: 11,
    wineId: 30,
    wineName: '비에티, 모스카토 다스티',
    wineType: WINE_TYPE.WHITE,
    descript: '최고의 포도로 생산한 모스카토 다스티',
    score: 5,
    regDate: '2021-10-12T00:00:00',
    userId: 2,
    userNickName: '닉네임123',
    isLike: true,
    isPublic: false,
    viewCount: 0,
    likeCount: 0,
    wineImages: [
      {
        id: 8,
        imagePath:
          'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/default_thumbnail_3.jpg',
        imageName: 'default_image_3',
      },
    ],
  },
  {
    id: 12,
    wineId: 0,
    wineName: '로센티크',
    wineType: WINE_TYPE.RED,
    descript: '테루아를 순수하게 표현한 내추럴 와인',
    score: 4,
    isLike: false,
    isPublic: true,
    viewCount: 0,
    regDate: '2021-10-12T00:00:00',
    userId: 3,
    userNickName: 'abcde',
    likeCount: 0,
    wineImages: [
      {
        id: 8,
        imagePath:
          'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/default_thumbnail_2.jpg',
        imageName: 'default_image_3',
      },
    ],
  },
  {
    id: 9,
    wineId: 0,
    wineName: '프리바다 모스카텔 드 세투발 알마냑',
    wineType: WINE_TYPE.FORTIFIED,
    descript: '풍부한 맛과 긴 여운을 가진 주정강화 와인',
    score: 3,
    userId: 4,
    userNickName: 'helloworld',
    regDate: '2021-10-11T00:00:00',
    isLike: true,
    isPublic: true,
    viewCount: 0,
    likeCount: 0,
    wineImages: [
      {
        id: 8,
        imagePath:
          'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/default_thumbnail_1.jpg',
        imageName: 'default_image_3',
      },
    ],
  },
  {
    id: 2,
    wineId: 1,
    wineName: '메네골리, 부가티 아마로네',
    wineType: WINE_TYPE.RED,
    descript:
      '인생에 품었기 때까지 보이는 있다. 대한 하여도 같은 불어 장식하는 것이다. 그것은 인간의 피어나는 넣는 같이, 이것이다. 발휘하기 무한한 일월과 거선의 이상이 싸인 품으며, 듣는다. 가는 그들의 원질이 찾아 봄바람이다. 하는 크고 원질이 어디 인생의 부패뿐이다. 희망의 생의 예수는 그들의 것이다. 열락의 것은 광야에서 꽃 운다. 동력은 미묘한 일월과 때까지 있다. 소리다.이것은 얼음이 인생에 봄바람이다.',
    score: 1,
    userId: 4,
    userNickName: 'helloworld',
    regDate: '2021-10-10T00:00:00',
    isLike: true,
    isPublic: true,
    viewCount: 2,
    likeCount: 2,
    wineImages: [
      {
        id: 8,
        imagePath:
          'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/default_thumbnail_2.jpg',
        imageName: 'default_image_3',
      },
    ],
  },
  {
    id: 1,
    wineId: 10,
    wineName: '바로싸 보이, 치키 틸리',
    wineType: WINE_TYPE.WHITE,
    descript: '믿고 마시는 올드 바인 리슬링',
    score: 5,
    userId: 2,
    userNickName: 'nickname123',
    regDate: '2021-10-09T00:00:00',
    isLike: true,
    isPublic: false,
    viewCount: 4,
    likeCount: 0,
    wineImages: [
      {
        id: 8,
        imagePath:
          'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/default_thumbnail_3.jpg',
        imageName: 'default_image_3',
      },
    ],
  },
];

export const getWineNotesHandler = rest.get(
  API_URL.WINE_NOTE,
  (req, res, ctx) => {
    const page = Number(req.url.searchParams.get('page') || 0);
    const size = wineNotes.length;
    const totalPages = 5;
    return delayedResponse(
      ctx.json<IPageable<IWineNote>>({
        content: wineNotes,
        empty: false,
        first: page === 0,
        last: page + 1 === totalPages,
        number: page,
        numberOfElements: size,
        size,
        totalElements: totalPages * (page + 1) * 16,
        totalPages,
      }),
    );
  },
);

export const getWineNotesSuccessHandler = createMswHandler<
  IPageable<IWineNote>
>(
  API_URL.WINE_NOTE,
  'get',
  {
    content: wineNotes,
    empty: false,
    first: true,
    last: true,
    number: 0,
    numberOfElements: 6,
    size: 10,
    totalElements: 6,
    totalPages: 1,
  },
  'real',
);

export const getWineNotesLoadingHandler = createMswHandler(
  API_URL.WINE_NOTE,
  'get',
  undefined,
  'infinite',
);

export const getWineNotesEmptyHandler = createMswHandler<IPageable<IWineNote>>(
  API_URL.WINE_NOTE,
  'get',
  {
    content: [],
    empty: true,
    first: true,
    last: true,
    number: 0,
    numberOfElements: 0,
    size: 10,
    totalElements: 0,
    totalPages: 1,
  },
  'real',
);

export const popularWineNotes: IWineNote[] = [
  {
    id: 2,
    wineId: 1,
    wineName: '장 로롱, 물랭아방',
    wineType: WINE_TYPE.RED,
    descript:
      '대고, 커다란 붙잡아 철환하였는가? 인간의 오직 주며, 보이는 때문이다. 일월과 보내는 천지는 것이다. 남는 그와 얼마나 끓는 것이다. 생생하며, 바이며, 설산에서 피는 주며, 이상, 없으면, 이것이다. 뛰노는 천하를 가치를 풀이 것이다. 속에 용감하고 하는 꾸며 희망의 튼튼하며, 가슴에 청춘의 말이다. 노년에게서 가지에 용기가 있으랴? 곧 군영과 이상 풀밭에 노래하며 것이다. 창공에 우리의 같은 얼음이 전인 아니한 청춘의 오아이스도 무한한 아니다. 붙잡아 속에서 실현에 무엇을 구하지 힘차게 두기 그리하였는가?',
    score: 4,
    userId: 3,
    userNickName: 'abcde',
    regDate: '2021-10-10T00:00:00',
    isLike: true,
    isPublic: true,
    viewCount: 2,
    likeCount: 2,
    wineImages: [],
  },
  {
    id: 10,
    wineId: 100,
    wineName: '라 피우 벨 로제',
    wineType: WINE_TYPE.ROSE,
    descript:
      '잘 익은 레드 베리와 살구, 패션 프루츠 시트러스 등의 상큼한 과실향과 함께 라벤더와 바이올렛 등의 아로마가 더해진다. 입 안에서는 풍성한 꽃향기와 둥글고 우아한 타닌감이 균형감 있으면서 드라이한 피니쉬를 보여주는 로제 와인이다.',
    score: 3,
    userId: 4,
    userNickName: 'helloworld',
    regDate: '2021-10-12T00:00:00',
    isLike: true,
    isPublic: true,
    viewCount: 0,
    likeCount: 0,
    wineImages: [
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
    descript: '2018 Wine Enthusiast Top 100 No.1',
    score: 5,
    userId: 2,
    userNickName: 'nickname123',
    regDate: '2021-10-12T00:00:00',
    isLike: false,
    isPublic: true,
    viewCount: 0,
    likeCount: 0,
    wineImages: [
      {
        id: 9,
        imagePath:
          'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/default_thumbnail_3.jpg',
        imageName: 'default_image_4',
      },
    ],
  },
];

export const getPopularWineNotesSuccessHandler = createMswHandler<IWineNote[]>(
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

export const getRelatedWineNotesSuccessHandler = createMswHandler<IWineNote[]>(
  API_URL.RELATED_WINE_NOTE,
  'get',
  wineNotes.slice(0, 2),
  'real',
);

export const getRelatedWineNotesEmptyHandler = createMswHandler<IWineNote[]>(
  API_URL.RELATED_WINE_NOTE,
  'get',
  [],
  'real',
);
