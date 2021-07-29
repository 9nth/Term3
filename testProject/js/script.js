var myKey=JSON.parse(myKey);
console.log(myKey[0].key);
var key = myKey[0].key;

$.ajax({
  url : 'https://gnews.io/api/v4/{endpoint}?token='+key,
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);
    var i;
    for (i=0;i<data.length;i++){
       document.getElementById('objects').innerHTML +=
       '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"> ' +
          '<div class="card mt-3 ml-5" style="width: 18rem;">' +
            '<div class="card-body">'+
            '<h2>'+ articles[i].title +'</h2>' +
            '<img src="' + articles[i].image +'" class="card-img-top" ">' +
              '<h5 class="card-title">'+ articles[i].description +'</h5>'+


           '</div>'+
          '</div>'+
       '</div>';
    } //for loop
  },  //success
  error : function(){
    console.log('error');
  } //error
}); //ajax
