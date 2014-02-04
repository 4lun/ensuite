(function(){
	$(function(){

		highlight_unsuitable();
		saved_searches_link();
		hq_images_thumbs();
		verbose_cost();


		function highlight_unsuitable() {
			var target = $('.listing_context .tooltip > a, .listing_more');

			target.each(function(){
                var text        = $.trim($(this).text()),
                    result      = $(this).closest('.listing_result');
				if(text == "Unsuitable" || text == "Just missed it!") {
					result.addClass('ext-ensuite-disabled');

					if(text == "Unsuitable") result.addClass('ext-ensuite-unsuitable');
					if(text == "Just missed it!") result.addClass('ext-ensuite-gone');
				}
				console.log(text);
			});
		}

		function saved_searches_link() {
			var nav = $('.primary_nav');

			nav.find('>li').eq(-3).before('<li class="nav_level1_li nav_savedsearches"><a class="nav_level1_a" href="/flatshare/savesearch.pl"><strong>Saved Searches</strong></a></li>');

		}

		function hq_images_thumbs() {
			var images = $('#additional_photo_list li a.img');

			images.each(function(){
                var image       = $(this).find('img'),
                    src         = $(this).attr('href');
				image.attr('src', src);
			});
		}

		function verbose_cost() {
			var prices = $('.listing_row .listing_price');

			prices.each(function(){
                var price       = $(this),
                    text        = price.text().replace(/\s/g,''),
                    value       = parseInt(text.replace(/^\D+/g,''), 10),
                    isPW        = text.indexOf('pw') > -1,
                    pw          = '',
                    pcm         = '',
                    output      = '';

                    console.log(text, value);

					if(isPW) {
                        pw      = value;
                        pcm     = Math.round((pw * 52) / 12);
					} else {
                        pcm     = value;
                        pw      = Math.round((pcm * 12) / 52);
					}

					output = '£' + pcm + 'pcm / £' + pw + 'pw';
					price.text(output);

			});
		}
	});
})();