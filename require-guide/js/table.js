define(['guide'],function(OS){
	
	return OS("table",{
			
			title:'这是一个demo',
			
			_row:3,
			
			_col:5
			
		},function($apply,$data,$quote){
		
			setTimeout(function(){
				
				$apply({
								
					title:"这个demo在五秒后刷新了一下",
					
					_row:10,
				
					_col:10
					
				});//是否部分更新

				
			},5000);
			
			return {
				
				changeTitle:function(content){ //延时2秒改变title
					
					setTimeout(function(){
						
						$apply({
							
							title:content
							
						},true);//是否部分更新
						
					},2000)
				}
				
			};
			
		});
	
	
});


