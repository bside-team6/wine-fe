import styled from '@emotion/styled';

const Divider = styled.hr`
  width: 0;
  height: 12px;
  border: 0;
  border-right: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  margin-left: 8px;
  margin-right: 8px;
  align-self: stretch;
  flex-shrink: 0;
`;

export default Divider;
