// access all URL params and return their value to auto-select a palette
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

// dynamically build a select list with all available palettes from the API
function getCodes() {
    jQuery.ajax({
      url: "//api.benjaminmoore.com/api/682890d64737271f2415/color/GetPalettes",
      data: "countryCode=en-us",
      dataType: "jsonp",
      jsonpCallback: "CallbackFunction1",
      success: function (result1) {
        var res = result1.data.map ( pl => {  
              return pl.palettes.map ( pl2 => {
                return jQuery('#colorCodes').append('<option value="' + pl2.code + '">' + pl2.name + '</option>');
              });
        });
      },
      error: function (xhr) {
        
      }
    });
}

// use code from select or URL param to display a palette
function showPalettes(code) {

  jQuery.ajax({
    url: "//api.benjaminmoore.com/api/682890d64737271f2415/color/GetPaletteByCode",
    data: "countryCode=en-us&code="+code,
    dataType: "jsonp",
    jsonpCallback: "CallbackFunction",
    success: function(result) {
      if(result.error === null || result.error === "") {
        var allData = result.data;

        jQuery('.resHdr').html(function() {
          return allData.name + ' (' + allData.code + ') - ' + allData.description;
        });

        var res = allData.colors.map ( bm => {  
          return '<td bgcolor="' + bm.hex + '"> <div class="nameNum">' + bm.name + ' <br /> ' + bm.number + ' </div></td>';
        });

        jQuery('#BMdataResults').html(res);
          
        jQuery('.findastore').show();

        var tds = jQuery("#BMdataResults td");
        for(var i = 0; i < tds.length; i+=8) {
          tds.slice(i, i+8).wrapAll("<tr class='new'></tr>");
        }
      }
    },
    error: function (xhr) {
      
    }
  });   

}

// all code here executes once jQuery is ready
jQuery(function() {

  // check the URL for a param called bmcode and pass value to showPalettes
  var bmcode = getUrlParameter('bmcode');
  if(bmcode) {
    showPalettes(bmcode);
  }

  // populate the select list from the API
  getCodes();

  // when the select option changes update the palette
  jQuery('#colorCodes').change(function(){
    showPalettes(jQuery(this).val())
  });

});
