(function(){

    var $fireworks_canvas = $('#fireworks-canvas');
  
    var canvas_width  = $(window).width();
    var canvas_height = $(window).height();
  
  
    var CONFIG = {
        mark_number: 1,
        marker_width: 175,
        animation_speed: 100
      }
  
    // This makes it explode using CSS transitions
    // You have to give it the delay otherwise it doesn't know that it's transitioning to anything
    var popMarker = function(mark_number){
  
      $('#marker_' + mark_number).addClass('expand-marker')
    }
  
  
    var addMarker = function(mark_number){
      var starting_x = getRandom(0, canvas_width - 250); // It has to be minus 250 so that markers don't appear too close to the edge and create a side scroller
      var end_y      = getRandom(canvas_height/2, 0);
      var hex = Math.floor(Math.random()*16777215).toString(16);
  
      var circle = '<div id="marker_'+mark_number+'" style="top:'+ (canvas_height - 10)+'px;left:'+starting_x+'px;background-color:#'+hex+'" class="marker"></div>';
      $fireworks_canvas.append(circle);
  
      $('#marker_' + mark_number).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
        $(this).remove();
      });
  
  
      _.delay(popMarker, 850, mark_number)
      $('#marker_'+mark_number).animate({
        'top': end_y + 'px'
      }, 1250, 'easeOutQuad', function() {
          // popMarker(mark_number)
      });
    }
  
    function playTimer(){
      window.time_var = setInterval(function(){
        CONFIG.mark_number++;
        addMarker(CONFIG.mark_number);
      }, CONFIG.animation_speed);
    }
  
    function stopTimer(){
      var end_int = clearInterval(time_var);
    }
  
    $(document).click(function(){
        playTimer();
    })
  
  
    function launchFireworks(){
      var starting_x = getRandom(0, canvas_width);
      var end_y      = getRandom(canvas_height/2, canvas_height);
  
      var rocket = '<div class="rocket"></div>';
      $fireworks_canvas.append(rocket);
  
    }
  
    function getRandom (min, max) {
      return Math.random() * (max - min) + min;
    }
  
    function bindEvents(){
      $('#celebrate-btn').click(function(){
        $('#celebrate-btn').effect( "explode", {pieces: 9}, 350 );
        $('.card-message').animate({'opacity':0});
        playTimer();
      });
    }
  
    function loadPage(msg){
      $('#text-canvas').hide().html(msg).fadeIn('slow');
      bindEvents();
    }
  
    var text_msg = $('#card-msg-templ').html();
    _.delay(loadPage, 3250, text_msg)
  
  }).call(this); 