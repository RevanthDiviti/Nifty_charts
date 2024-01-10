// Heatmap.js
import React, { useState } from 'react';
import Heatmap from 'react-heatmap-grid';
import { FaSort } from 'react-icons/fa';

const generateData = () => {
  const data = [];
  for (let i = 0; i < 30; i++) {
    const row = [];
    for (let j = 0; j < 12; j++) {
      row.push((Math.random() * 5).toFixed(1)); // Generate random decimal values between 0 and 5.0
    }
    data.push(row);
  }
  return data;
};

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const xLabels = months;
const yLabels = Array.from({ length: 30 }, (_, i) => `${100 + i}`);

const Map_2 = () => {
  const [data, setData] = useState(generateData());
  const [sortOrder, setSortOrder] = useState({
    column: null,
    ascending: true,
  });

  const handleSort = (column) => {
    setSortOrder(prevSortOrder => ({
      column,
      ascending: column === prevSortOrder.column ? !prevSortOrder.ascending : true,
    }));

    const sortedData = [...data].sort((a, b) => {
      return sortOrder.ascending ? a[months.indexOf(column)] - b[months.indexOf(column)] : b[months.indexOf(column)] - a[months.indexOf(column)];
    });

    setData(sortedData);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        {xLabels.map((label) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaSort
              color={sortOrder.column === label ? 'blue' : 'black'}
              onClick={() => handleSort(label)}
              style={{ cursor: 'pointer' }}
            />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <Heatmap
        data={data}
        xLabels={xLabels}
        yLabels={yLabels}
        height={50}
        width={600}
        backgroundColor="#eeeeee"
        xLabelWidth={60}
        cellStyle={(background, value, min, max, data, x, y) => {
          const color = value < 2.5 ? `rgba(255, 0, 0, ${value / 2.5})` : `rgba(0, 128, 0, ${1 - (max - value) / (max - 2.5)})`;
          return {
            background: color,
            fontSize: '11px',
            border: '1px solid #ffffff',
          };
        }}
        cellRender={(value) => value && `${parseFloat(value).toFixed(1)}`}
      />
    </div>
  );
};

export default Map_2;
