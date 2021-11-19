import { shuffle } from 'lodash-es';
import { rest } from 'msw';
import { API_URL } from '~/api/urls';
import { delayedResponse } from '~/helpers/msw';
import { IPageable, IWine, IWineDetail, WINE_TYPE } from '~/types';

export const wines: IWine[] = [
  {
    id: 421,
    wineName: '스칼리올라 프리모 바치오 모스카토 다스티',
    wineType: WINE_TYPE.WHITE,
    sweet: 5,
    scoreAverage: 0.0,
    reviewCount: 0,
    price: 25000,
    matchingFoods: [
      { imagePath: '', foodName: '디저트' },
      { imagePath: '', foodName: '치즈' },
      { imagePath: '', foodName: '과일' },
      { imagePath: '', foodName: '빵' },
    ],
    wineImage: {
      id: 421,
      imageName: 'wn_421.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_421.jpg',
    },
  },
  {
    id: 595,
    wineName: '지오코 피오레',
    wineType: WINE_TYPE.RED,
    sweet: 5,
    scoreAverage: 0.0,
    reviewCount: 0,
    price: 25000,
    matchingFoods: [
      { imagePath: '', foodName: '디저트' },
      { imagePath: '', foodName: '튀김' },
      { imagePath: '', foodName: '과일' },
      { imagePath: '', foodName: '닭고기' },
      { imagePath: '', foodName: '나쵸/소시지 등' },
    ],
    wineImage: {
      id: 595,
      imageName: 'wn_595.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_595.jpg',
    },
  },
  {
    id: 52,
    wineName: '도멘 슐룸베르거 게부르츠트라미너 뀌베 크리스틴 방당쥬 따르디브',
    wineType: WINE_TYPE.WHITE,
    sweet: 5,
    scoreAverage: 0.0,
    reviewCount: 0,
    price: 65000,
    matchingFoods: [{ imagePath: '', foodName: '치즈' }],
    wineImage: {
      id: 52,
      imageName: 'wn_52.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_52.jpg',
    },
  },
  {
    id: 714,
    wineName: '토카이 아쑤 5 푸토뇨스',
    wineType: WINE_TYPE.WHITE,
    sweet: 5,
    scoreAverage: 0.0,
    reviewCount: 0,
    price: 153000,
    matchingFoods: [
      { imagePath: '', foodName: '치즈' },
      { imagePath: '', foodName: '디저트' },
      { imagePath: '', foodName: '과일' },
    ],
    wineImage: {
      id: 714,
      imageName: 'wn_714.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_714.jpg',
    },
  },
  {
    id: 161,
    wineName: '루스토 VORS 페드로 히메네즈',
    wineType: WINE_TYPE.FORTIFIED,
    sweet: 5,
    scoreAverage: 0.0,
    reviewCount: 0,
    price: 210000,
    matchingFoods: [
      { imagePath: '', foodName: '치즈' },
      { imagePath: '', foodName: '디저트' },
    ],
    wineImage: {
      id: 161,
      imageName: 'wn_161.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_161.jpg',
    },
  },
  {
    id: 495,
    wineName: '오레무스 토카이 아쑤 3 푸토뇨스',
    wineType: WINE_TYPE.WHITE,
    sweet: 5,
    scoreAverage: 0.0,
    reviewCount: 0,
    price: 43124,
    matchingFoods: [
      { imagePath: '', foodName: '치즈' },
      { imagePath: '', foodName: '과일' },
      { imagePath: '', foodName: '디저트' },
    ],
    wineImage: {
      id: 495,
      imageName: 'wn_495.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_495.jpg',
    },
  },
  {
    id: 87,
    wineName: '라인가우 리슬링 키드리히 그래펜베르그 아우스레제',
    wineType: WINE_TYPE.WHITE,
    sweet: 5,
    scoreAverage: 0.0,
    reviewCount: 0,
    price: 112000,
    matchingFoods: [
      { imagePath: '', foodName: '해산물' },
      { imagePath: '', foodName: '향신료 요리' },
      { imagePath: '', foodName: '닭고기' },
      { imagePath: '', foodName: '붉은 육류' },
    ],
    wineImage: {
      id: 87,
      imageName: 'wn_87.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_87.jpg',
    },
  },
  {
    id: 440,
    wineName: '시즌스 비달 아이스와인',
    wineType: WINE_TYPE.SWEET,
    sweet: 5,
    scoreAverage: 0.0,
    reviewCount: 0,
    price: 28800,
    matchingFoods: [
      { imagePath: '', foodName: '오리고기' },
      { imagePath: '', foodName: '치즈' },
      { imagePath: '', foodName: '과일' },
      { imagePath: '', foodName: '디저트' },
    ],
    wineImage: {
      id: 440,
      imageName: 'wn_440.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_440.jpg',
    },
  },
  {
    id: 124,
    wineName: '레이크뷰 비달 아이스와인',
    wineType: WINE_TYPE.SWEET,
    sweet: 5,
    scoreAverage: 0.0,
    reviewCount: 0,
    price: 49000,
    matchingFoods: [
      { imagePath: '', foodName: '치즈' },
      { imagePath: '', foodName: '과일' },
      { imagePath: '', foodName: '디저트' },
    ],
    wineImage: {
      id: 124,
      imageName: 'wn_124.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_124.jpg',
    },
  },
  {
    id: 754,
    wineName: '트웬티 비스 비달 아이스와인',
    wineType: WINE_TYPE.SWEET,
    sweet: 5,
    scoreAverage: 0.0,
    reviewCount: 0,
    price: 35000,
    matchingFoods: [{ imagePath: '', foodName: '디저트' }],
    wineImage: {
      id: 754,
      imageName: 'wn_754.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_754.jpg',
    },
  },
  {
    id: 304,
    wineName: '벨트악스 아이스바인',
    wineType: WINE_TYPE.WHITE,
    sweet: 5,
    scoreAverage: 0.0,
    reviewCount: 0,
    price: 60000,
    matchingFoods: [
      { imagePath: '', foodName: '디저트' },
      { imagePath: '', foodName: '과일' },
    ],
    wineImage: {
      id: 304,
      imageName: 'wn_304.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_304.jpg',
    },
  },
  {
    id: 139,
    wineName: '로버트 바일 키드리히 그래펜베르그 아이스바인',
    wineType: WINE_TYPE.SWEET,
    sweet: 5,
    scoreAverage: 0.0,
    reviewCount: 0,
    price: 550000,
    matchingFoods: [{ imagePath: '', foodName: '디저트' }],
    wineImage: {
      id: 139,
      imageName: 'wn_139.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_139.jpg',
    },
  },
  {
    id: 162,
    wineName: '루스토 VOS 페드로 히메네즈',
    wineType: WINE_TYPE.FORTIFIED,
    sweet: 5,
    scoreAverage: 0.0,
    reviewCount: 0,
    price: 180000,
    matchingFoods: [
      { imagePath: '', foodName: '치즈' },
      { imagePath: '', foodName: '디저트' },
    ],
    wineImage: {
      id: 162,
      imageName: 'wn_162.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_162.jpg',
    },
  },
  {
    id: 420,
    wineName: '스칼리올라 돌체스바고',
    wineType: WINE_TYPE.WHITE,
    sweet: 5,
    scoreAverage: 0.0,
    reviewCount: 0,
    price: 17000,
    matchingFoods: [
      { imagePath: '', foodName: '디저트' },
      { imagePath: '', foodName: '치즈' },
      { imagePath: '', foodName: '과일' },
      { imagePath: '', foodName: '나쵸/소시지 등' },
    ],
    wineImage: {
      id: 420,
      imageName: 'wn_420.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_420.jpg',
    },
  },
  {
    id: 616,
    wineName: '칸티 모스카토 다스티 DOCG 골드 에디션',
    wineType: WINE_TYPE.WHITE,
    sweet: 5,
    scoreAverage: 0.0,
    reviewCount: 0,
    price: 25000,
    matchingFoods: [
      { imagePath: '', foodName: '디저트' },
      { imagePath: '', foodName: '치즈' },
      { imagePath: '', foodName: '나쵸/소시지 등' },
      { imagePath: '', foodName: '과일' },
      { imagePath: '', foodName: '향신료 요리' },
    ],
    wineImage: {
      id: 616,
      imageName: 'wn_616.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_616.jpg',
    },
  },
  {
    id: 336,
    wineName: '브리갈다라 레치오토',
    wineType: WINE_TYPE.SWEET,
    sweet: 5,
    scoreAverage: 0.0,
    reviewCount: 0,
    price: 43000,
    matchingFoods: [
      { imagePath: '', foodName: '치즈' },
      { imagePath: '', foodName: '디저트' },
    ],
    wineImage: {
      id: 336,
      imageName: 'wn_336.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_336.jpg',
    },
  },
];

export const wineDetails: IWineDetail[] = [
  {
    id: 421,
    wineName: '스칼리올라 프리모 바치오 모스카토 다스티',
    wineNameEn: "Scagliola Primo Bacio Moscato d'Asti DOCG",
    varieties: ['모스카토 비앙코 100%'],
    region: '이태리',
    wineType: WINE_TYPE.WHITE,
    sweet: 5,
    acidity: 3,
    body: 2,
    capacity: 750,
    price: 25_000,
    wineImage: {
      id: 421,
      imageName: 'wn_421.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_421.jpg',
    },
    reviewCount: 20,
    scoreAverage: 3.5,
    matchingFoods: [
      { imagePath: '', foodName: '디저트' },
      { imagePath: '', foodName: '치즈' },
      { imagePath: '', foodName: '과일' },
      { imagePath: '', foodName: '빵' },
    ],
    isRefrigerated: false,
    refrigeratedCount: 10,
  },
  {
    id: 595,
    wineName: '지오코 피오레',
    wineNameEn: 'Gioco Fiore',
    varieties: ['브라케토 100%'],
    region: '이태리',
    wineType: WINE_TYPE.RED,
    sweet: 5,
    acidity: 3,
    body: 3,
    capacity: 750,
    price: 25_000,
    wineImage: {
      id: 595,
      imageName: 'wn_595.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_595.jpg',
    },
    reviewCount: 2,
    scoreAverage: 4.0,
    matchingFoods: [
      { imagePath: '', foodName: '디저트' },
      { imagePath: '', foodName: '튀김' },
      { imagePath: '', foodName: '과일' },
      { imagePath: '', foodName: '닭고기' },
      { imagePath: '', foodName: '나쵸/소시지 등' },
    ],
    isRefrigerated: false,
    refrigeratedCount: 0,
  },
  {
    id: 595,
    wineName: '지오코 피오레',
    wineNameEn: 'Gioco Fiore',
    varieties: ['브라케토 100%'],
    region: '이태리',
    wineType: WINE_TYPE.RED,
    sweet: 5,
    acidity: 3,
    body: 3,
    capacity: 750,
    price: 25_000,
    wineImage: {
      id: 595,
      imageName: 'wn_595.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_595.jpg',
    },
    reviewCount: 100,
    scoreAverage: 4.5,
    matchingFoods: [
      { imagePath: '', foodName: '디저트' },
      { imagePath: '', foodName: '튀김' },
      { imagePath: '', foodName: '과일' },
      { imagePath: '', foodName: '닭고기' },
      { imagePath: '', foodName: '나쵸/소시지 등' },
    ],
    isRefrigerated: true,
    refrigeratedCount: 0,
  },
  {
    id: 714,
    wineName: '토카이 아쑤 5 푸토뇨스',
    wineNameEn: 'Tokaji Aszu 5 Puttonyos',
    varieties: ['푸르민트70%', '하르쉬레벨류25%', '무스카드뤼넬5%'],
    region: '헝가리',
    wineType: WINE_TYPE.WHITE,
    sweet: 5,
    acidity: 3,
    body: 4,
    capacity: 500,
    price: 153_000,
    wineImage: {
      id: 714,
      imageName: 'wn_714.jpg',
      imagePath:
        'https://codepipeline-ap-northeast-2-299742750115.s3.ap-northeast-2.amazonaws.com/wine-image/wn_714.jpg',
    },
    reviewCount: 0,
    scoreAverage: 0.0,
    matchingFoods: [
      { imagePath: '', foodName: '치즈' },
      { imagePath: '', foodName: '디저트' },
      { imagePath: '', foodName: '과일' },
    ],
    isRefrigerated: true,
    refrigeratedCount: 0,
  },
];

export const getWinesHandler = rest.get(API_URL.WINE, (req, res, ctx) => {
  const page = Number(req.url.searchParams.get('page') || 0);
  const size = wines.length; // 16
  const totalPages = 20;

  return delayedResponse(
    ctx.json<IPageable<IWine>>({
      content: shuffle(wines),
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
});

export const getWineHandler = rest.get(
  `${API_URL.WINE}/:wineId`,
  (req, res, ctx) => {
    const { wineId } = req.params;
    const wineDetail = wineDetails.find((item) => item.id === Number(wineId));
    return delayedResponse(ctx.json<IWineDetail>(wineDetail || wineDetails[0]));
  },
);
