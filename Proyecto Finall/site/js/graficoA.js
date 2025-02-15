const labels3 = ['1965', '1966','1967', '1968','1969', '1970','1971', '1972','1973', '1974','1975', '1976','1977', '1978','1979', '1980','1981', '1982','1983', '1984','1985', '1986','1987', '1988','1989', '1990','1991', '1992','1993', '1994','1995', '1996','1997','1998', '1999', '2000', '2001','2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021']

const dataset1 = {
    label: "Colombia",
    
    data: [3.54, 3.93, 4.38, 4.89, 5.4379735, 6.05274, 6.4234085, 7.115021, 7.7433486, 8.7920685,9.7323,10.22642,
        10.451812,
        12.07144,
        13.2593,
        14.44702,
        14.26534,
        15.238536,
        15.365776,
        17.14022,
        18.440771,
        21.332952,
        23.24756,
        24.5194,
        26.78212,
        27.495852,
        27.72608,
        22.280584,
        27.856392,
        32.05839,
        31.9894,
        35.287624,
        31.47576,
        30.781685,
        33.700657,
        30.815718,
        31.632658,
        33.968037,
        36.17636,
        38.33006,
        39.220886,
        42.55789,
        44.24198,
        46.16088,
        40.837364,
        40.55746,
        48.42748,
        47.58171,
        44.36279,
        44.741962,
        44.681904,
        46.787926,
        57.32773,
        56.65124,
        54.437,
        49.83735, 59.858196,],
    borderColor: 'rgba(248, 37, 37, 0.8)',
    backgroundColor:'rgba(251, 255, 0, 0.16)',
   
    fill: true,
    tension: 0.1
    
};


const graph3 = document.querySelector("#grafica3");

const data3 = {
    labels: labels3,
    datasets: [dataset1]
};

const config3 = {
    type: 'line',
    data: data3,
};

new Chart(graph3, config3);