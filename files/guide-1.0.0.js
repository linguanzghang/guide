	/*!
	 * guide JavaScript Template v1.0.0
	 *
	 * Date: 2017-08-28T12:00Z
	 */
	/*	guide 2017 @autor:lgz	*/
		

		(function(global, guide,configure) {
			
			"use strict";
	
	/****************************************************************
	 * 
	 * 		全局补充，去除字符串前后空格
	 * 
	 * **************************************************************/
	
			if(!String.prototype.trim) {
				
				String.prototype.trim = function() {
					
					return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
					
				}
				
			}
			
			if(!Array.indexOf){
				    
			    Array.prototype.indexOf = function(obj){
			    	
			        for(var i=0; i<this.length; i++){
			        	
			            if(this[i]==obj){
			            	
			                return i;
			                
			            }
			            
			        }
			        
			        return -1;
			        
			    }
			    
			}
			
			//重写split 用于解决IE7，IE8，IE9的split的兼容性（panda-2016-06-16）
			if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<9){
		       
				var split;
				
				split = split || function(undef) {
				
					var nativeSplit = String.prototype.split,
					
						compliantExecNpcg = /()??/.exec("")[1] === undef,
						
						self;
				
					self = function(str, separator, limit) {
						
						if(Object.prototype.toString.call(separator) !== "[object RegExp]") {
							
							return nativeSplit.call(str, separator, limit);
							
						}
						
						var output = [],
						
							flags = (separator.ignoreCase ? "i" : "") +
							
							(separator.multiline ? "m" : "") +
							
							(separator.extended ? "x" : "") + // Proposed for ES6
							
							(separator.sticky ? "y" : ""), // Firefox 3+
							
							lastLastIndex = 0,
							
							separator = new RegExp(separator.source, flags + "g"),
							
							separator2, match, lastIndex, lastLength;
							
						str += "";
						
						if(!compliantExecNpcg) {
							
							separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
							
						}
						
						limit = limit === undef ?
						
							-1 >>> 0 : // Math.pow(2, 32) - 1
							
							limit >>> 0; // ToUint32(limit)
							
						while(match = separator.exec(str)) {
							
							lastIndex = match.index + match[0].length;
							
							if(lastIndex > lastLastIndex) {
								
								output.push(str.slice(lastLastIndex, match.index));
								
								if(!compliantExecNpcg && match.length > 1) {
									
									match[0].replace(separator2, function() {
										
										for(var i = 1; i < arguments.length - 2; i++) {
											
											if(arguments[i] === undef) {
												
												match[i] = undef;
												
											}
											
										}
										
									});
									
								}
								
								if(match.length > 1 && match.index < str.length) {
									
									Array.prototype.push.apply(output, match.slice(1));
									
								}
								
								lastLength = match[0].length;
								
								lastLastIndex = lastIndex;
								
								if(output.length >= limit) {
									
									break;
									
								}
								
							}
							
							if(separator.lastIndex === match.index) {
								
								separator.lastIndex++;
								
							}
							
						}
						
						if(lastLastIndex === str.length) {
							
							if(lastLength || !separator.test("")) {
								
								output.push("");
								
							}
							
						} else {
							
							output.push(str.slice(lastLastIndex));
							
						}
						
						return output.length > limit ? output.slice(0, limit) : output;
						
					};
					
					String.prototype.split = function(separator, limit) {
						
						return self(this, separator, limit);
						
					};
				
					return self;
				
				}();
		       
		    }
	
	
	/****************************************************************
	 * 
	 * 		基础配置
	 * 
	 * **************************************************************/
			
			var __groop__ = new Object(),__groop__={},__template__ = [];//模板接口应用
			
			global.Guide = function(){}
			
			//amd
			if ( typeof define === "function" && define.amd ) {
				
				define( "guide", [], function() {
					
					return guide;
					
				});
				
			}else{
				
				global[configure.guide] = guide;
				
			}
			
	/****************************************************************
	 * 
	 * 		初始化执行
	 * 
	 * **************************************************************/
			
			global.Guide.prototype.init = function(name,data,callback){
				
				var othis = this;
				
				this._start = configure.tmp_flag.start;
				
				this._end = configure.tmp_flag.end;
				
				this._stext = configure.tmp_flag.txt;
				
				this._shtml = configure.tmp_flag.html;
				
				this._repeat = configure.tmp_flag.repeat;
				
				this._script_before = configure.tmp_flag.js_before;
				
				this._script_after = configure.tmp_flag.js_after;
				
				this._script_appendto = configure.tmp_flag.js_appendto;
				
				this._script_append = configure.tmp_flag.js_append;
				
				this.__orange_dom__ = document.getElementById(name);
				
				if(__template__.indexOf(name) === -1){
					
					__template__.push(name);
					
				}else{
					
					alert(name+"："+"\u6a21\u677f\u540d\u79f0\u91cd\u590d\uff0c\u8bf7\u6838\u67e5！");
					
					return false;
					
				}
				
				if(this.__orange_dom__ === null){
					
					alert(name+"："+"\u6a21\u677f\u7a7a\u95f4\u4e0d\u5b58\u5728\uff0c\u8bf7\u6838\u67e5！");
					
					return false;
					
				}
				
				this.__realtime_data__ = data;
				
				this.__orange_dom__.__trmplate_name__ = name;
				
				this.___clean___();
				
				this.__orange_dom__.__orange_dom__ = this.__orange_dom__.cloneNode(true);
				
				this.__operation_dom__ = this.___render___();
				
				this.__orange_dom__.innerHTML = this.__operation_dom__.innerHTML;
				
				for(var lenj = this.__operation_dom__.attributes.length,
					
						j = 0,
						
						_attr;
						
						j < this.__operation_dom__.attributes.length; j++) {
					
					_attr = this.__operation_dom__.attributes[j];
					
					this.__orange_dom__.setAttribute(_attr.name,_attr.value);
					
				}
				
				this.__orange_dom__.__orange_dom__.className = this.__orange_dom__.__orange_dom__.className.replace(new RegExp('(\\s|^)' + '_guide' + '(\\s|$)'), ' ');
				
        		this.__orange_dom__.className = this.__orange_dom__.className.replace(new RegExp('(\\s|^)' + '_guide' + '(\\s|$)'), ' ');
				
				//引用模板方法 模板名，接口名
				var quote = function(name,callback,times){
					
					if(times===undefined) times = 5;
					
					if(times < 0){
						
						alert("\u6a21\u677f：\""+name+"\" \u6ca1\u6709\u8fd4\u56de\u63a5\u53e3\u0020\u6216\u0020\u4e0d\u5b58\u5728\uff0c\u8bf7\u6838\u5bf9");
						
					}else if(__groop__[name]===undefined){
						
						--times;
						
						setTimeout(function(){
							
							quote(name,callback,times);
							
						},100);
						
					}else{
						
						callback(__groop__[name]);
						
					}
					
				}
				
				//修改模板内容
				var _apply = function(data,logic){
					
					othis.logic = !logic?true:false;
					
					othis.apply(data);
					
				}
				
				this.__orange_dom__.__ultima_callback__ = callback;
				
				//返回参数，修改方法，数据，模板应用
				__groop__[name] = othis.__orange_dom__.__ultima_callback__(_apply,othis.__realtime_data__,quote);
				
				return __groop__[name];
				
			}
	
	/****************************************************************
	 * 
	 * 		 name:___clean___ detail:格式化模板代码
	 * 
	 * **************************************************************/
	
			global.Guide.prototype.___clean___ = function(){
				
				var othis = this,
				
					obj = this.__orange_dom__,
				
					htmlArr = obj.innerHTML
					
								.replace( /&lt;/g , "<")
								
								.replace( /&gt;/g , ">")
								
								.split("\n")
								
					,html="";
								
				for(var i = 0,leni = htmlArr.length;i<leni;i++){
					
					html+=htmlArr[i].trim();
					
				}
				
				obj.innerHTML = html;
				
				for(var all_childs = obj.querySelectorAll("*"),
				
						leni=all_childs.length-1,
						
						i=leni,
						
						repeat,js_before,js_after,js_appendto,js_append
						
						;i>-1;i--){
							
					js_before = all_childs[i].attributes[this._script_before];
					
					js_after = all_childs[i].attributes[this._script_after];
					
					js_appendto = all_childs[i].attributes[this._script_appendto];
					
					js_append = all_childs[i].attributes[this._script_append];
					
					if(js_before){
						
						all_childs[i].parentNode.insertBefore(document.createTextNode(this._start+""+js_before.value+""+this._end), all_childs[i] );
						
						all_childs[i].removeAttribute(this._script_before);
						
					}
					
					if(js_after){
						
						all_childs[i].parentNode.insertBefore(document.createTextNode(this._start+js_after.value+this._end), all_childs[i].nextSibling );
						
						all_childs[i].removeAttribute(this._script_after);
						
					}
					
					if(js_appendto){
						
						all_childs[i].insertBefore( document.createTextNode(this._start+""+js_appendto.value+""+this._end), all_childs[i].firstChild );
						
						all_childs[i].removeAttribute(this._script_appendto);
						
					}
					
					if(js_append){
						
						all_childs[i].appendChild(document.createTextNode(this._start+""+js_append.value+""+this._end));
						
						all_childs[i].removeAttribute(this._script_append);
						
					}
					
				}
				
				return this;
				
			}
	
	/****************************************************************
	 * 
	 * 		name:___render___ detail:根据对象和数据渲染模板
	 * 
	 * **************************************************************/
			
			global.Guide.prototype.___render___ = function(){
				
				var othis = this,
				
					node = this.__orange_dom__.__orange_dom__.cloneNode(true),
					
					codes = [],
					
					reg,reg2,reg3,reg4;
					
				eval('reg = /('+othis._start+othis._stext+'.+?'+othis._end+')|('+othis._start+othis._shtml+'.+?'+othis._end+')|('+othis._start+'.+?'+othis._end+')/');
				
				eval('reg2 = /('+othis._start+othis._shtml+othis._end+')|('+othis._start+othis._stext+othis._end+')|('+othis._start+othis._end+')/gi')
				
				eval('reg3 = /(\\n)|(\\r\\n)/g;')
				
				var _show = function(html){
					
					html = html.replace( /&lt;/g , "<").replace( /&gt;/g , ">").replace(reg2, '');
					
					codes=[];
					
					codes.push("var results = [];");
					
					codes.push("with(context) {");
					
					var frags = html.split(reg);
					
					for (var i = 0; i < frags.length; i++) {
					
						var frag = frags[i],_filed = "";
						
						if (!frag) continue;
						
						frag = frag.trim().replace(reg3, '');
						
						if (frag.indexOf(othis._start+othis._stext) === 0) {
							
							_filed = frag.substring((othis._start+othis._stext).length, frag.length - othis._end.length);
							
							if(_filed.trim()!==""){
								
								codes.push("if(" +_filed+ "!==undefined && typeof " +_filed+ " ==='string'){");
								
								codes.push("results.push((" +_filed+ ").replace(/</g, '&lt;').replace(/>/g, '&gt;'));");
								
								codes.push("}else{");
								
								codes.push("results.push((" +_filed+ "));");
								
								codes.push("}");
							}
						
						}else if (frag.indexOf(othis._start+othis._shtml) === 0) {
						
							_filed = frag.substring((othis._start+othis._shtml).length, frag.length - othis._end.length);
							
							if(_filed.trim()!==""){
								
								codes.push("results.push((" +_filed+ "));");
								
							}
						
						}else if (frag.indexOf(othis._start) === 0) {
							
						    codes.push(frag.substring(othis._start.length, frag.length - othis._end.length));
						    
						}else {
							
						    codes.push("results.push('" + frag.replace(/'/g, '\\\'').split('\n').join('\\n') + "');");
						    
					    }
						
					}
					codes.push("}");
					
					codes.push("return results.join('');");
					
					return new Function("context", codes.join("\n"))(othis.__realtime_data__);
					
				}
				
				for(var lenj = node.attributes.length,
					
						j = 0,
						
						_attr;
						
						j < node.attributes.length; j++) {
					
					_attr = node.attributes[j];
					
					if(_attr.value.indexOf(othis._start)>-1){
						
						node.setAttribute(_attr.name,_show(_attr.value));
						
					}
					
				}
				
				node.innerHTML = _show(node.innerHTML);
				
				return node;
				
			}
	
	/****************************************************************
	 * 
	 * 		name:___update___ detail:两个对象匹配，找出不同点注入替换
	 * 
	 * **************************************************************/
	
			global.Guide.prototype.___update___ = function(data){
				
				this.__realtime_data__ = data;
				
				var othis = this,
				
					new_node = this.___render___(),//新
					
					old_node = this.__orange_dom__,
					
					contrast = function(old_node,new_node,isCoherent){
						
						var new_childs = new_node.childNodes,
							
							new_length = new_childs.length,
						
							old_childs = old_node.childNodes,
							
							old_length = old_childs.length,
							
							new_ele,old_ele,
							
							new_attrs = new_node.attributes,
							
							old_attrs = old_node.attributes,
							
							new_attr,old_attr;
						
						/* 对比属性 */
						for(var leni = old_attrs.length,
							
							i = 0;
							
							i < leni; i++) {
							
							new_attr = new_attrs[i];
							
							old_attr = old_attrs[i];
							
							if(
								!!new_attr
								
								&&
								
								!!old_attr
								
								&&
								
								new_attr.value !== old_attr.value 
								
								&&
								
								old_attr.name === new_attr.name
							
							){
								
								old_node.setAttribute(old_attr.name,new_attr.value);
								
							}
							
						}
						
						if(othis.logic){
							
							old_node.innerHTML = new_node.innerHTML;
							
						}else if(new_length <= old_length){
							//新自己诶单和
							
							for(var leni = old_length,
								
									i =leni-1;
								
								i>-1;i--){
									
								old_ele = old_childs[i];
								
								new_ele = new_childs[i];
								
								switch(old_ele.nodeType){
									
									case 3:
										
										if(new_ele === undefined){
											
											old_ele.parentNode.removeChild(old_ele);
											
										}else{
											
											if(old_ele.data!==new_ele.data) old_ele.data = new_ele.data;
											
										}
										
									break;
									
									case 1:
									
										if(new_ele === undefined){
											
											//这个节点在新结构是不存在的，应该删除
											old_ele.parentNode.removeChild(old_ele);
											
										}else{
											
											contrast(old_ele,new_ele);
										}
										
									break;
									
								}
								
								new_ele = old_ele = undefined;
								
							}
									
						}else{
							
							for(var leni = new_length,
								
								i =0;
								
								i<leni;i++){
							
								new_ele = new_childs[i];
								
								old_ele = old_childs[i];
								
								switch(new_ele.nodeType){
									
									case 3:
									
										if(old_ele === undefined){
											
											old_node.appendChild(new_ele.cloneNode(true));
											
										}else{
											
											if(old_ele.data!==new_ele.data) old_ele.data = new_ele.data;
											
										}
										
									break;
									
									case 1:
									
										if(old_ele === undefined){
											
											//这个节点在新结构是不存在的，应该删除
											old_node.appendChild(new_ele.cloneNode(true));
											
										}else{
											
											contrast(old_ele,new_ele);
											
										}
									
									break;
								}
								
								new_ele = old_ele = undefined;
								
							}
								
						}
						
					};//对比方法名,最后一个参数为ture表示下方结构与之前结构不一致，执行全部替换操作
					
				contrast(old_node,new_node,false);
				
				return this;
				
			}
	
	/****************************************************************
	 * 
	 * 		 name:apply detail:执行数据更新
	 * 
	 * **************************************************************/
	
			global.Guide.prototype.apply = function(data){
				
				/*数据处理*/
				for(var x in data){
					
					this.__realtime_data__[x] = data[x];
					
				}
				
				this.___update___(this.__realtime_data__);
				
				return this;
				
			}
			
			
		})(typeof window !== "undefined" ? window : this,function(name,data,callback){
			
			//四个参数：模板名称、模板数据、模板回调方法、是否启动模板逻辑false|true
			
			var guide = new Guide();
			
			return guide.init(name,data,callback);
			
		},{
			guide:"OS",
			
			tmp_flag:{
				
				start:"<#",
				
				end:"#>",
				
				txt:"=",
				
				html:":",
				
				repeat:"os-repeat",
				
				js_appendto:"js-appendto",
				
				js_append:"js-append",
				
				js_before:"js-before",
				
				js_after:"js-after"
				
			}
			
		});