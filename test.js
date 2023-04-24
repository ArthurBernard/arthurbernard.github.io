/*const reponse = fetch("./test.json")
const data = reponse.json();*/
/*onst reponse = await fetch('./pieces-autos.json');
const pieces = await reponse.json();*/
const data = [
  {
    "date": "2023-04-01",
    "open": 100,
    "close": 110,
    "high": 120,
    "low": 90
  },
  {
    "date": "2023-04-02",
    "open": 110,
    "close": 105,
    "high": 115,
    "low": 100
  },
  {
    "date": "2023-04-03",
    "open": 105,
    "close": 105,
    "high": 105,
    "low": 95
  },
  {
    "date": "2023-04-04",
    "open": 100,
    "close": 125,
    "high": 125,
    "low": 100
  }
]


const chartContainer = document.getElementById('candlestick-chart');
const chartHeight = chartContainer.offsetHeight;

const maxHigh = Math.max(...data.map(d => d.high));
const minLow = Math.min(...data.map(d => d.low));

const scaleY = chartHeight / (maxHigh - minLow);

data.forEach(d => {
  const candlestick = document.createElement('div');
  const wick = document.createElement('div');
  const body = document.createElement('div');

  const isBullish = d.close >= d.open;
  const bodyHeight = Math.abs(d.close - d.open);
  const wickHeight = d.high - d.low;

  candlestick.className = `candlestick ${isBullish ? 'bullish' : 'bearish'}`;
  wick.className = 'wick';
  body.className = 'body';

  wick.style.height = `${wickHeight}px`;
  body.style.height = `${bodyHeight}px`;

  /*if (isBullish) {
    wick.style.top = `${d.high - d.close}px`;
    body.style.top = `${d.close - d.open}px`;
  } else {
    wick.style.top = `${d.high - d.open}px`;
    body.style.top = '0';
  }*/

  wick.style.bottom = `${d.low}px`;
  body.style.bottom = `${Math.min(d.close, d.open)}px`;

  candlestick.appendChild(wick);
  candlestick.appendChild(body);
  chartContainer.appendChild(candlestick);
});
