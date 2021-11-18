import type { IWineDetail } from '~/types';

const AboutWine: React.VFC<IWineDetail> = ({
  id,
  wineImage,
  wineType,
  wineName,
  wineNameEn,
  sweet,
  scoreAverage,
  reviewCount,
  isRefrigerated,
  refrigeratedCount,
  region,
  acidity,
  body,
  capacity,
  matchingFoods,
  price,
  varieties,
}) => {
  return (
    <div>
      <div>
        <div>와인게이지</div>
        <div></div>
      </div>
      <div>
        <div>함께하면 좋은 음식</div>
        <div></div>
        <div>출몰이 예상되는 매장</div>
        <div></div>
      </div>
    </div>
  );
};

export default AboutWine;
