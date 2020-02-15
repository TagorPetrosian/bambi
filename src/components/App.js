import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import Topics from './topics/Topics';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 120rem;
  min-height: 50rem;
  margin: 0 auto;
`;

const App = () => {
  const [data, setData] = useState(null);

  //Mount
  useEffect(() => {
    setData({
      topics: [
        {
          title: 'דילים חדשים',
          deals: [
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            },
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            },
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            },
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            },
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            },
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            }
          ]
        },
        {
          title: 'דילים חדשים',
          deals: [
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            },
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            },
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            },
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            },
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            },
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            }
          ]
        },
        {
          title: 'דילים חדשים',
          deals: [
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            },
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            },
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            },
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            },
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            },
            {
              deal: 'מנוי לחדר כושר',
              price: 23,
              rating: 2,
              bought: 34,
              sponsor: 'sponsor name',
              imgSrc: 'https://picsum.photos/200/300'
            }
          ]
        }
      ]
    });
  }, []);

  return (
    <Wrapper>
      <Header />
      <Topics topics={data?.topics} />
    </Wrapper>
  );
};

export default App;
