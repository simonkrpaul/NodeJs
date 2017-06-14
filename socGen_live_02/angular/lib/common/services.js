class services {
	constructor($http,$state) {
		'ngInject';
		this.$http = $http;
    }
    fetchCoaches(offset){
    	var offset = offset || 0;
      var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'searchtrainers/'+offset
        })
        return( request.then( this.handleSuccess, this.handleError ) );
    }
    handleSuccess( response ) {
        return( response.data );
        }
    handleError( response ) {
         return(response);
      }
}
export default services
