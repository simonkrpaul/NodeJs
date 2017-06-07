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
    fetchCoachDetails(coachId){
      var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json'
                },
          url: 'http://base.getsetgo.fitness/API/v1/trainerdetails/'+coachId;
        })
        return( request.then( this.handleSuccess, this.handleError ) );
    }
    fetchCoaches(offset){
      var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json'
                },
          url: 'http://base.getsetgo.fitness/API/v1/searchtrainers/0'
        })
        return( request.then( this.handleSuccess, this.handleError ) );
    }

}
export default services