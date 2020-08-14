<html>
    <head>
        <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/calendar.css">
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
        <script src="<?php echo base_url(); ?>assets/js/calendar.js"></script>
        <script type="text/javascript">
        $(function () {
                $('#calendar').myCalendar({
                    buttonText: {today: "today", month: "month", week: "week", day: "day"},
                    droppable: true,
                    editable: true,
                    header: {left: "prev,next today", center: "title", right: "month,agendaWeek,agendaDay"}}
                );
        
        })
        </script>       

            <title>My Blog</title>
    </head>
    <body>
        <div id="calendar"></div>
    </body>
</html>