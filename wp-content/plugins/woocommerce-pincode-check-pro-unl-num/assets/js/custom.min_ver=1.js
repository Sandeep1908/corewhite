jQuery(document).ready(function($){
	// alert();
			if(usejs == 1)
			{
					
				jQuery("body").on("click","#checkpin",function(){
					
					if(area_wise_delivery !== 'newnew'){
						
						var pin_code = jQuery.trim(jQuery('#pincode_field_id').val());
						var phoen_state_list_shop = jQuery.trim(jQuery('#phoen_state_list_shop').val());
			
					}else{
						
						var pin_code = jQuery.trim(jQuery('#phoen_area_select_1 .area_list').val());
						var phoen_state_list_shop = jQuery.trim(jQuery('.phoen_city_1 .city_list').val());
						
					}
					
					if(pin_code == '' || pin_code.length < pincode_length || pin_code.length > pincode_length )
					{	
						 jQuery('#error_pin').hide();
						 
						jQuery('#error_pin_b').show();
						
						jQuery('.delivery-info-wrap').hide();
						
						jQuery('#pincode_field_id').val('');
					}
					else
					{
						jQuery('#error_pin_b').hide();
					
					   jQuery('#error_pin').hide();

					   jQuery('#chkpin_loader').show();
					   
					   jQuery('.delivery-info-wrap2').hide(); 
					   
					   var product_id = jQuery('#pincode_field_id').attr('data-mine');
					 
					   if(product_id==undefined){
						   product_id = jQuery('.phoen_city_1 #phoen_city_list').attr('data-mine');
					   }
					     
						var phoen_state_list = jQuery('#phoen_state_list_shop').val();
						
						if(phoen_state_list==undefined){
							
							phoen_state_list = jQuery('.phoen_maie_kked #phoen_state_list').val();
						
						} 
			
					   jQuery.ajax({
								url : MyAjax.ajaxurl,
								type : 'post',
								data : {
								action : 'picodecheck_ajax_submit',
								pin_code : pin_code,
								state : phoen_state_list_shop,
								product_id : product_id,
								state:phoen_state_list
								},
								success : function( response ) 
								{
									// alert(411);
									var result = response.split("####");
							
									if(result[5] === 'reload'){
										// location.reload();
									}
									
									
									if(result[0] == 11)
									{		
								
										jQuery('.ul-disc').html(result[1]);
										
										jQuery('img.phoen_chk_avail').attr('src',right_image);
										
										jQuery('.cash-on-delivery').text(result[2]);
										
										jQuery('.delivery-info-wrap2').show();
										
										jQuery('.delivery-info-wrap').show(); 
										
										jQuery('#avlpin').show();
										
										jQuery('#my_custom_checkout_field2').hide();
										
										jQuery('.pincode_field_id_a').val(pin_code);
										
										
										if( show_s_on_pro == 1 && show_c_on_pro != 1 )
										{
											
											jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code );
											jQuery('#avat .pincode_custom_text').text('('+result[3]+')');
											
											
										}
										else if( show_c_on_pro == 1 && show_s_on_pro != 1 )
										{
											jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code);
											jQuery('#avat .pincode_custom_text').text('('+result[4]+')');
										
										}
										else if(show_c_on_pro == 1 && show_s_on_pro == 1)
										{
											jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code);
											jQuery('#avat .pincode_custom_text').text('('+result[4]+', '+result[3]+')');
											
										}
										else
										{
											
											jQuery('#avat').text(available_at+' '+pin_code);
											
										}
																				
									}
									else if((result[0] == 10))
									{
									// alert(12);
										jQuery('.ul-disc').html(result[1]);
										
										jQuery('img.phoen_chk_avail').attr('src',not_avail);
										
										jQuery('.cash-on-delivery').text(result[2]);
										
										jQuery('.delivery-info-wrap2').show();
										
										jQuery('.delivery-info-wrap').show(); 
										
										jQuery('#avlpin').show();
										
										jQuery('#my_custom_checkout_field2').hide();
										
										jQuery('.pincode_field_id_a').val(pin_code);
										
										if( show_s_on_pro == 1 && show_c_on_pro != 1 )
										{
											
											jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code );
											jQuery('#avat .pincode_custom_text').text('('+result[3]+')');
											
											
										}
										else if( show_c_on_pro == 1 && show_s_on_pro != 1 )
										{
											jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code);
											jQuery('#avat .pincode_custom_text').text('('+result[4]+')');
										
										}
										else if(show_c_on_pro == 1 && show_s_on_pro == 1)
										{
											jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code);
											jQuery('#avat .pincode_custom_text').text('('+result[4]+', '+result[3]+')');
											
										}
										else
										{
											
											jQuery('#avat').text(available_at+' '+pin_code);
											
										}
										
									}
									else
									{
									
										jQuery('#chkpin_loader').hide();

										jQuery('#error_pin').show();
										 
										jQuery('#pincode_field_id').val('');
										
										jQuery('.delivery-info-wrap').hide();
										
									}
									
									jQuery('#chkpin_loader').hide();
										
								}
						});

					}

				});

				if(val_pro_page == 1)
				{			
			
					jQuery(".single_add_to_cart_button").click(function() {
					   
						var pin_code_a = jQuery('.pincode_field_id_a').val();
						
						var pin_code = jQuery.trim(jQuery('#pincode_field_id').val());
						
						
						if(typeof pin_code_a === "undefined" || pin_code_a == "")
						{
							
							if(pin_code == '' || pin_code.length < pincode_length || pin_code.length > pincode_length )
							{
								
								jQuery('#error_pin').hide();
								
								jQuery('.delivery-info-wrap').hide();
								 
								jQuery('#error_pin_b').show();
								
								jQuery('#pincode_field_id').val('');
							}
							else
							{
								
									jQuery('#error_pin').hide();
									
									jQuery('#chkpin_loader').show();
									
									jQuery('#error_pin_b').hide();
									
									var phoen_state_list = jQuery('#phoen_state_list_shop').val();
						
									if(phoen_state_list==undefined){
										
										phoen_state_list = jQuery('.phoen_maie_kked #phoen_state_list').val();
								
									
									}
									
									var product_id = jQuery('#phoen_product_id').val();
									
									jQuery.ajax({
										url : MyAjax.ajaxurl,
										type : 'post',
										data : {
										action : 'picodecheck_ajax_submit',
										pin_code : pin_code,
										product_id : product_id,
										state:phoen_state_list
										},
										success : function( response ) 
										{
									
											var result = response.split("####");
											
											if(result[5] === 'reload'){
												location.reload();
											}
											if(result[0] == 11)
											{
												jQuery('.ul-disc').html(result[1]);
												
												jQuery('.phoen_chk_avail img').attr('src',right_image);
												
												jQuery('.cash-on-delivery').text(result[2]);
												
												jQuery('.delivery-info-wrap2').show(); 
												
												jQuery('.delivery-info-wrap').show(); 
												
												jQuery('#avlpin').show();
												
												jQuery('#my_custom_checkout_field2').hide();
												
												jQuery('.pincode_field_id_a').val(pin_code);
												
												if( show_s_on_pro == 1 && show_c_on_pro != 1 )
												{
													
													jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code );
													jQuery('#avat .pincode_custom_text').text('('+result[3]+')');
													
													
												}
												else if( show_c_on_pro == 1 && show_s_on_pro != 1 )
												{
													jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code);
													jQuery('#avat .pincode_custom_text').text('('+result[4]+')');
												
												}
												else if(show_c_on_pro == 1 && show_s_on_pro == 1)
												{
													jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code);
													jQuery('#avat .pincode_custom_text').text('('+result[4]+', '+result[3]+')');
													
												}
												else
												{
													jQuery('#avat').text(available_at+' '+pin_code);
												}
												
												jQuery('.cart').submit();

											}
											else if((result[0] == 10))
											{
												
												jQuery('.ul-disc').html(result[1]);
												
												/* if(result[2] == cod_msg1){
											
													jQuery('.phoen_chk_avail img').attr('src',right_image);
													
												}else{
													
													jQuery('.phoen_chk_avail img').attr('src',not_avail);
												
												} */
												jQuery('.phoen_chk_avail img').attr('src',not_avail);
												
												jQuery('.cash-on-delivery').text(result[2]);
												
												jQuery('.delivery-info-wrap2').show();
												
												jQuery('.delivery-info-wrap').show(); 
												
												jQuery('#avlpin').show();
												
												jQuery('#my_custom_checkout_field2').hide();
												
												jQuery('.pincode_field_id_a').val(pin_code);
												
												if( show_s_on_pro == 1 && show_c_on_pro != 1 )
												{
													
													jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code );
													jQuery('#avat .pincode_custom_text').text('('+result[3]+')');
													
													
												}
												else if( show_c_on_pro == 1 && show_s_on_pro != 1 )
												{
													jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code);
													jQuery('#avat .pincode_custom_text').text('('+result[4]+')');
												
												}
												else if(show_c_on_pro == 1 && show_s_on_pro == 1)
												{
													jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code);
													jQuery('#avat .pincode_custom_text').text('('+result[4]+', '+result[3]+')');
													
												}
												else
												{
													jQuery('#avat').text(available_at+' '+pin_code);
												}
												
												jQuery('.cart').submit();

											}
											else
											{
												jQuery('#chkpin_loader').hide();

												jQuery('#error_pin').show();
												
												jQuery('.delivery-info-wrap').hide();
												
												jQuery('#error_pin_b').hide();
												 
												jQuery('#pincode_field_id').val('');
												
											}
											
											jQuery('#chkpin_loader').hide();
											
										}
									});
								 
									return false;
								
							}
						}
						
						
						var check_vis = jQuery('#my_custom_checkout_field2').is(':visible');
						
						if( check_vis == true)
						{
							if(pin_code == '' || pin_code.length < pincode_length || pin_code.length > pincode_length )
							{
								
								jQuery('#error_pin').hide();
								 
								jQuery('#error_pin_b').show();
								
								jQuery('.delivery-info-wrap').hide();
								
								jQuery('#pincode_field_id').val('');
							}
							else
							{	
									
								jQuery('#error_pin').hide();
								
								jQuery('#error_pin_b').hide();
								
								jQuery('#chkpin_loader').show();
								
								var product_id = jQuery('#phoen_product_id').val();
								
									var phoen_state_list = jQuery('#phoen_state_list_shop').val();
						
									if(phoen_state_list==undefined){
										
										phoen_state_list = jQuery('.phoen_maie_kked #phoen_state_list').val();
									
									} 
									
									jQuery.ajax({	
									url : MyAjax.ajaxurl,
									type : 'post',
									data : {
									action : 'picodecheck_ajax_submit',
									pin_code : pin_code,
									product_id : product_id,
									state:phoen_state_list
									},
									success : function( response )
									{
									
										var result = response.split("####");
										if(result[5] === 'reload'){
											location.reload();
										}
										if(result[0] == 11)
										{
											jQuery('.ul-disc').html(result[1]);
											
											jQuery('.phoen_chk_avail img').attr('src',right_image);
											
											jQuery('.cash-on-delivery').text(result[2]);
											
											jQuery('.delivery-info-wrap2').show(); 
											
											jQuery('.delivery-info-wrap').show(); 
											
											jQuery('#avlpin').show();
											
											jQuery('#my_custom_checkout_field2').hide();
											
											jQuery('.pincode_field_id_a').val(pin_code);
											
											if( show_s_on_pro == 1 && show_c_on_pro != 1 )
											{
												
												jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code );
												jQuery('#avat .pincode_custom_text').text('('+result[3]+')');
												
												
											}
											else if( show_c_on_pro == 1 && show_s_on_pro != 1 )
											{
												jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code);
												jQuery('#avat .pincode_custom_text').text('('+result[4]+')');
											
											}
											else if(show_c_on_pro == 1 && show_s_on_pro == 1)
											{
												jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code);
												jQuery('#avat .pincode_custom_text').text('('+result[4]+', '+result[3]+')');
												
											}
											else
											{
												jQuery('#avat').text(available_at+' '+pin_code);
											}
											
											// jQuery('.cart').submit();

										}
										else if((result[0] == 10))
										{
											
											jQuery('.ul-disc').html(result[1]);
											
											/* if(result[2] == cod_msg1){
										
												jQuery('.phoen_chk_avail img').attr('src',right_image);
												
											}else{
												
												jQuery('.phoen_chk_avail img').attr('src',not_avail);
												
											} */
											
											jQuery('.phoen_chk_avail img').attr('src',not_avail);
											
											jQuery('.cash-on-delivery').text(result[2]);
											
											jQuery('.delivery-info-wrap2').show();
											
											jQuery('.delivery-info-wrap').show(); 
											
											jQuery('#avlpin').show();
											
											jQuery('#my_custom_checkout_field2').hide();
											
											jQuery('.pincode_field_id_a').val(pin_code);
											
											if( show_s_on_pro == 1 && show_c_on_pro != 1 )
											{
												
												jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code );
												jQuery('#avat .pincode_custom_text').text('('+result[3]+')');
												
												
											}
											else if( show_c_on_pro == 1 && show_s_on_pro != 1 )
											{
												jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code);
												jQuery('#avat .pincode_custom_text').text('('+result[4]+')');
											
											}
											else if(show_c_on_pro == 1 && show_s_on_pro == 1)
											{
												jQuery('#avat .pincode_static_text').text(available_at+' '+pin_code);
												jQuery('#avat .pincode_custom_text').text('('+result[4]+', '+result[3]+')');
												
											}
											else
											{
												jQuery('#avat').text(available_at+' '+pin_code);
											}
											
											// jQuery('.cart').submit();
						
										}
										else
										{
											jQuery('#chkpin_loader').hide();

											jQuery('#error_pin').show();
											
											jQuery('.delivery-info-wrap').hide();
											 
											jQuery('#pincode_field_id').val('');
											
										}
										
										jQuery('#chkpin_loader').hide();
										
									}
								});
								 
								return false;
								
							}
							
						}
						   
					});
				
				}
				
			}


			if ($('#billing_postcode').length > 0) {
				
			   $("#billing_postcode").attr("maxlength", pincode_length);
			   
			}
			
			if ($('#shipping_postcode').length > 0) {
			   
			   $("#shipping_postcode").attr("maxlength", pincode_length);
			}
			
			if ($('#calc_shipping_postcode').length > 0) {
			   
			   $("#calc_shipping_postcode").attr("maxlength", pincode_length);
			}
		
		
		
			/* $(this).on( 'change', '.woocommerce-checkout .form-row input#billing_postcode', function() {
				
				updated_checkout();
				
				
			});  */
			
		jQuery(document.body).on('updated_checkout', function(){
			//alert("hii");
			var pin_code = jQuery('#billing_postcode').val();
			//console.log(pincode_length);
			//console.log("length"+pin_code.length);
			if(pincode_length == pin_code.length){
				updated_checkout();
			}

		}); 
	
			function updated_checkout()
			{
				var $this = jQuery('#ship-to-different-address-checkbox');
				
				var pin_code = jQuery('#shipping_postcode').val();
	
						
				if( $this.is(':checked') == true )
		     	{
                          
					jQuery("#billing_postcode").removeClass("error_class"); 
					
					jQuery("#shipping_postcode").removeClass("error_class"); 

					var pin_code = jQuery('#shipping_postcode').val();
					
					jQuery('.checkout').block({message: null, overlayCSS: { background: '#fff', opacity: 0.6 }});

					jQuery.ajax({
						url : MyAjax.ajaxurl,
						type : 'post',
						data : {
						action : 'picodecheck_ajax_submit_out',
						pin_code : pin_code
						},
						success : function( response )
						{
							
							var json_obj = jQuery.parseJSON( response );
							 
							if( json_obj.json.error > 0)
							{
								//console.log('chekif if');
								
								if( remove_cod == 1 )
								{
									//jQuery('li.payment_method_cod').html('');
									jQuery('li.payment_method_cod').hide();
									
									jQuery('.chng_pincode_checkout').text(pin_code);
									
									jQuery('#remove_pro_popup_id').show();
									//jQuery('div.place-order #place_order').remove();
									// jQuery('div.place-order #place_order').hide();
								
								}
							
								if(hide_place_no_match == 1){
									jQuery('div.place-order #place_order').hide();
								}
								
							}
							else
							{
								//console.log('check_if else');
								
							
								if( remove_cod == 1 )
								{
									
									if(json_obj.json.cod == 'yes')
									{
										
										//var cod_html = jQuery('.phoen-cod-html-div').html();
										
										var place_order_button = jQuery('.phoen-place-order-html-div').html();
										
										jQuery('li.payment_method_cod').show();
										
									}
									else
									{  
										//jQuery('li.payment_method_cod').html('');
										jQuery('li.payment_method_cod').hide();
										
									}
									
									jQuery('#remove_pro_popup_id').hide();
								
								}
								if(remove_place_order == 1){
											
									if(json_obj.json.cod == 'yes')
									{
										
										//var place_order_button = jQuery('.phoen-place-order-html-div').html();
										
										//jQuery('li.payment_method_cod').html(cod_html);
										jQuery('li.payment_method_cod').show();
										if(jQuery('div.place-order').find('#place_order').length == 0){
											jQuery('div.place-order').show();
										
										}
										
									}
									else
									{
									
										jQuery('div.place-order #place_order').hide();
									}
									
								} 
																
							}
							//console.log('696=='+json_obj.json.error);
							if(json_obj.json.error == 0){
								jQuery('div.place-order #place_order').show();
							}
							if(json_obj.json.error != 0 && pincode_length == pin_code.length){
								jQuery('#remove_pro_popup_id').show();
							}
							jQuery('.checkout').unblock();

						}
					}); 
						
				
				} else {
  
					var pin_code = jQuery('#billing_postcode').val();
					
						var id;
				
					jQuery("#billing_postcode").removeClass("error_class"); 
                    
					jQuery('.checkout').block({message: null, overlayCSS: { background: '#fff', opacity: 0.6 }});

					jQuery.ajax({
						url : MyAjax.ajaxurl,
						type : 'post',
						data : {
						action : 'picodecheck_ajax_submit_out',
						pin_code : pin_code
						},
						success : function( response )
						{
						
							var json_obj = jQuery.parseJSON( response );
						
							if( json_obj.json.error > 0)
							{
								
								if( remove_cod == 1)
								{						
									
									var cod_html = jQuery('li.payment_method_cod ').html();
									
									jQuery('li.payment_method_cod').hide();
									
									jQuery('.chng_pincode_checkout').text(pin_code);
									
									jQuery('#remove_pro_popup_id').show();
									
								}
								if(hide_place_no_match == 1){
									
									jQuery('div.place-order #place_order').hide();
									
								}

							}
							else
							{
								
								if( remove_cod == 1 )
								{
									
									if(json_obj.json.cod == 'yes')
									{
										var place_order_button = jQuery('.phoen-place-order-html-div').html();
										
										if(remove_place_order == 1){
									
											if(jQuery('div.place-order').find('#place_order').length == 0){
												jQuery('div.place-order').show();
												
													
											}
										} 
										
										var cod_html = jQuery('.phoen-cod-html-div').html();
										
										jQuery('li.payment_method_cod').show();
									}
									else
									{
										
										var cod_html = jQuery('li.payment_method_cod ').html();
									
										jQuery('li.payment_method_cod').hide();
											
									}
									
									jQuery('#remove_pro_popup_id').hide();
							
								
								}
								
								
								if(remove_place_order == 1){
											
									if(json_obj.json.cod == 'yes')
									{
										
										//var place_order_button = jQuery('.phoen-place-order-html-div').html();
										
										//jQuery('li.payment_method_cod').html(cod_html);
										jQuery('li.payment_method_cod').show();
										if(jQuery('div.place-order').find('#place_order').length == 0){
											jQuery('div.place-order').show();
										
										}
										
									}
									else
									{
									
										jQuery('div.place-order #place_order').hide();
									}
									
								} 
							}
							
							//console.log('814=='+json_obj.json.error);
							if(json_obj.json.error == 0){
								jQuery('div.place-order #place_order').show();
							}
							if(json_obj.json.error != 0 && pincode_length == pin_code.length){
								jQuery('#remove_pro_popup_id').show();
							}
							jQuery('.checkout').unblock();
						}
						
					}); 

				}
				
			}   

            jQuery('body').bind('click',function(e){
 
                jQuery('.delivery_help_text_main').hide();
                
                jQuery('.cash_on_delivery_help_text_main').hide();
                
             });
			 
			jQuery("#delivery_help_a").click( function(e){
		  
				e.stopPropagation();

				jQuery('.delivery_help_text_main').show();

				jQuery('.cash_on_delivery_help_text_main').hide();

			});


			jQuery("#cash_n_delivery_help_a").click( function(e){
			  
				e.stopPropagation();

				jQuery('.cash_on_delivery_help_text_main').show();

				jQuery('.delivery_help_text_main').hide();

			});

			jQuery("#delivery_help_x").click( function(e){
			  
				e.stopPropagation();

				jQuery('.delivery_help_text_main').hide();

			});

			jQuery("#cash_n_delivery_help_x").click( function(e){
			  
				e.stopPropagation();

				jQuery('.cash_on_delivery_help_text_main').hide();


			});

			jQuery(".delivery_help_text").click( function(e){
			  
				e.stopPropagation();

			});

        
			jQuery(".cash_on_delivery_help_text").click( function(e){
			  
				e.stopPropagation();

			});
        
			jQuery("#change_pin").click(function(){
		
				jQuery('#my_custom_checkout_field2').show();

				jQuery('#avlpin').hide();

			});
		
			// process the form
			jQuery('#pho_home_pck').submit(function(event) {
					
				var pin_code = jQuery.trim( jQuery('#enter_pincode').val() );
				var phoen_state_list = jQuery.trim( jQuery('#phoen_state_list').val() );
			
				if(area_wise_delivery !=="newnew"){
					
					if(pin_code == ''  || pin_code.length < pincode_length || pin_code.length > pincode_length)
						{
							jQuery('#error_pinn').hide();
							 
							jQuery('#error_pin_bn').show();
							
							jQuery('#enter_pincode').val('');
							
						}
						else
						{					
							var formURL = $(this).attr("action");
							
							var site_url = $(this).attr("data-siteurl");
							
							var this_length=jQuery(this).closest(".pincode-pho-popup").find(".pho-para a").length;
					
							jQuery('#error_pin_bn').hide();

							jQuery('#error_pinn').hide();

							jQuery('.delivery-info-wrap2').hide(); 
							
							jQuery('#home_chkpin_loader').show();

							jQuery.ajax({
									url : MyAjax.ajaxurl,
									type : 'post',
									data : {
									action :  'picodecheck_ajax_submit_home',
									state : phoen_state_list,
									pin_code : pin_code
									},
									success : function( response ) 
									{
							
										jQuery('#home_chkpin_loader').hide();
										
										var result = response.split("####");
										
										if( result[0] == 11 || result[0] == 10 )
										{
											
											jQuery('.pho-close_btn ').show();										
											
											jQuery('.pho-para p').text(pincode_success_msg+'( '+ pin_code +' ).');
											
											setTimeout(function(){
																	
												jQuery('.pho-pincode-popup-body').hide();
										
											}, 1000);
											
										}
										else
										{
										
											jQuery('#error_pinn').show();
											 
											jQuery('#enter_pincode').val('');
											
											jQuery('#error_pin_bn').hide();
											
											jQuery('.pho-para p').text(unsuccess_msg);
											
											if(link_invalid_pin==1 && this_length === 0){
												
												jQuery('.pho-para p').after('<a href="'+unsuccess_link+'">'+unsuccess_link_text+'</a>');
												
											}
											
										}

									},
									error: function (jqXHR, exception) {
										var msg = '';
										if (jqXHR.status === 0) {
											msg = 'Not connect.\n Verify Network.';
										} else if (jqXHR.status == 404) {
											msg = 'Requested page not found. [404]';
										} else if (jqXHR.status == 500) {
											msg = 'Internal Server Error [500].';
										} else if (exception === 'parsererror') {
											msg = 'Requested JSON parse failed.';
										} else if (exception === 'timeout') {
											msg = 'Time out error.';
										} else if (exception === 'abort') {
											msg = 'Ajax request aborted.';
										} else {
											msg = 'Uncaught Error.\n' + jqXHR.responseText;
										}
										
										console.log(msg);
										
									},
									
							});
				
						}
				} else{
					
						var phoen_state_list = jQuery('#phoen_city_list').val();	
						
						var phoen_area_list = jQuery('#phoen_area_list').val();		
						
						var formURL = $(this).attr("action");
						
						var site_url = $(this).attr("data-siteurl");
						
						var this_length=jQuery(this).closest(".pincode-pho-popup").find(".pho-para a").length;
						
						jQuery('#error_pin_bn').hide();

						jQuery('#error_pinn').hide();

						jQuery('.delivery-info-wrap2').hide(); 
						
						jQuery('#home_chkpin_loader').show();

						jQuery.ajax({
								url : MyAjax.ajaxurl,
								type : 'post',
								data : {
								action :  'picodecheck_ajax_submit_home',
								pin_code : phoen_area_list,
								state:phoen_state_list
								},
								success : function( response ) 
								{
							
									jQuery('#home_chkpin_loader').hide();
									
									var result = response.split("####");
									
									if( result[0] == 11 || result[0] == 10 )
									{
										
										jQuery('.pho-close_btn ').show();										
										
										jQuery('.pho-para p').text(pincode_success_msg+'( '+ phoen_area_list +' ).');
										
										setTimeout(function(){
																	
											jQuery('.pho-pincode-popup-body').hide();
									
										}, 1000);
									}
									else
									{
									
										jQuery('#error_pinn').show();
										 
										jQuery('#enter_pincode').val('');
										
										jQuery('#error_pin_bn').hide();
										
										jQuery('.pho-para p').text(unsuccess_msg);
										
										if(link_invalid_pin==1 && this_length === 0){
											jQuery('.pho-para p').after('<a href="'+unsuccess_link+'">'+unsuccess_link_text+'</a>');
										}
										
									}

								},
								error: function (jqXHR, exception) {
									var msg = '';
									if (jqXHR.status === 0) {
										msg = 'Not connect.\n Verify Network.';
									} else if (jqXHR.status == 404) {
										msg = 'Requested page not found. [404]';
									} else if (jqXHR.status == 500) {
										msg = 'Internal Server Error [500].';
									} else if (exception === 'parsererror') {
										msg = 'Requested JSON parse failed.';
									} else if (exception === 'timeout') {
										msg = 'Time out error.';
									} else if (exception === 'abort') {
										msg = 'Ajax request aborted.';
									} else {
										msg = 'Uncaught Error.\n' + jqXHR.responseText;
									}
									
									console.log(msg);
									
								},
								
						});
			
					// }
				}
				
				event.preventDefault();
					
			});
			
			jQuery('#pho_home_pck_shop,#pho-submit_btn_shop').submit(function(event) {
			
				var pin_code = jQuery.trim( jQuery('#enter_pincode_shop').val() );
				
				jQuery('#shop_chkpin_loader1').show();
				
				if(area_wise_delivery !=="newnew"){
				
					if( pin_code == ''  || pin_code.length < pincode_length || pin_code.length > pincode_length )
					{
						jQuery('#shop_chkpin_loader1').hide();
						
						jQuery('#error_pin_shop').hide();
						 
						jQuery('#error_pin_b_shop').show();
						
						jQuery('#enter_pincode_shop').val('');
						
					}
					else
					{
						
						var formURL = $(this).attr("action");
						
						var site_url = $(this).attr("data-siteurl");
						
						var product_id = jQuery.trim( jQuery('#popup_pro_id_shop').val() );
						
						var phoen_state_list = jQuery('#phoen_state_list_shop').val();
						
						if(phoen_state_list==undefined){
							
							phoen_state_list = jQuery('.phoen_maie_kked #phoen_state_list').val();
						
						}
						
						var this_length=jQuery(this).closest(".pincode-pho-popup").find(".pho-para a").length;
					
						jQuery('#error_pin_b_shop').hide();
					
						jQuery('#error_pin_shop').hide();

						jQuery('.delivery-info-wrap2').hide();
						
						var phoen_state_list = jQuery('#phoen_state_list_shop').val();
				
							if(phoen_state_list==undefined){
								
								phoen_state_list = jQuery('.phoen_maie_kked #phoen_state_list').val();
							
							} 
						
						jQuery.ajax({
								url : MyAjax.ajaxurl,
								type : 'post',
								data : {
								action :  'picodecheck_ajax_submit',
								pin_code : pin_code,
								product_id : product_id,
								state : phoen_state_list
								},
								success : function( response ) 
								{
									
									var result = response.split("####");
									
									var phoen_checkpin_min=true;
									
									if(result[5] === 'reload'){
										location.reload();
									}
									if( result[0] == 11 || result[0] == 10 )
									{
										jQuery('#shop_chkpin_loader1').hide(); 
										
										jQuery('#cookie_pin_shop').val( pin_code );
										
										jQuery('.pho-pincode-popup-body-shop').hide();
										
										jQuery('#popup_pro_id_shop').val( '' );
										
										jQuery('#enter_pincode_shop').val('');
										
										location.reload();
										
									}
									else
									{
										
										jQuery('#shop_chkpin_loader1').hide(); 
										
										jQuery('#error_pin_shop').show();
										 
										jQuery('#enter_pincode_shop').val('');
										
										jQuery('#error_pin_b_shop').hide();
										
										jQuery('.pho-para p').text(unsuccess_msg);
										
										if(link_invalid_pin==1 && this_length === 0){
											
											jQuery('.pho-para p').after('<a href="'+unsuccess_link+'">'+unsuccess_link_text+'</a>');
											
										}
							
									}
									
									if(result[5] === 'reload'){
										
										window.location.reload(true);

									} 
								
								},
								error: function (jqXHR, exception) {
									var msg = '';
									if (jqXHR.status === 0) {
										msg = 'Not connect.\n Verify Network.';
									} else if (jqXHR.status == 404) {
										msg = 'Requested page not found. [404]';
									} else if (jqXHR.status == 500) {
										msg = 'Internal Server Error [500].';
									} else if (exception === 'parsererror') {
										msg = 'Requested JSON parse failed.';
									} else if (exception === 'timeout') {
										msg = 'Time out error.';
									} else if (exception === 'abort') {
										msg = 'Ajax request aborted.';
									} else {
										msg = 'Uncaught Error.\n' + jqXHR.responseText;
									}
									
									console.log(msg);
									
								},
								
						});
			
					}
				}else{
					
					var phoen_state_list = jQuery('.phoen_city_min #phoen_city_list').val();	
						
					var phoen_area_list = jQuery('.phoen_area_min #phoen_area_list').val();		
					
					var formURL = $(this).attr("action");
					
					var site_url = $(this).attr("data-siteurl");
					
					var product_id = jQuery.trim( jQuery('#popup_pro_id_shop').val() );
					
					var this_length=jQuery(this).closest(".pincode-pho-popup").find(".pho-para a").length;
					// var phoen_state_list = jQuery('#phoen_state_list_shop').val();
					
					jQuery('#error_pin_b_shop').hide();
				
					jQuery('#error_pin_shop').hide();

					jQuery('.delivery-info-wrap2').hide();
					
					jQuery.ajax({
							url : MyAjax.ajaxurl,
							type : 'post',
							data : {
							action :  'picodecheck_ajax_submit',
							pin_code : phoen_area_list,
							product_id : product_id,
							state : phoen_state_list
							},
							success : function( response ) 
							{
							
								var result = response.split("####");
					
								if(result[5] === 'reload'){
									
										location.reload();
										
								}
								
									var phoen_checkpin_min=true;
									
								if( result[0] == 11 || result[0] == 10 )
								{
									jQuery('#shop_chkpin_loader1').hide(); 
									
									jQuery('#cookie_pin_shop').val( pin_code );
									
									jQuery('.phoen_chk_pncde_anmt_div').addClass(woocommerce_pincode_params.exit);
												
									setTimeout(function(){
										
										jQuery('.pho-pincode-popup-body-shop').hide();
										
										jQuery('.phoen_chk_pncde_anmt_div').removeClass(woocommerce_pincode_params.exit);
								
									}, 1000);
									
									
									//console.log(jQuery(".ajax_add_to_cart[data-product_id='"+product_id+"']"));
									
									// jQuery(".ajax_add_to_cart[data-product_id='"+product_id+"']").trigger("click");
									
									//jQuery('#cookie_pin_shop').val( '' );
					 
									jQuery('#popup_pro_id_shop').val( '' );
									
									jQuery('#enter_pincode_shop').val('');
									
								}
								else
								{
									
									jQuery('#shop_chkpin_loader1').hide(); 
									
									jQuery('#error_pin_shop').show();
									 
									jQuery('#enter_pincode_shop').val('');
									
									jQuery('#error_pin_b_shop').hide();
									
									jQuery('.pho-para p').text(unsuccess_msg);
									
									if(link_invalid_pin==1 && this_length === 0){
										
										jQuery('.pho-para p').after('<a href="'+unsuccess_link+'">'+unsuccess_link_text+'</a>');
										
									}
									
								}
								
							
							},
							error: function (jqXHR, exception) {
								var msg = '';
								if (jqXHR.status === 0) {
									msg = 'Not connect.\n Verify Network.';
								} else if (jqXHR.status == 404) {
									msg = 'Requested page not found. [404]';
								} else if (jqXHR.status == 500) {
									msg = 'Internal Server Error [500].';
								} else if (exception === 'parsererror') {
									msg = 'Requested JSON parse failed.';
								} else if (exception === 'timeout') {
									msg = 'Time out error.';
								} else if (exception === 'abort') {
									msg = 'Ajax request aborted.';
								} else {
									msg = 'Uncaught Error.\n' + jqXHR.responseText;
								}
								
								console.log(msg);
								
							},
							
					});
		
				}
					
				event.preventDefault();
					
			});

			
			jQuery(".pho-close_btn_shop").click( function(e) {
				 
				// jQuery('.pho-pincode-popup-body-shop').fadeOut();
			   
			});
			
			jQuery('.phoen_city_1 .city_list').select2();
			jQuery('#phoen_area_select_1 .area_list').select2();
			jQuery('#phoen_state_list_shop').select2();
			/* 	jQuery("#pincode_field_id").keypress(function(event) {
				event.preventDefault();
			}); */
			jQuery("#pincode_field_id").keypress(function(event) {
				var code = event.keyCode || event.which;

				// 13 = key code of enter
				if (code == 13) {
					event.preventDefault();
				}
			});
			
	});

	(function($){
		
		$(window).load(function(){
			
			if(usejs == 1)
			{
				
				$.mCustomScrollbar.defaults.theme="light-2";
				
				$(".delivery_help_text").mCustomScrollbar();
				
				$(".cash_on_delivery_help_text").mCustomScrollbar();
				
			}

			var section = $('.wc-delivery-time-response .delivery-info');
			
			var section2 = $('.wc-delivery-time-response .pin_div');
			
				var dwidth = section.width();
				
				var dwidth2 = section2.width();
				
				if(dwidth < 420 || dwidth2 < 420)	{
					
					
					section.addClass('full');
					
					section2.addClass('full');
					
				}		
		});
		
		$(window).resize(function(){
			
			var section = $('.wc-delivery-time-response .delivery-info');
			
			var section2 = $('.wc-delivery-time-response .pin_div');
			
			if($(window).width() < 479)
			{
			
				section.addClass('full');
					
				section2.addClass('full');
					
			}
			else
			{
				section.removeClass('full');
				
				section2.removeClass('full');
				
			}
			
		});	

	})(jQuery);
// Restricts input for each element in the set of matched elements to the given inputFilter.
(function($) {
  $.fn.inputFilter = function(inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  };
}(jQuery));

jQuery("#billing_postcode").inputFilter(function(value) {
  return /^-?\d*$/.test(value); });