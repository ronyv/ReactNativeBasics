
// fixed format dd-mm-yyyy
export function dateString2Date(dateString) {
  var bits = dateString.split(/\D/);
  var dateTime = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);
  return dateTime;
}

export const chartDataJson = [
  
        {
            "currencyPair": "XAU/USD",
            "isOnlinePrice": "N",
            "date": "10-01-2018 12:00:00",
            "offer": 1321.5,
            "bid": 1321.34
        },
        {
            "currencyPair": "XAU/USD",
            "isOnlinePrice": "N",
            "date": "10-01-2018 11:59:59",
            "offer": 1321.5,
            "bid": 1321.34
        },

		{
            "currencyPair": "XAU/USD",
            "isOnlinePrice": "N",
            "date": "10-01-2018 11:59:56",
            "offer": 1321.58,
            "bid": 1321.42
        },
        {
            "currencyPair": "XAU/USD",
            "isOnlinePrice": "N",
            "date": "10-01-2018 11:59:55",
            "offer": 1321.62,
            "bid": 1321.36
        },
        {
            "currencyPair": "XAU/USD",
            "isOnlinePrice": "N",
            "date": "10-01-2018 11:59:55",
            "offer": 1321.58,
            "bid": 1321.42
        },
		{
            "currencyPair": "XAU/USD",
            "isOnlinePrice": "N",
            "date": "10-01-2018 11:59:55",
            "offer": 1321.62,
            "bid": 1321.36
        },
        {
            "currencyPair": "XAU/USD",
            "isOnlinePrice": "N",
            "date": "10-01-2018 11:59:53",
            "offer": 1321.61,
            "bid": 1321.36
        },
        {
            "currencyPair": "XAU/USD",
            "isOnlinePrice": "N",
            "date": "10-01-2018 11:59:53",
            "offer": 1321.62,
            "bid": 1321.36
        },
        {
            "currencyPair": "XAU/USD",
            "isOnlinePrice": "N",
            "date": "10-01-2018 11:59:52",
            "offer": 1321.52,
            "bid": 1321.36
        },
        {
            "currencyPair": "XAU/USD",
            "isOnlinePrice": "N",
            "date": "10-01-2018 11:59:52",
            "offer": 1321.62,
            "bid": 1321.36
        },
        {
            "currencyPair": "XAU/USD",
            "isOnlinePrice": "N",
            "date": "10-01-2018 11:59:51",
            "offer": 1321.62,
            "bid": 1321.46
        },
        {
            "currencyPair": "XAU/USD",
            "isOnlinePrice": "N",
            "date": "10-01-2018 11:59:51",
            "offer": 1321.52,
            "bid": 1321.36
        },
        {
            "currencyPair": "XAU/USD",
            "isOnlinePrice": "N",
            "date": "10-01-2018 11:59:50",
            "offer": 1321.62,
            "bid": 1321.46
        }

];
