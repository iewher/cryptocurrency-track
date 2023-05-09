import React from 'react';
import './style/coin-style.css';

export default function Coin({ data }) {
  console.log(data);
  return (
    <div className='coin'>
      <div className='coin-body'>
        <div className='coin-table'>
          {data && Object.keys(data).length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Coin</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {data.map(coin => (
                  <tr key={coin.id}>
                    <td>{coin.DISPLAY.USD.FROMSYMBOL}</td>
                    <td>{coin.RAW.USD.PRICE}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  );
}
