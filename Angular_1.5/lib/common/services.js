class services {
	constructor($http, $q, $state) {
		'ngInject';
        this.$q = $q;
        this.$http = $http;
        this.$state = $state;
    }
		gotoUrl(type,redirectUrl, param, paramVal){
      var vm = this;
      switch(type)
      {
        case 0:
          var tempObj = {};
          if(param)
          {
            tempObj[param] = paramVal;
            vm.$state.go(redirectUrl, tempObj);
            return;
          }
          vm.$state.go(redirectUrl);
          break;
        case 1:
          window.open("http://"+redirectUrl);
        break;
      }
      //alert(redirectUrl);
    }
    
    sortBylVal(obj){
      var tempArr = [];
      var i=0;
      for(var key in obj)
      {
        var temp = obj[key];
        var valEntered = false;
        for(var j=0; tempArr[j]; j++)
        {        
          if(parseFloat(temp) < parseFloat(obj[tempArr[j]]))
          {
            tempArr.splice(j,0,key);
            valEntered = true;
            break;
          }
        }
        if(!valEntered)
            tempArr.push(key);
        i++;
      }
      return tempArr;

    }
    objtoArr(obj){
      var tempArr = [];
      for(var key in obj)
      {
        tempArr.push(obj[key]);
      }
      return tempArr;
    }
    calculateFitScore(newProgress, lastProgress){
      var fitScore = newProgress.fatPer?100-newProgress.fatPer:100-newProgress.fat;
      //var neckAddition = ((newProgress.neck - (lastProgress?lastProgress.neck:0))>0)/2.5;
      var lastwaisthip = lastProgress?(lastProgress.waist/lastProgress.hips):0;
      var newwaisthip = newProgress?(newProgress.waist/newProgress.hips):0;
      var waistHip = newwaisthip - lastwaisthip;
      var hipsAddition = lastProgress?(newProgress.hips - (lastProgress.hips))/2.5:0;
      var waistAddition = lastProgress?(newProgress.waist - (lastProgress.waist))/2.5:0;
      
      return fitScore+waistAddition+hipsAddition + waistHip;
      // var scoresRef = firebase.database().ref('fitRank/');
      // var score = 10000000010; // enough to put me in the #1 position!
      // // we sort the scores in descending order, so use a negative score for the priority ordering
      // scoresRef.child('5').setWithPriority( score, -score );
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
    handleSuccess( response ) {
        return( response.data );
        }
    handleError( response ) {
         return(response);
      }
    generateToken(uName){
        var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'generate_pw_reset_token',
          data:{
            "email":uName
          }
        })
        return( request.then( this.handleSuccess, this.handleError ) );     
    }
    testEmail(email){
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    getBlogPosts(){ 
      var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.communityPath+'blog-service/latest_blog/'
        })
        return(request.then( this.handleSuccess, this.handleError )); 
    }
    getReadableDate(dt){
      var splitDelimiter = (dt.match(/-/g) || []).length>1?'-':' ';
      var temp = dt.split(splitDelimiter);
      var  returnDt = (splitDelimiter == '-')?(temp[2]+'/'+temp[1]+'/'+temp[0]):(temp[0]+', '+temp[2]+' '+temp[1]);
      return returnDt;
    }
    fetchPackages(coachId){
     var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'trainer_packages',
          data:{
            "trainer_id":coachId
          }
        })
        return( request.then( this.handleSuccess, this.handleError ) ); 

    }
    UpdateImg(progressId, token, imgs){
      var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json',
                    'X-Auth-Token':token
                },
          url: mainConfig.basePath+'update_progress_img',
          data:{
            "img1":imgs.pic1,
            "img2":imgs.pic2,
            "img3":imgs.pic3,
            "progress_id":progressId
          }
        })
        return( request.then( this.handleSuccess, this.handleError ) ); 
    }
    DeleteUsrProgress(progressId, token){
      var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json',
                    'X-Auth-Token':token
                },
          url: mainConfig.basePath+'delete_client_progress',
          data:{
            "id":progressId
          }
        })
        return( request.then( this.handleSuccess, this.handleError ) ); 
    }
    UpdateUsrProgress(token, userData){
      var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json',
                    'X-Auth-Token':token
                },
          url: mainConfig.basePath+'update_progress_data',
          data:{
            'weight':userData.weight,
            'fat':userData.fatPer,
            'neck':userData.neck,
            'waist': userData.waist,
            'hips': userData.hips,
            'thigh':userData.thigh
          }
        })
        return( request.then( this.handleSuccess, this.handleError ) ); 
    }
    saveCoupon(promoCodeObj){
       var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'save_coupon',
          data:{
            
          }
        })
        return( request.then( this.handleSuccess, this.handleError ) ); 
    } 
    updateProgress(){
      var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'trainer_packages',
          data:{
            "trainer_id":coachId
          }
        })
        return( request.then( this.handleSuccess, this.handleError ) ); 
    }
    getCouponDetails(couponId, token){
      var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json',
                    'X-Auth-Token':token
                },
          url: mainConfig.basePath+'get_coupon_detail',
          data:{
            "coupon_code":couponId
          }
        })
        return( request.then( this.handleSuccess, this.handleError ) ); 
    }
    validateCoupon(couponId, token){
      var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json',
                    'X-Auth-Token':token
                },
          url: mainConfig.basePath+'validate_coupon',
          data:{
            "coupon_code":couponId
          }
        })
        return( request.then( this.handleSuccess, this.handleError ) ); 
    }   
    assignCoach(assignObj){
     var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'assign_coach',
          data:{
            "assign_date":assignObj.assign_date,
            "assign_end_date":assignObj.assign_end_date,
            "package_id":assignObj.package_id,
            "trainer_id":assignObj.trainer_id,
            "tran_date":assignObj.tran_date,
            "tran_id":assignObj.tran_id,
            "user_id":assignObj.user_id
          }
        })
        return( request.then( this.handleSuccess, this.handleError ) ); 

    }

    generateRandomId(){

      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for( var i=0; i < 5; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }

    validateOrder(orderId){
        var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'order_status',
          data:{
            "order_id":orderId
          }
        })
        return( request.then( this.handleSuccess, this.handleError ) );     
    }
    validateToken(tokenObj){
        var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'validate_pw_reset_token',
          data:tokenObj
        })
        return( request.then( this.handleSuccess, this.handleError ) );     
    }
    resetPass(passObj){
        var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'reset_password',
          data:passObj
        })
        return( request.then( this.handleSuccess, this.handleError ) );     
    }
    loginService(uName, pass, type){
        var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'sign-in',
          data:{
            "user_email":uName,
            "user_password":pass,
            "user_type":type
          }
        });
        var token = "randomtext";
        var fetchProfile = this.$http({
          method: 'POST',
                    headers : {
                              'contentType': 'application/json'
                          },
                    url: mainConfig.basePath+'sign-in',
                    data:{
                      "user_email":uName,
                      "user_password":pass,
                      "user_type":type
                    }
        })
        var tempArr = [request, fetchProfile];
        return this.$q.race(tempArr).then(data=>{console.log(data); this.handleSuccess})
        //return( request.then( this.handleSuccess, this.handleError ) );     
    }
    signupService(user){
        var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'signup',
          data:user
        })
        return( request.then( this.handleSuccess, this.handleError ) );     
    }
    sendEmail(mailObj){
        var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'sendEmail',
          data:mailObj
        })
        return( request.then( this.handleSuccess, this.handleError ) );     
    }
    firebaseLogIn(u,p){
      firebase.auth().signInWithEmailAndPassword(u, p).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
        // ...
      });
    }
    firebaseLogout(){
      firebase.auth().signOut().then(function() {
                // Sign-out successful.
              }, function(error) {
                // An error happened.
              });
    }
    updateTwin(orderId,mailId, token){
        var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json',
                    'X-Auth-Token':token
                },
          url: mainConfig.basePath+'update_twin_order_second_email',
          data:{"order_id":orderId,"second_user_email":mailId}
        })
        return( request.then( this.handleSuccess, this.handleError ) ); 
    }
    createOrder(order){
        var packageid = order.booking && order.booking.packageId?order.booking.packageId:0;
        var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'create_order',
          data:{
            "package_id":packageid,
            "amount":order.amount,
            "orderNote":"test note",
            "type":order['type'],
            "customerName":order.user['name'],
            "customerEmail":order.user.email,
            "customerPhone":order.user.mobile
          }
        })
        return( request.then( this.handleSuccess, this.handleError ) );     
    }
    createOrderAuth(order, token){
        var packageid = order.booking && order.booking.packageId?order.booking.packageId:0;
        var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json',
                    'X-Auth-Token':token
                },
          url: mainConfig.basePath+'create_order',
          data:{
            "package_id":packageid,
            "amount":order.amount,
            "orderNote":"test note",
            "type":order['type'],
            "coupon_code":order['coupon']['coupon_code'],
            "customerName":order.user['name'],
            "customerEmail":order.user.email,
            "customerPhone":order.user.mobile
          }
        })
        return( request.then( this.handleSuccess, this.handleError ) );     
    }
    CRMEnable(){
      var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.CRMPath+'?method=login&input_type=JSON&response_type=JSON&rest_data={"user_auth":{"user_name":"admin","password":"qweR9876","encryption":"PLAIN"},"application":"SugarCRM+REST+API"}'
        })
        return( request.then( this.handleSuccess, this.handleError ) );   
    }
    CRMLogout(dataId){
      var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.CRMPath+'?method=logout&input_type=JSON&response_type=JSON&rest_data={"session":"'+dataId+'"}'
        })
        return( request.then( this.handleSuccess, this.handleError ) );   
    }
    CRMEntry(userEmail, dataId){
      var tempObj = {
        "session":dataId,
        "module_name":"Leads",
        "name_value_list":
          [
            {"name":"assigned_user_id","value":"1"},
            {"name":"lead_source","value":"Web Site"},
            {"name":"lead_source_description","value":"Tools"}, 
            {"name":"email1","value":userEmail}
          ]
      };
      var tempObjStr = JSON.stringify(tempObj);
      var urlCRM = mainConfig.CRMPath+'?method=set_entry&input_type=json&response_type=json&rest_data='+tempObjStr;
      var request = this.$http({
          method: 'GET',
          headers: {
                    'contentType': 'application/json'
                },
          url: urlCRM
        })
        return( request.then( this.handleSuccess, this.handleError ) );   
    }
    fetchtransformations(coachId){
      var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'get_trainers_transformation/'+coachId
        })
        return( request.then( this.handleSuccess, this.handleError ) );   
    }
    updateProfile(user, token){
        var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json',
                    'X-Auth-Token':token
                },
          url: mainConfig.basePath+'profile',
          data:user
        })
        return( request.then( this.handleSuccess, this.handleError ) );     
    }
    // uploadImage(files){
    // //Take the first selected file
    //    var url = mainConfig.basePath+'update_profile_image';
    //     var request = this.$http({
    //       method: 'POST',
    //       url: url,
    //       headers : {
    //                 contentType: undefined,
    //                 enctype:'multipart/form-data'
    //             },
    //       transformRequest: formDataObject,
    //       data: files
    //     });
    //     function formDataObject (data) {
    //         var fd = new FormData();
    //         console.log("data");
    //         console.log(data);
    //         angular.forEach(data, function(value, key) {
    //             fd.append(key, value);
    //         });
    //         return fd;
    //     }
    //     return( request.then( this.handleSuccess, this.handleError ) );     
    // }
    calculateCal(cal){
      var temp = cal%100;
      if(temp>=50)
      {
        cal = cal-temp+100;
      }
      else{
        cal = cal-temp
      }
      return cal;
    }
    fetchCoachDetails(coachId){
      var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'trainerdetails/'+coachId
        })
        return( request.then( this.handleSuccess, this.handleError ) );   
    }
    fetchFoodList(){
      var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json'
                },
          url: mainConfig.basePath+'listFoods'
        })
        return( request.then( this.handleSuccess, this.handleError ) );   
    }
    signout(token){
      var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json',
                    'X-Auth-Token':token
                },
          url: mainConfig.basePath+'logout'
        })
        return( request.then( this.handleSuccess, this.handleError ) );   
    }
    fetchUserProfile(token){
        var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json',
                    'X-Auth-Token':token
                },
          url: mainConfig.basePath+'profile'
        })
        return( request.then( this.handleSuccess, this.handleError ) );   
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
    fetchClients(token){
      var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json',
                    'X-Auth-Token':token
                },
          url: mainConfig.basePath+'clientsofLoggedinTrainer'
        })
        return( request.then( this.handleSuccess, this.handleError ) );
    }
    fetchCoachAccountDetails(token){
      var request = this.$http({
          method: 'POST',
          headers : {
                    'contentType': 'application/json',
                    'X-Auth-Token':token
                },
          url: mainConfig.basePath+'get_trainer_account_data'
        })
        return( request.then( this.handleSuccess, this.handleError ) );
    }
    fetchClientDetails(token, id){
      var request = this.$http({
          method: 'GET',
          headers : {
                    'contentType': 'application/json',
                    'X-Auth-Token':token,
                    'clientId':id
                },
          url: mainConfig.basePath+'clientDetailsLoggedinTrainer'
        })
        return( request.then( this.handleSuccess, this.handleError ) );
    }

}
export default services