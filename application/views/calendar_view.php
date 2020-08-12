<html>
    <head>
        <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/calendar.css">
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
        <script src="<?php echo base_url(); ?>assets/js/calendar.js"></script>
        <script type="text/javascript">
        
                // $(document).ready(function(){
                //         var tt = document.getElementById('test');     
                // });
                $(function () {
                const JANURARY = 1
                const DECEMBER = 12
                var date = new Date()
                var d = date.getDate(),
                        m = date.getMonth(),
                        y = date.getFullYear()

                $('#calendar').fullCalendar({
                        header    : {
                                left  : 'prev,next today',
                                center: 'title',
                                right : 'month,agendaWeek,agendaDay'
                        },
                        buttonText: {
                                today: 'today',
                                month: 'month',
                                week : 'week',
                                day  : 'day'
                        },
                        
                        editable  : true,
                        droppable : true, // this allows things to be dropped onto the calendar !!!
                        drop      : function (date, allDay) { // this function is called when something is dropped

                                // retrieve the dropped element's stored Event Object
                                var originalEventObject = $(this).data('eventObject')

                                // we need to copy it, so that multiple events don't have a reference to the same object
                                var copiedEventObject = $.extend({}, originalEventObject)

                                // assign it the date that was reported
                                copiedEventObject.start           = date
                                copiedEventObject.allDay          = allDay
                                copiedEventObject.backgroundColor = $(this).css('background-color')
                                copiedEventObject.borderColor     = $(this).css('border-color')

                                // render the event on the calendar
                                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                                $('#calendar').fullCalendar('renderEvent', copiedEventObject, true)

                                // is the "remove after drop" checkbox checked?
                                if ($('#drop-remove').is(':checked')) {
                                        // if so, remove the element from the "Draggable Events" list
                                        $(this).remove()
                                }

                        }
                })
                function arrow_listener(event){
                        switch(event.target.id){
                                case 'prev_year':
                                        year = Number(document.getElementById('year').title)-1;
                                        month = Number(document.getElementById('month').title);
                                        break;
                                case 'next_year':
                                        year = Number(document.getElementById('year').title)+1;
                                        month = Number(document.getElementById('month').title);
                                        break;
                                case 'prev_month':
                                        month = Number(document.getElementById('month').title);
                                        if(month==JANURARY)
                                                return false;
                                        year = Number(document.getElementById('year').title);
                                        month -= 1;
                                        break; 
                                case 'next_month':
                                        month = Number(document.getElementById('month').title);
                                        if(month==DECEMBER)
                                                return false;
                                        else
                                                month += 1;
                                        year = Number(document.getElementById('year').title);
                                        break;
                        }
                        window.location.href = 'Calendar/update_calendar/'+year+'/'+month;
                }

                function show_plans(event){
                        var year = document.getElementById('year').title;
                        var month = document.getElementById('month').title; 
                        var day = event.target.getElementsByTagName('input')[0].value;
                        var date = year+"-"+month+"-"+day;
                        window.open("Plan/show_with_date/"+date,"","width=400,height=400, left=100, top=50");
                }
             
                document.getElementById('prev_year').addEventListener('click', arrow_listener);
                document.getElementById('prev_month').addEventListener('click', arrow_listener);
                document.getElementById('next_year').addEventListener('click', arrow_listener);
                document.getElementById('next_month').addEventListener('click', arrow_listener);
                var userSelection = document.getElementsByClassName('dayItem');
                for(var i = 0; i < userSelection.length; i++) {
                                userSelection[i].addEventListener('click', show_plans);
                }
        
        })
        </script>
            <title>My Blog</title>
    </head>
    <body>
        <!-- <button type="button" class="btn btn-success">Success</button>
        <button class="btn btn-default" type="submit">Button</button> -->
        <div class="col-md-9">
                <!-- THE CALENDAR -->
                <div id="calendar" class="fc fc-unthemed fc-ltr"></div>
        </div>
        <div class="calDate">
                <div class="calYear">
                        <a id="prev_year" href="#"><</a>
                        <p id="year" title="<?php echo $THIS_YEAR ?>"><?php echo $THIS_YEAR?></p> 
                        <a id="next_year" href="#">></a>
                </div>
                <div class="calMonth">
                        <a id="prev_month" href="#"><</a> 
                        <p id="month" title="<?php echo $THIS_MONTH ?>"> <?php echo $THIS_MONTH?></p> 
                        <a id="next_month" href="#">></a>
                </div>
        <div>
        <td class="fc-header-left">
	        <span class="fc-header-title"><h2>August 2020</h2>
	        </span>
        </td>
                <table>
                        <thead>
                                <tr>
                                        <th>일</th>
                                        <th>월</th>
                                        <th>화</th>
                                        <th>수</th>
                                        <th>목</th>
                                        <th>금</th>
                                        <th>토</th>
                                </tr>
                        </thead>

                        </tbody>
                                <?php while($TMP_NUM <= $LINE_NUM){ ?>
                                        <tr>
                                                <?php for($i=($TMP_NUM-1)*7 ; $i<$TMP_NUM*7 ; $i++){?>
                                                        <td class="dayItem"><input type=hidden value="<?php echo $MONTH_ARR[$i] ?>"></input><?php echo $MONTH_ARR[$i]?>
                                                                <div class="dayContent">
                                                                        <?php foreach($PLANS_LIST as $pl){                                                            
                                                                                if($pl->date===date('Y-m-d', mktime(0,0,0,$THIS_MONTH, $MONTH_ARR[$i], $THIS_YEAR))){
                                                                                        echo '<li>'.$pl->title.'</li>';
                                                                                }
                                                                        }?>
                                                                </div>
                                                        </td>
                                                <?php }?>
                                        </tr>
                                        <?php $TMP_NUM++;?>
                                <?php }?>
                                
                        </tbody>
                </table>
        </div>
    </body>
</html>