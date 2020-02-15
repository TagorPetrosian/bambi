import React from 'react';
import Deals from './deals/Deals';
import styled from 'styled-components';
import uuid from 'uuid';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Topics = ({ topics }) => {
  const renderTopics = () => {
    return topics?.map(topic => {
      return <Deals key={uuid()} deals={topic.deals} title={topic.title} />;
    });
  };

  return <Wrapper>{renderTopics()}</Wrapper>;
};

export default Topics;
