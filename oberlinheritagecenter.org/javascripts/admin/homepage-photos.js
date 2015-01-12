$(function() {
  $("#edit").submit(function() {
    if ($("#delete").is(":checked")) {
      return confirm("Are you sure you want to delete this homepage photo?");
    }
    
    return true;
  });
  
  if ($("#displays_on, #archives_on").length) {
    $("#displays_on, #archives_on").datepick({dateFormat: "m/d/yy"});
  }
  
  if ($("img#photo").length) {
    $("img#photo").imgAreaSelect({
        keys       : true,
        show       : true,
        persistent : true,
        resizable  : false,
        maxHeight  : 500,
        maxWidth   : 849,
        minHeight  : 500,
        minWidth   : 849,
        x1 : 0,
        y1 : 0,
        x2 : 849,
        y2 : 500,
        onSelectEnd: function (img, selection) {
             $("#x1").val(selection.x1);
             $("#y1").val(selection.y1);
        }
    });
  }
  
  if ($("#section_id").length) {
    $("#section_id").change(function() {
      $form = $(this).closest("form");
    
      $.get($form.attr("action"), $form.serialize(), function(data) {
        $("#photos").html(data);
      
        $("#sortable").sortable({
          axis: "y",
          cursor: "move",
          update: function(event, ui) {
            $.post("/cgi-bin/admin/homepage-photos.cgi", "action=finish_sort&section_id=" + $("#section_id").val() + "&" + $(this).sortable("serialize", ({key: "key"})));
          }
        });
      });
    });
    $("#section_id").trigger("change");
  }
});
