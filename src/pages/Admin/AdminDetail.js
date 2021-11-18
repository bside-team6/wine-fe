import {
  CButton,
  CForm,
  CFormInput,
  CFormSwitch,
  CImage,
  CInputGroup,
  CInputGroupText,
  CSpinner,
} from '@coreui/react';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getWine } from '~/api/admin';
import RadioGroup from '~/components/admin/RadioGroup';

function AdminDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = useQuery(['get-wine', id], () => getWine(id));

  const handleDelete = async () => {
    if (window.confirm('해당 와인을 삭제하시겠습니까?')) {
      await fetch(`/api/v1/wine/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((res) => {
          if (!res.result) alert(res.message);
          else {
            navigate('/admin');
          }
        });
    }
  };

  if (isLoading) {
    return (
      <div className="my-5 d-flex justify-content-center">
        <CSpinner color="primary" />
      </div>
    );
  }
  return (
    <CForm className="row g-3 needs-validation" noValidate>
      <CInputGroup className="mb-3">
        <CInputGroupText>
          <Required>*</Required>와인등록번호
        </CInputGroupText>
        <CFormInput
          id="basic-url"
          aria-describedby="basic-addon3"
          readOnly
          value={data.id}
        />
        <CInputGroupText>공개여부</CInputGroupText>
        <FormSwitch>
          <CFormSwitch
            id="formSwitchCheckDefault"
            size="lg"
            checked={data.public}
          />
        </FormSwitch>
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText>
          <Required>*</Required>와인명(한글)
        </CInputGroupText>
        <CFormInput value={data.nameKr} />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText>
          <Required>*</Required>와인명(영문)
        </CInputGroupText>
        <CFormInput value={data.nameEn} />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText>
          <Required>*</Required>종류
        </CInputGroupText>

        <RadioGroup
          name="wineType"
          checkedVal={data.type}
          data={[
            { RED: '레드' },
            { WHITE: '화이트' },
            { SPARK: '스파클링' },
            { ROSE: '로제' },
          ]}
        />
      </CInputGroup>
      <CInputGroup className="mb-3">
        <CInputGroupText>
          <Required>*</Required>품종
        </CInputGroupText>
        <CFormInput value={data.wineVariety.name} />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon">
          <Required>*</Required>생산지
        </CInputGroupText>
        <CFormInput value={data.wineRegion.nameKr} />
      </CInputGroup>

      {detailType.map((key) => {
        let detailType = 0;
        if (key.id === 'sweet') detailType = data.sweet;
        else if (key.id === 'acidity') detailType = data.acidity;
        else if (key.id === 'body') detailType = data.body;
        else if (key.id === 'tannin') detailType = data.tannin;
        return (
          <CInputGroup className="mb-3" key={key.id}>
            <CInputGroupText>
              <Required>*</Required>
              {key.name}
            </CInputGroupText>
            <RadioGroup
              name={key.id}
              type="wineSteps"
              checkedVal={detailType}
              data={[
                { 1: '1단계' },
                { 2: '2단계' },
                { 3: '3단계' },
                { 4: '4단계' },
                { 5: '5단계' },
              ]}
            />
          </CInputGroup>
        );
      })}

      <CInputGroup className="mb-3">
        <CInputGroupText>알코올도수</CInputGroupText>
        <CFormInput value={data.alchol} />
      </CInputGroup>
      <CInputGroup className="mb-3">
        <CInputGroupText>가격(한화)</CInputGroupText>
        <CFormInput value={data.priceMinKrw} />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText>와인이미지</CInputGroupText>
        <div className="clearfix">
          <CImage
            fluid
            rounded
            thumbnail
            src={data.wineImage?.imagePath || ''}
            width={200}
            height={200}
          />
        </div>
      </CInputGroup>
      <CInputGroup className="mb-3">
        <CInputGroupText>
          <Required>*</Required>어울리는 음식
        </CInputGroupText>
        <CFormInput value={data.foods.map((food) => food.foodName)} />
      </CInputGroup>
      <CButton onClick={handleDelete} color="primary">
        삭제
      </CButton>
    </CForm>
  );
}

export default AdminDetail;

const detailType = [
  { id: 'sweet', name: '당도', steps: 5 },
  { id: 'acidity', name: '산도', steps: 5 },
  { id: 'body', name: '바디', steps: 5 },
  { id: 'tannin', name: '타닌', steps: 5 },
];

const Required = styled.span`
  color: red;
  margin-right: 5px;
`;

const FormSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`;
