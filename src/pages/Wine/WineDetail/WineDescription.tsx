import type { IWineDetail } from '~/types';

const WineDescription: React.VFC<IWineDetail> = ({
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
      <img src="" alt="" />
      <div>
        이 와인은 프랑스산 레드와인 이에요. 약간 달달하고, 산미가 강해서
        <br />
        스테이크, 삼겹살과 같은 붉은 육류에 잘 어울리는 와인이에요!
      </div>
    </div>
  );
};

export default WineDescription;
