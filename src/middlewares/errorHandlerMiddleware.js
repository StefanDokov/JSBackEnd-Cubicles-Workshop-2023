

const errorHandler = (err, req, res, next) => {
   
  res.render('404', {err: err.message});

}


module.exports = errorHandler;