const api = 'http://basketballstats2.us-west-1.elasticbeanstalk.com'

export { api };

// during development, do NOT use this 'api' variable. 
// just use the plain routes, and have your backend running on http://localhost:5000
// If you use the api variable, you will be constantly using the NOT updated version of the API, until changes to backend folder are pushed.
// Better to write and test both backend and client folders locally, before pushing both of them to production. 
// Obviously, before pushing the client folder back into prod, you should switch back to using this 'api' const
// But while actually developing this thing, remove the const so you're developing 100% locally and always interacting with the latest changes

