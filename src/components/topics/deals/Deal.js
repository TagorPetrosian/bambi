import React from 'react';
import styled from 'styled-components';
import img from '../../../flower.jpeg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #d1cece;
  transition: transform 0.2s;

  &:hover {
    border: 1px solid #0eb149;
    transform: translateY(-0.5rem);
    cursor: pointer;
  }
`;

const Img = styled.img`
  height: 12rem;
  width: 17rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Price = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0.5rem;
  color: #0eb149;
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.5rem;
`;

const From = styled.span`
  font-size: 1.3rem;
  padding-left: 0.2rem;
`;

const Amount = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  padding-left: 0.3rem;
`;

const Currency = styled.span`
  font-size: 1.3rem;
`;

const Rating = styled.div`
  font-size: 1.6rem;
  padding: 0.5rem;
`;

const SmallText = styled.span`
  color: #0eb149;
  padding: 0.5rem;
  font-size: 1.3rem;
`;

const stars = '☆☆☆☆☆';

const Deal = ({ deal: { deal, price, rating, bought, sponsor, imgSrc } }) => {
  return (
    <Wrapper>
      <Img src={img} />
      <Details>
        <Row>
          <Title>{deal}</Title>
          <Price>
            <From>{'מ-'}</From>
            <Amount>{price}</Amount>
            <Currency>{'₪'}</Currency>
          </Price>
        </Row>
        <Rating>{stars.slice(0, rating)}</Rating>
        <Row>
          <SmallText>{sponsor}</SmallText>
          <SmallText>
            {'נקנו '}
            {bought}
          </SmallText>
        </Row>
      </Details>
    </Wrapper>
  );
};

export default Deal;
