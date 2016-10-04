jQuery("#simulation")
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