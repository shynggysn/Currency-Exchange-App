$(document).ready(()=>{
  let currenciesList = $('.add-currency-list')
  let selectedCurrencies = $('.currencies')
  let baseCurrency
  let baseCurrencyAmount
  let date
  const BASE_URL = 'https://api.ratesapi.io/api/'
  let initialCurrencies = ['EUR','USD','GBP','RUB','CHF']
  let currencies = [
      {
        name: "US Dollar",
        abbreviation: "USD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/us.gif"
      },
      {
        name: "Euro",
        abbreviation: "EUR",
        symbol: "\u20AC",
        flagURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
      },
      {
        name: "Japanese Yen",
        abbreviation: "JPY",
        symbol: "\u00A5",
        flagURL: "http://www.geonames.org/flags/l/jp.gif"
      },
      {
        name: "British Pound",
        abbreviation: "GBP",
        symbol: "\u00A3",
        flagURL: "http://www.geonames.org/flags/l/uk.gif"
      },
      {
        name: "Australian Dollar",
        abbreviation: "AUD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/au.gif"
      },
      {
        name: "Canadian Dollar",
        abbreviation: "CAD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/ca.gif"
      },
      {
        name: "Swiss Franc",
        abbreviation: "CHF",
        symbol: "\u0043\u0048\u0046",
        flagURL: "http://www.geonames.org/flags/l/ch.gif"
      },
      {
        name: "Chinese Yuan Renminbi",
        abbreviation: "CNY",
        symbol: "\u00A5",
        flagURL: "http://www.geonames.org/flags/l/cn.gif"
      },
      {
        name: "Swedish Krona",
        abbreviation: "SEK",
        symbol: "\u006B\u0072",
        flagURL: "http://www.geonames.org/flags/l/se.gif"
      },
      {
        name: "New Zealand Dollar",
        abbreviation: "NZD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/nz.gif"
      },
      {
        name: "Mexican Peso",
        abbreviation: "MXN",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/mx.gif"
      },
      {
        name: "Singapore Dollar",
        abbreviation: "SGD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/sg.gif"
      },
      {
        name: "Hong Kong Dollar",
        abbreviation: "HKD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/hk.gif"
      },
      {
        name: "Norwegian Krone",
        abbreviation: "NOK",
        symbol: "\u006B\u0072",
        flagURL: "http://www.geonames.org/flags/l/no.gif"
      },
      {
        name: "South Korean Won",
        abbreviation: "KRW",
        symbol: "\u20A9",
        flagURL: "http://www.geonames.org/flags/l/kr.gif"
      },
      {
        name: "Turkish Lira",
        abbreviation: "TRY",
        symbol: "\u20BA",
        flagURL: "http://www.geonames.org/flags/l/tr.gif"
      },
      {
        name: "Russian Ruble",
        abbreviation: "RUB",
        symbol: "\u20BD",
        flagURL: "http://www.geonames.org/flags/l/ru.gif"
      },
      {
        name: "Indian Rupee",
        abbreviation: "INR",
        symbol: "\u20B9",
        flagURL: "http://www.geonames.org/flags/l/in.gif"
      },
      {
        name: "Brazilian Real",
        abbreviation: "BRL",
        symbol: "\u0052\u0024",
        flagURL: "http://www.geonames.org/flags/l/br.gif"
      },
      {
        name: "South African Rand",
        abbreviation: "ZAR",
        symbol: "\u0052",
        flagURL: "http://www.geonames.org/flags/l/za.gif"
      },
      {
        name: "Philippine Peso",
        abbreviation: "PHP",
        symbol: "\u20B1",
        flagURL: "http://www.geonames.org/flags/l/ph.gif"
      },
      {
        name: "Czech Koruna",
        abbreviation: "CZK",
        symbol: "\u004B\u010D",
        flagURL: "http://www.geonames.org/flags/l/cz.gif"
      },
      {
        name: "Indonesian Rupiah",
        abbreviation: "IDR",
        symbol: "\u0052\u0070",
        flagURL: "http://www.geonames.org/flags/l/id.gif"
      },
      {
        name: "Malaysian Ringgit",
        abbreviation: "MYR",
        symbol: "\u0052\u004D",
        flagURL: "http://www.geonames.org/flags/l/my.gif"
      },
      {
        name: "Hungarian Forint",
        abbreviation: "HUF",
        symbol: "\u0046\u0074",
        flagURL: "http://www.geonames.org/flags/l/hu.gif"
      },
      {
        name: "Icelandic Krona",
        abbreviation: "ISK",
        symbol: "\u006B\u0072",
        flagURL: "http://www.geonames.org/flags/l/is.gif"
      },
      {
        name: "Croatian Kuna",
        abbreviation: "HRK",
        symbol: "\u006B\u006E",
        flagURL: "http://www.geonames.org/flags/l/hr.gif"
      },
      {
        name: "Bulgarian Lev",
        abbreviation: "BGN",
        symbol: "\u043B\u0432",
        flagURL: "http://www.geonames.org/flags/l/bg.gif"
      },
      {
        name: "Romanian Leu",
        abbreviation: "RON",
        symbol: "\u006C\u0065\u0069",
        flagURL: "http://www.geonames.org/flags/l/ro.gif"
      },
      {
        name: "Danish Krone",
        abbreviation: "DKK",
        symbol: "\u006B\u0072",
        flagURL: "http://www.geonames.org/flags/l/dk.gif"
      },
      {
        name: "Thai Baht",
        abbreviation: "THB",
        symbol: "\u0E3F",
        flagURL: "http://www.geonames.org/flags/l/th.gif"
      },
      {
        name: "Polish Zloty",
        abbreviation: "PLN",
        symbol: "\u007A\u0142",
        flagURL: "http://www.geonames.org/flags/l/pl.gif"
      },
      {
        name: "Israeli Shekel",
        abbreviation: "ILS",
        symbol: "\u20AA",
        flagURL: "http://www.geonames.org/flags/l/il.gif"
      }
    ]

  async function getApiData(){
    const res = await fetch(BASE_URL + 'latest')
    const data = await res.json()
    return data
  }

  function toggleCurrencyList(){
      $('.add-currency-btn').toggleClass('open')
  }

  function initializeCurrencyList(){
      currencies.forEach(element => {
          currenciesList.append(`
          <li data-currency="${element.abbreviation}" class = ${initialCurrencies.includes(element.abbreviation) ? 'disabled' : ''}>
          <img src="${element.flagURL}" class = "flag">
          <span>${element.abbreviation} - ${element.name}</span>
          </li>`)
      })
  }

  function generateInitialCurrencies(){
      initialCurrencies.forEach(element => {
          let foundCurrency = currencies.find(el => element === el.abbreviation)
          appendToSelectedCurrency(foundCurrency)
      });
      //base currency
      $('ul.currencies li:first').addClass('base-currency')
  }

  function appendToSelectedCurrency(el){
    selectedCurrencies.append(
      `<li class = "currency">
          <img class = "flag" src="${el.flagURL}" alt="your image">
          <div class="info">
              <p class = "input"><span class="currency-symbol">${el.symbol}</span><input type="text" placeholder = "0.000"></p>
              <p class = "currency-name">${el.abbreviation} - ${el.name}</p>
              <p class = "base-currency-rate">1 ${baseCurrency.abbreviation} = ${baseCurrency.abbreviation === el.abbreviation ? '1' : el.rate.toFixed(3)} ${el.abbreviation}</p>
          </div>
          <span class="remove">&times</span>
      </li>`)
  }

  function addToSelectedCurrenciesProperty(){
    currenciesList.on('click', 'li', function(){
      if (!$(this).hasClass('disabled')){
        $(this).addClass('disabled')
        let selectedCurrencyAbbreviation = $(this).attr('data-currency')
        let foundCurrency = currencies.find(el => selectedCurrencyAbbreviation === el.abbreviation)
        appendToSelectedCurrency(foundCurrency)
      }
    })
  }
 
  function removeCurrency(el){
    //remove disabled class
    let flagURL = $(el).siblings('.flag').attr('src')
    currenciesList.children().each(function(){
      if($(this).children('img').attr('src') === flagURL)
        $(this).removeClass('disabled')
    })
    //remove from selected list
    $(el).parent().remove()
    if ($(el).parent().hasClass('base-currency')){
      $('.currencies li').first().addClass('base-currency')
      updateBaseCurrency()
    }
  }

  function updateBaseCurrency(){
    let baseCurrencyFlag = $('.base-currency').children('img').attr('src')
    baseCurrency = currencies.find(el => el.flagURL === baseCurrencyFlag)
    let baseCurrencyRate = baseCurrency.rate
  
    for (let i = 0; i < currencies.length; i++)
      currencies[i].rate = (currencies[i].rate/baseCurrencyRate)

      selectedCurrencies.children().each(function(){
      let curFlag = $(this).children('img').attr('src')
      let currentCurrency = currencies.find(el => el.flagURL === curFlag)
      $(this).children('.info').children('.base-currency-rate').html(`1 ${baseCurrency.abbreviation} = ${baseCurrency.abbreviation === currentCurrency.abbreviation ? '1' : currentCurrency.rate.toFixed(3)} ${currentCurrency.abbreviation}`)
    })
  }

  function addRates(){
    getApiData()
      .then(data => {
        date = data['date']
        $('.date').html(date)
        data.rates['EUR'] = 1
        currencies.forEach(el => el.rate = data['rates'][el.abbreviation])
        initializeCurrencyList()
        generateInitialCurrencies()
      })
      .catch(err => alert(err.message))
  }

  function inputOperation(el){
    if (!$(el).parents('li').hasClass('base-currency')){
      selectedCurrencies.children('.base-currency').removeClass('base-currency')
      $(el).parents('li').addClass('base-currency')
      updateBaseCurrency()
    }
    var currentCurrencyFlag = $(el).parents('li').children('img').attr('src')
    baseCurrencyAmount = $(el).parents('li').find('input').val()
    selectedCurrencies.children().each(function(){
      if ($(this).children('img').attr('src') !== currentCurrencyFlag)
        changeValues(this)
    })
  }

  function changeValues(el){
    let flag = $(el).children('img').attr('src')
    let currentCurrency = currencies.find(currency => currency.flagURL === flag)
    $(el).find('input').val(isNaN(baseCurrencyAmount) || baseCurrencyAmount == 0 ? '' : Number(baseCurrencyAmount*currentCurrency.rate).toFixed(3))
  }


  /*-------Function calls--------*/

  baseCurrency = currencies.find(el => el.abbreviation === 'EUR')
  addRates()
  $('.add-currency-btn').on('click', toggleCurrencyList)
  selectedCurrencies.on('click','li span.remove', function(){
    removeCurrency(this)
  })
  addToSelectedCurrenciesProperty()
  
  selectedCurrencies.on('input','li input', function(){
    inputOperation(this)
  })
})