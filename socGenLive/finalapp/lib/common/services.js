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
    fetchCoaches(offset){
      var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'searchtrainers/'+offset
        })
        return( request.then( this.handleSuccess, this.handleError ) );
    }

}
export default services