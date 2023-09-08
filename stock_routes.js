const express = require('express');
const router = express.Router();
const stockNameJSON = [
    {
      "symbol": "MMM",
      "name": "3M Company"
    },
    {
      "symbol": "AOS",
      "name": "A.O. Smith Corp"
    },
    {
      "symbol": "ABT",
      "name": "Abbott Laboratories"
    },
    {
      "symbol": "ABBV",
      "name": "AbbVie Inc."
    },
    {
      "symbol": "ACN",
      "name": "Accenture plc"
    },
    {
      "symbol": "ATVI",
      "name": "Activision Blizzard"
    },
    {
      "symbol": "AYI",
      "name": "Acuity Brands Inc"
    },
    {
      "symbol": "ADBE",
      "name": "Adobe Systems Inc"
    },
    {
      "symbol": "AAP",
      "name": "Advance Auto Parts"
    },
    {
      "symbol": "AMD",
      "name": "Advanced Micro Devices Inc"
    },
    {
      "symbol": "AES",
      "name": "AES Corp"
    },
    {
      "symbol": "AET",
      "name": "Aetna Inc"
    },
    {
      "symbol": "AMG",
      "name": "Affiliated Managers Group Inc"
    },
    {
      "symbol": "AFL",
      "name": "AFLAC Inc"
    },
    {
      "symbol": "A",
      "name": "Agilent Technologies Inc"
    },
    {
      "symbol": "APD",
      "name": "Air Products & Chemicals Inc"
    },
    {
      "symbol": "AKAM",
      "name": "Akamai Technologies Inc"
    },
    {
      "symbol": "ALK",
      "name": "Alaska Air Group Inc"
    },
    {
      "symbol": "ALB",
      "name": "Albemarle Corp"
    },
    {
      "symbol": "ARE",
      "name": "Alexandria Real Estate Equities Inc"
    },
    {
      "symbol": "ALXN",
      "name": "Alexion Pharmaceuticals"
    },
    {
      "symbol": "ALGN",
      "name": "Align Technology"
    },
    {
      "symbol": "ALLE",
      "name": "Allegion"
    },
    {
      "symbol": "AGN",
      "name": "Allergan, Plc"
    },
    {
      "symbol": "ADS",
      "name": "Alliance Data Systems"
    },
    {
      "symbol": "LNT",
      "name": "Alliant Energy Corp"
    },
    {
      "symbol": "ALL",
      "name": "Allstate Corp"
    },
    {
      "symbol": "GOOGL",
      "name": "Alphabet Inc Class A"
    },
    {
      "symbol": "GOOG",
      "name": "Alphabet Inc Class C"
    }];

const stockPricesJSON = [
    {
      "symbol": "MMM",
      "price": 222.89,
      "52-week-low": 259.77,
      "52-week-high": 175.49
    },
    {
      "symbol": "AOS",
      "price": 60.24,
      "52-week-low": 68.39,
      "52-week-high": 48.925
    },
    {
      "symbol": "ABT",
      "price": 56.27,
      "52-week-low": 64.6,
      "52-week-high": 42.28
    },
    {
      "symbol": "ABBV",
      "price": 108.48,
      "52-week-low": 125.86,
      "52-week-high": 60.05
    },
    {
      "symbol": "ACN",
      "price": 150.51,
      "52-week-low": 162.6,
      "52-week-high": 114.82
    },
    {
      "symbol": "ATVI",
      "price": 65.83,
      "52-week-low": 74.945,
      "52-week-high": 38.93
    },
    {
      "symbol": "AYI",
      "price": 145.41,
      "52-week-low": 225.36,
      "52-week-high": 142
    },
    {
      "symbol": "ADBE",
      "price": 185.16,
      "52-week-low": 204.45,
      "52-week-high": 114.451
    },
    {
      "symbol": "AAP",
      "price": 109.63,
      "52-week-low": 169.55,
      "52-week-high": 78.81
    },
    {
      "symbol": "AMD",
      "price": 11.22,
      "52-week-low": 15.65,
      "52-week-high": 9.7
    },
    {
      "symbol": "AES",
      "price": 10.06,
      "52-week-low": 12.05,
      "52-week-high": 10
    },
    {
      "symbol": "AET",
      "price": 178,
      "52-week-low": 194.4,
      "52-week-high": 119.51
    },
    {
      "symbol": "AMG",
      "price": 179.11,
      "52-week-low": 216.995,
      "52-week-high": 148.81
    },
    {
      "symbol": "AFL",
      "price": 83.25,
      "52-week-low": 91.73,
      "52-week-high": 68.8
    },
    {
      "symbol": "APD",
      "price": 152.8,
      "52-week-low": 175.17,
      "52-week-high": 133.6301
    },
    {
      "symbol": "AKAM",
      "price": 62.49,
      "52-week-low": 69.56,
      "52-week-high": 44.65
    },
    {
      "symbol": "ALK",
      "price": 64.04,
      "52-week-low": 101.43,
      "52-week-high": 59.25
    },
    {
      "symbol": "ALB",
      "price": 105.18,
      "52-week-low": 144.99,
      "52-week-high": 90.35
    },
    {
      "symbol": "ARE",
      "price": 114.58,
      "52-week-low": 134.37,
      "52-week-high": 106.89
    },
    {
      "symbol": "ALXN",
      "price": 108.47,
      "52-week-low": 149.34,
      "52-week-high": 96.18
    },
    {
      "symbol": "ALGN",
      "price": 220.71,
      "52-week-low": 287.32,
      "52-week-high": 92.61
    },
    {
      "symbol": "ALLE",
      "price": 77.32,
      "52-week-low": 89.81,
      "52-week-high": 66.72
    },
    {
      "symbol": "AGN",
      "price": 164.2,
      "52-week-low": 256.8,
      "52-week-high": 160.07
    },
    {
      "symbol": "ADS",
      "price": 240.6,
      "52-week-low": 278.33,
      "52-week-high": 209
    },
    {
      "symbol": "LNT",
      "price": 37.14,
      "52-week-low": 45.55,
      "52-week-high": 36.84
    },
    {
      "symbol": "ALL",
      "price": 90.06,
      "52-week-low": 105.36,
      "52-week-high": 77.73
    },
    {
      "symbol": "GOOGL",
      "price": 1007.71,
      "52-week-low": 1198,
      "52-week-high": 824.3
    },
    {
      "symbol": "GOOG",
      "price": 1001.52,
      "52-week-low": 1186.89,
      "52-week-high": 803.1903
    }
  ]

const stockMarketCapJSON = [
    {
      "symbol": "MMM",
      "market-cap": 138721055226
    },
    {
      "symbol": "AOS",
      "market-cap": 10783419933
    },
    {
      "symbol": "ABT",
      "market-cap": 102121042306
    },
    {
      "symbol": "ABBV",
      "market-cap": 181386347059
    },
    {
      "symbol": "ACN",
      "market-cap": 98765855553
    },
    {
      "symbol": "ATVI",
      "market-cap": 52518668144
    },
    {
      "symbol": "AYI",
      "market-cap": 6242377704
    },
    {
      "symbol": "ADBE",
      "market-cap": 94550214268
    },
    {
      "symbol": "AAP",
      "market-cap": 8123611867
    },
    {
      "symbol": "AMD",
      "market-cap": 11191663795
    },
    {
      "symbol": "AES",
      "market-cap": 6920851212
    },
    {
      "symbol": "AET",
      "market-cap": 59197016353
    },
    {
      "symbol": "AMG",
      "market-cap": 10442174371
    },
    {
      "symbol": "AFL",
      "market-cap": 33422948000
    },
    {
      "symbol": "A",
      "market-cap": 21984606918
    },
    {
      "symbol": "APD",
      "market-cap": 34638387128
    },
    {
      "symbol": "AKAM",
      "market-cap": 10906904066
    },
    {
      "symbol": "ALK",
      "market-cap": 7903173734
    },
    {
      "symbol": "ALB",
      "market-cap": 11782151266
    },
    {
      "symbol": "ARE",
      "market-cap": 12043374429
    },
    {
      "symbol": "ALXN",
      "market-cap": 26172439795
    },
    {
      "symbol": "ALGN",
      "market-cap": 18788041378
    },
    {
      "symbol": "ALLE",
      "market-cap": 7599609494
    },
    {
      "symbol": "AGN",
      "market-cap": 56668833898
    },
    {
      "symbol": "ADS",
      "market-cap": 13632608582
    },
    {
      "symbol": "LNT",
      "market-cap": 8670163500
    },
    {
      "symbol": "ALL",
      "market-cap": 34759468905
    },
    {
      "symbol": "GOOGL",
      "market-cap": 733823966137
    },
    {
      "symbol": "GOOG",
      "market-cap": 728535558140
    }]


router.get('/stock-symbols', (req, res) => {
    return res.status(200).json(stockNameJSON)
})
router.get('/stock-prices', (req, res) => {
    const symbolsQueryParam = req.query.symbols;
    
    if (!symbolsQueryParam) {
        res.status(400).json({ error: "Symbols parameter is missing" });
        return;
    }
    
    const symbolsArray = JSON.parse(symbolsQueryParam);
    console.log(symbolsArray);
    
    function filterAndFormatStockData(symbols) {
        // const filtered = stockPricesJSON.filter(stock => ['MMM', 'AOS', 'ABT'].includes(stock.symbol))
        const filtered = stockPricesJSON.filter(stock => symbols.includes(stock.symbol))
        // console.log(filtered)
        // .map(stock => ({
        //     symbol: stock.symbol,
        //     price: stock.price,
        //     "52-week-low": stock["52-week-low"],
        //     "52-week-high": stock["52-week-high"],
        // }));
    }

    const result = filterAndFormatStockData(symbolsArray);
    
    res.json(result);
});

router.get('/stock-market-caps', (req, res) => {
    return res.status(200).json(stockMarketCapJSON)
})

module.exports = router;