'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 120,
  deleteSpeed: 50,
  waitUntilVisible: true,
})

  .delete()

  .type('Back-End Engineer') 
  .pause(1000)
  .delete() 
  .type('Cloud Engineer')
  .pause(1000)
  .delete()
  .go();