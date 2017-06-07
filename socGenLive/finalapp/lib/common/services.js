class services {
	constructor($http, $q, $state) {
		'ngInject';
        this.$q = $q;
        this.$http = $http;
        this.$state = $state;
    }
		handleSuccess( response ) {
        return( response.data );
        }
    handleError( response ) {
         return(response);
      }
    getData(name) {
      if(localStorage[name])
          return localStorage[name];
        else
          return false
    }
    setData(name, val) {
      localStorage[name] = val;
    }
    login(uName, pass, type){
      var type = type || 'client';
        var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json'
                },
          url: 'http://base.getsetgofitness.com/API/v1/sign-in',
          data:{
            "user_email":uName,
            "user_password":pass,
            "user_type":type
          }
        })
        return( request.then( this.handleSuccess, this.handleError ) );     
    }
    fetchProfile(token){
        var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json',
                    'X-Auth-Token':token
                },
          url: 'http://base.getsetgofitness.com/API/v1/profile'
        })
        return( request.then( this.handleSuccess, this.handleError ) );   
    }
    fetchCoachDetails(coachId){
      var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json'
                },
          url: 'http://base.getsetgofitness.com/API/v1/trainerdetails/'+coachId
        })
        return( request.then( this.handleSuccess, this.handleError ) );
    }
    fetchCoaches(offset){
      var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json'
                },
          url: 'http://base.getsetgofitness.com/API/v1/searchtrainers/0'
        })
        return( request.then( this.handleSuccess, this.handleError ) );
    }

}
export default services