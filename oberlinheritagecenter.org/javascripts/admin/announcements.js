$(function() {
  if ($("img#photo").length) {
    $("img#photo").imgAreaSelect({
        keys       : true,
        show       : true,
        persistent : true,
        resizable  : false,
        maxHeight  : 200,
        maxWidth   : 200,
        minHeight  : 200,
        minWidth   : 200,
        x1 : 0,
        y1 : 0,
        x2 : 200,
        y2 : 200,
        onSelectEnd: function (img, selection) {
             $("#x1").val(selection.x1);
             $("#y1").val(selection.y1);
        }
    });
  }
});
