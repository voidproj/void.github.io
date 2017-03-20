VK.init(function(){
	var user_id = null;
	var app_id = 5935661;
	var a = new VKAdman();
     a.onNoAds(function(){console.log("Adman: No ads");});
     a.onStarted(function(){console.log("Adman: Started");});
     a.onCompleted(function(){console.log("Adman: Completed");});
     a.onSkipped(function(){console.log("Adman: Skipped");});
     a.onClicked(function(){console.log("Adman: Clicked");});
     a.setupPreroll(app_id, {preview: 8});
	a.setupPreroll(app_id);
	admanStat(app_id, user_id);
});
