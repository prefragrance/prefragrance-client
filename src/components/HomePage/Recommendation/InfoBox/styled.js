import styled from 'styled-components';

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: auto auto;
  gap: 0.5rem;
`;

export const Img = styled.img`
  width: 180px;
  height: 250px;
  background-color: #f0f0f0;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Brand = styled.div`
  font-size: 0.8rem;
`;
