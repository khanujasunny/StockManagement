import * as $ from 'jquery';

// Map [Enter] key to work like the [Tab] key
// Daniel P. Clark 2014
// MIT License

// Catch the keydown for the entire document
$(document).on('keydown', function (e: any) {

  // Set self as the current item in focus
  const self = $(':focus'),
    // Set the form by the current item in focus
    form = self.parents('form:eq(0)');

  // Array of Indexable/Tab-able items
  const focusable: any = form.find('input,a,select,button,textarea').filter(':visible');

  function enterKey() {
    if (e.which === 13) { // [Enter] key

      // If not a regular hyperlink/button/textarea
      if ($.inArray(self, focusable) && (!self.is('a')) && (!self.is('button')) && (!self.is('input[type="submit"]'))) {
        // Then prevent the default [Enter] key behavior from submitting the form
        if (self.is('textarea') && !e.shiftKey) {
          return false;
        }

        e.preventDefault();
        if (self.is('textarea') && e.shiftKey) {
          focusable.eq(focusable.index(self) + 1).focus();
        } else {
          focusable.eq(focusable.index(self) + (e.shiftKey ? -1 : 1)).focus();
        }
        return false;
      } // Otherwise follow the link/button as by design, or put new line in textarea

    }
  }
  // We need to capture the [Shift] key and check the [Enter] key either way.
  if (e.shiftKey) { enterKey(); } else { enterKey(); }
});
