console.log('script');//testing

// $('h1').hide();testing

//geonet API
$.ajax({
  url:'https://api.geonet.org.nz/news/geonet',
  type: 'GET',
  data : 'json',
  success:function(data){
    console.log(data);
  },//success
  error:function(){

  }//error
});//ajax
