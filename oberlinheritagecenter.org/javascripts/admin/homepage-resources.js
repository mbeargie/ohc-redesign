$(function() {
  $("#edit").submit(function() {
    if ($("#delete").is(":checked")) {
      return confirm("Are you sure you want to delete this homepage resource?");
    }
    
    return true;
  });
  
  if ($("#displays_on, #archives_on").length) {
    $("#displays_on, #archives_on").datepick({dateFormat: "m/d/yy"});
  }
  
 if ($("#sortable").length) {
         $("#sortable").sortable({
          axis: "y",
          cursor: "move",
          update: function(event, ui) {
            $.post("/cgi-bin/admin/homepage-resources.cgi", "action=finish_sort&" + $(this).sortable("serialize", ({key: "key"})));
          }
        });
        }

});
