import Creatable from 'react-select/creatable';

const aquaticCreatures = [
  { label: '롯데마트', value: '롯데마트' },
  { label: '이마트', value: '이마트' },
  { label: '홈플러스', value: '홈플러스' },
  { label: '코스트코', value: '코스트코' },
  { label: '트레이더스', value: '트레이더스' },
];

function MultiSelect({ handleInput }) {
  // FIXME: className이 App?
  return (
    <div className="App">
      <Creatable options={aquaticCreatures} isMulti onChange={handleInput} />
    </div>
  );
}

export default MultiSelect;
