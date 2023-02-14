
fbq.version="2.9.92";
fbq._releaseSegment = "stable";
fbq.pendingConfigs=["global_config"];
fbq.__openBridgeRollout = 1.0;
fbq.registerPlugin("global_config", {__fbEventsPlugin: 1, plugin: function(fbq, instance, config) { fbq.loadPlugin("commonincludes");
fbq.loadPlugin("opttracking");
fbq.set("experiments", [{"allocation":0.02,"code":"b","name":"network_retry_when_not_success","passRate":0.5},{"allocation":0.02,"code":"c","name":"no_op_exp","passRate":0.5},{"allocation":0,"code":"e","name":"retrieve_fbclid_from_browser_properties","passRate":0.5}]);
config.set(null, "batching", {"batchWaitTimeMs":501,"maxBatchSize":10});
config.set(null, "microdata", {"waitTimeMs":500});instance.configLoaded("global_config"); }});