import styled from 'styled-components'

export const SuccessContainer = styled.main`
  width: 100%;
  margin-top: 5.25rem;

  display: flex;
  align-items: flex-end;
  gap: 6.375rem;
`
export const ConfirmedOrder = styled.div`
  min-width: 32.875rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 1.3;
  }

  > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    margin-top: 2.5rem;
    padding: 2.5rem;
    background: ${(props) => props.theme.background};
    position: relative;

    border-radius: 6px 36px 6px 36px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
      margin: -1px;
      z-index: -1;
      border-radius: 7px 37px 7px 37px;
    }
  }
`
export const OrderInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & + div {
    margin-top: 2rem;
  }

  p {
    line-height: 1.3;
  }
`
