<html>
<head>
        <title>New Plan</title>
</head>
<body>
        <form method=POST action=/plan/put>
            <input type="hidden" name="id" value="<?php echo $PLAN[0]->id ?>" />
            <div>
                    일정 제목 <br>
                    <input name="title" type="text" value="<?php echo $PLAN[0]->title?>"/>
            </div>
            <div>
                    일정 내용 <br>
                    <textarea name="description"><?php echo $PLAN[0]->description?></textarea>
            </div>
            <div>
                    일정 날짜 </br>
                    <input name='date' type="date" value="<?php echo $PLAN[0]->date?>" >
            </div>
            <div>
                    <input type=submit value='수정'>
            </div>
        </form>
        
        
</body>
</html>