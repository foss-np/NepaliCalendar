
var neptoeng = {

  // initialization of variable
  nepMap : [],
  eng_start_date : 14,
  eng_start_month : 4,
  eng_start_year : 1943,
  start_year : 0,
  start_month : 0,
  nep_start_date : 1,
  nep_start_month : 1,
  nep_start_year : 2000,
  day_of_week : 4,
  end_day_of_month : 0,         // total days of each month

  initialize : function() 
  {
    this.eng_start_date = 14;
    this.eng_start_month = 4;
    this.eng_start_year = 1943;
    this.start_year = 0;
    this.start_month = 0;
    this.nep_start_date = 1;
    this.nep_start_month = 1;
    this.nep_start_year = 2000;
    this.day_of_week = 4;
    this.end_day_of_month = 0;         // total days of each month
  },

  loadMap : function()
  {
    // load nepali month array
    this.nepMap[2000] = [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ];
    this.nepMap[2001] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2002] = [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2003] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ];
    this.nepMap[2004] = [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ];
    this.nepMap[2005] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2006] = [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2007] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ];
    this.nepMap[2008] = [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31 ];
    this.nepMap[2009] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2010] = [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2011] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ];
    this.nepMap[2012] = [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ];
    this.nepMap[2013] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2014] = [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2015] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ];
    this.nepMap[2016] = [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ];
    this.nepMap[2017] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2018] = [0, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2019] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ];
    this.nepMap[2020] = [0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2021] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2022] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ];
    this.nepMap[2023] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ];
    this.nepMap[2024] = [0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2025] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2026] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ];
    this.nepMap[2027] = [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ];
    this.nepMap[2028] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2029] = [0, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2030] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ];
    this.nepMap[2031] = [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ];
    this.nepMap[2032] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2033] = [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2034] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ];
    this.nepMap[2035] = [0, 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31 ];
    this.nepMap[2036] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2037] = [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2038] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ];
    this.nepMap[2039] = [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ];
    this.nepMap[2040] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2041] = [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2042] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ];
    this.nepMap[2043] = [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ];
    this.nepMap[2044] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2045] = [0, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2046] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ];
    this.nepMap[2047] = [0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2048] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2049] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ];
    this.nepMap[2050] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ];
    this.nepMap[2051] = [0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2052] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2053] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ];
    this.nepMap[2054] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ];
    this.nepMap[2055] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2056] = [0, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2057] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ];
    this.nepMap[2058] = [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ];
    this.nepMap[2059] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2060] = [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2061] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ];
    this.nepMap[2062] = [0, 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31 ];
    this.nepMap[2063] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2064] = [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2065] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ];
    this.nepMap[2066] = [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31 ];
    this.nepMap[2067] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2068] = [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2069] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ];
    this.nepMap[2070] = [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ];
    this.nepMap[2071] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2072] = [0, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2073] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ];
    this.nepMap[2074] = [0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2075] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2076] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ];
    this.nepMap[2077] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ];
    this.nepMap[2078] = [0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2079] = [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ];
    this.nepMap[2080] = [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ];
    this.nepMap[2081] = [0, 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30 ];
    this.nepMap[2082] = [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 ];
    this.nepMap[2083] = [0, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30 ];
    this.nepMap[2084] = [0, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30 ];
    this.nepMap[2085] = [0, 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30 ];
    this.nepMap[2086] = [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 ];
    this.nepMap[2087] = [0, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30 ];
    this.nepMap[2088] = [0, 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30 ];
    this.nepMap[2089] = [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 ];
    this.nepMap[2090] = [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 ];

    // load english months with leap year
    this.nepMap[0000] = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    this.nepMap[0001] = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  },

  DateConversion : function( date, month, year )
  {
    this.loadMap();
    this.initialize();
    this.start_month = +month;
    this.start_year = +year;
    var new_days = 0;

    // count total days in a year
    for ( var i = this.nep_start_year; i < year; i++ ) 
    {
      for ( var j = 1; j <= 12; j++ )
      {
        new_days += this.nepMap[i][j];
      }
    }

    for ( var j = this.nep_start_month; j < month; j++ )
    {
      new_days += this.nepMap[year][j];
    }

    // count total days user date
    new_days += ( date - this.nep_start_date );

    while ( new_days != 0 ) 
    {
      if( this.isLeapYear(this.eng_start_year))
        this.end_day_of_month = this.nepMap[0001][this.eng_start_month];
      else
        this.end_day_of_month = this.nepMap[0000][this.eng_start_month];

      this.day_of_week++;
      this.eng_start_date++;

      if ( this.eng_start_date > this.end_day_of_month ) 
      {
        this.eng_start_month++;

        this.eng_start_date = 1;

        if ( this.eng_start_month > 12 )
        {
          this.eng_start_year++;
          this.eng_start_month = 1;
        }
      }

      if ( this.day_of_week > 7 )
      {
        this.day_of_week = 1;
      }
      new_days--; // after each loop, reduce day
    }

    return this;
  },

  isLeapYear : function( year ) 
  {
    if ( year % 100 == 0 ) 
      return year % 400 == 0;
    else 
      return year % 4 == 0;
  },

  getYear : function()  
  {
    return this.eng_start_year;
  },

  getMonth : function() 
  {
    return this.eng_start_month;
  },

  getDate : function()  
  {
    return this.eng_start_date;
  },

  getDay : function() 
  {
    return this.day_of_week;
  },

  getTotalDays : function()  
  {
    return this.end_day_of_month;
  },

  getDayOW : function() 
  {
    return this.day_of_week;
  }
}