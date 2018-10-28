/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('url(s) are defined', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           });
         });

         it('names are defined', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           });
         });
    });


      describe("The menu", function() {

         it('element are hidden by default', function() {
           var body = document.querySelector("body");
           expect(body.classList.contains('menu-hidden')).toBe(true);
         });

         it('toggles on click', function() {
           menuIcon = $('.menu-icon-link');
           var body = document.querySelector("body");
           expect(body.classList.contains('menu-hidden')).toBe(true);
           menuIcon.click();
           expect(body.classList.contains('menu-hidden')).toBe(false);
         });
      });

      describe("Initial Entries", function() {
        var container = $('.feed');
        beforeEach(function(done){
              loadFeed(0, function(){
                done();
              });
        });

        it("should grab initial Entry", function(done){
              expect(container.html()).not.toEqual("");
              done();
        });

      });


        describe("New Feed Selection", function() {
                let container = $('.feed');
                let oldcontent;
            beforeEach(function(done){
              loadFeed(0);
              oldcontent = container.html();
              loadFeed(1, function(){
                done();
              });
                  });

            it("should make content change", function(done){
               let newcontent = container.html();
                expect(oldcontent == newcontent).toBe(false);
                  done();
            });
          });


}());
