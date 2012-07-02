var success = function(res) {
  var el = document.getElementById('cloudResult');
  el.value = (JSON.stringify(res.res) + "\n") + el.value;
};

var error = function(code,errorprops,params) {
  alert('An error occured: code=' + code + ', errorprops=' + JSON.stringify(errorprops));
}

$fh.ready(function() {
/*  document.getElementById('fhlog').onclick = function() {
    $fh.act(
      {
        "act": "log"
      }, success, error
    );
  };*/
  
  document.getElementById('fhweb').onclick = function() {
    $fh.act(
      {
        "act": "web"
      }, success, error
    );
  };
  
  document.getElementById('fhcacheput').onclick = function() {
    $fh.act(
      {
        "act": "cacheput",
        "req": {
          "val": document.getElementById('fhcacheputval').value
        }
      }, success, error
    );
  };
  document.getElementById('fhcacheget').onclick = function() {
    $fh.act(
      {
        "act": "cacheget"
      }, success, error
    );
  };
      
  document.getElementById('fhdbcreate').onclick = function() {
    $fh.act(
      {
        "act": "dbcreate"
      }, success, error
    );
  };    
  document.getElementById('fhdblist').onclick = function() {
    $fh.act(
      {
        "act": "dblist"
      }, success, error
    );
  };
});