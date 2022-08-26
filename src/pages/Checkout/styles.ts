import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100%;
  margin-top: 2.5rem;

  display: flex;
  gap: 2rem;
`

export const CompleteOrder = styled.div`
  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 0.938rem;
  }
`

export const BaseCompleteOrderCard = styled.div`
  width: 40rem;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  h4 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.125rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    margin-left: 1.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const SelectedCoffees = styled.div`
  width: 100%;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 0.938rem;
  }
`

export const OrderCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
`

export const EmptyCard = styled.p`
  padding-bottom: 2.094rem;
  margin-bottom: 2.094rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  font-size: 1.1rem;
  text-align: center;
`
