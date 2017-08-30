	requirejs.config({
		
	    baseUrl: 'js',
		
	    paths: {
	        
	        "guide": "guide/guide-1.0.0.min",
	        
	        "table": "table"
	    }
	});
	
	
	require(['table'],function   (table) {
		
		setTimeout(function(){
			
			table.changeTitle("通过对外提供的接口改变了标题！");
			
		},5000)
		
	});
	
