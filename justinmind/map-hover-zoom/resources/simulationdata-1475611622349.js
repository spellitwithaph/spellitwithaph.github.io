function initData() {
  jimData.datamasters["globalSales"] = [
    {
      "id": 1,
      "datamaster": "globalSales",
      "userdata": {
        "country": "United States",
        "numberOfSales": "114",
        "salesRevenue": "2408.95"
      }
    },
    {
      "id": 2,
      "datamaster": "globalSales",
      "userdata": {
        "country": "Russia",
        "numberOfSales": "199",
        "salesRevenue": "4404.12"
      }
    },
    {
      "id": 3,
      "datamaster": "globalSales",
      "userdata": {
        "country": "China",
        "numberOfSales": "91",
        "salesRevenue": "1866.52"
      }
    },
    {
      "id": 4,
      "datamaster": "globalSales",
      "userdata": {
        "country": "Brazil",
        "numberOfSales": "88",
        "salesRevenue": "1208.71"
      }
    },
    {
      "id": 5,
      "datamaster": "globalSales",
      "userdata": {
        "country": "Greenland",
        "numberOfSales": "51",
        "salesRevenue": "804.67"
      }
    },
    {
      "id": 6,
      "datamaster": "globalSales",
      "userdata": {
        "country": "South Africa",
        "numberOfSales": "73",
        "salesRevenue": "994.23"
      }
    }
  ];

  jimData.datamasters["nationalSales"] = [
    {
      "id": 1,
      "datamaster": "nationalSales",
      "userdata": {
        "country": "Greenland",
        "company": "KNI A/S",
        "numberOfSales": "324,951,876",
        "salesRevenue": "1,314,916,000 (DKK)"
      }
    }
  ];

  jimData.isInitialized = true;
}