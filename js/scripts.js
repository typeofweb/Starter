/**
 * Self executing function taking jQuery as a parameter.
 * Creates private-scope. Also if jQuery is run in noConflict() mode
 * the $ sign can be used inside this function.
 */
(function ($) {
    var Website = {
      
      run: function(){
        this.foo();
      },
      
      foo: function(){
        // your code
      }
      
    };
    
    $(function(){
      
      Website.run();
      
      /**
       * Optional: export Website to the global namespace so that it's accessible
       * from other parts of the code
       */
      // window.Website = window.Website || Website;
      
    });
})(jQuery);