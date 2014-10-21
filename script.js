newLine();

$('.list').on('click', '.list_item_wrapper:not(.edit)', function() {
  $(this).addClass('edit');
  var text = $(this).find('.list_item_text');
  var list_input = $('<input>').addClass('list_item_input').appendTo(this).focus();
  if (!text.hasClass('add_line')) {
    list_input.val(text.text());
  }
});

$('.list').on('keydown focusout', '.list_item_input', function(e) {
  var $this = $(this);
  var li = $this.parents('.list_item_wrapper');
  if(e.which == 13 || e.type == 'focusout') {  
    if ($this.val() != 0){
      li.find('.list_item_text').text($this.val()).removeClass('add_line');
      li.removeClass('edit');
      $this.remove();
    }
    else
      li.remove();
    detectNewLine();
  }
});

function detectNewLine() {
  if (!$('.list').find('.add_line').length)
    newLine();
}

function newLine() {
  var list = $('.list');
  var list_item = $('<li>').addClass('list_item list_item_wrapper').appendTo(list);
  var list_text = $('<span>').addClass('list_item_text add_line').appendTo(list_item).text('Add a new item');
};
