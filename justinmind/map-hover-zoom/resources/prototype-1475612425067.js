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
}jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-greenland")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Image_1",
                    "top": {
                      "type": "movetoposition",
                      "value": "-137"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-573"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_1",
                    "width": {
                      "type": "exprvalue",
                      "value": "3000"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "2128"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Button_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Image_1",
                    "top": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_1",
                    "width": {
                      "type": "exprvalue",
                      "value": "1024"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "726"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Button_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("drag", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Image_1",
                  "property": "jimGetWidth"
                },"3000" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Image_1",
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("dragend", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .on("mouseenter dragenter", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-united-states") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-global-sales",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "globalSales",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "country"
                          },"United States" ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-global-sales"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-global-sales",
                    "top": {
                      "type": "movetoposition",
                      "value": "376"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "251"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-greenland") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-global-sales",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "globalSales",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "country"
                          },"Greenland" ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-global-sales",
                    "top": {
                      "type": "movetoposition",
                      "value": "163"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "417"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-global-sales"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-russia") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-global-sales",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "globalSales",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "country"
                          },"Russia" ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-global-sales",
                    "top": {
                      "type": "movetoposition",
                      "value": "268"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "778"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-global-sales"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-nationalSales",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "nationalSales",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "company"
                          },"KNI A/S" ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-nationalSales"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-united-states")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-greenland")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-russia")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_2")) {
      jEvent.undoCases(jFirer);
    }
  });(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "c8fc1480-80ef-4369-ba4f-f512c653073a": "dfsc",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);jQuery("#simulation")
  .on("mouseenter dragenter", ".s-c8fc1480-80ef-4369-ba4f-f512c653073a .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Image_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-nationalSales",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "nationalSales",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "company"
                          },"KNI A/S" ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-nationalSales"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-c8fc1480-80ef-4369-ba4f-f512c653073a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Image_2")) {
      jEvent.undoCases(jFirer);
    }
  });