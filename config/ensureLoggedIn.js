// Middleware for routes that require a logged in user
module.exports = function(req, res, next) {
    // Pass the req/res to the next middleware/route handler
    if ( req.isAuthenticated() ) return next();
    // Redirect to login if the user is not already logged in
    res.redirect('/auth/google');
  }

  // Go to Oauth part 5 if consuded on how to use this later
  // I certainly am right now 

  // I believe this prevents ppl from vewing what they're not supposed
  // to if they just type in the URL?