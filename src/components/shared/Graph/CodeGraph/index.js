import React from 'react';
import ApexChart from 'react-apexcharts';
import { Container } from './styled';

const index = () => {
  return (
    <Container>
      메인 코드 그래프
      <ApexChart
        type="bar"
        options={{
          chart: {
            type: 'bar',
            height: 200,
            background: 'transparent',
          },
          yaxis: { show: false },
          xaxis: { show: false },
          plotOptions: { bar: { horizontal: true } },
        }}
        series={[
          { name: '베르가못', data: 100 },
          { name: '시트러스', data: 60 },
          { name: '트로피컬', data: 50 },
        ]}
      />
    </Container>
  );
};

export default index;
