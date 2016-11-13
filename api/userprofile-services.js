module.exports = {
  getInput : function(req, res){
     var input = req.params.input;
     var result = { 'data' : input };
     return res.json(result);
 }
}
