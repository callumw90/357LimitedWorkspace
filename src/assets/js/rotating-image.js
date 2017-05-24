$(window).load(function() { //start after HTML, images have loaded
 
    var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 0;
 
            //interval between items (in milliseconds)
            var itemInterval = 6000;
 
            //cross-fade time (in milliseconds)
            var fadeTime = 2500;
 
            //count number of items
            var numberOfItems = $('.rotating-image').length;
 
            //set current item
            var currentItem = 0;
 
            //show first item
            $('.rotating-image').eq(currentItem).fadeIn(initialFadeIn);
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-image').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-image').eq(currentItem).fadeIn(fadeTime);
 
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();
 
});