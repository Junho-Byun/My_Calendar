<html>
<head>
        <title>New Plan</title>
</head>
<body>
        <form method=POST action=/plan/create>
            <div>
                    일정 제목 <br>
                    <input name="title" type="text"/>
            </div>
            <div>
                    일정 내용 <br>
                    <textarea name="description"></textarea>
            </div>
            <div>
                    일정 날짜 </br>
                    <input name='date' type="date" >
            </div>
            <div>
                    <input type=submit value='생성'>
            </div>
        </form>
        
        
</body>
</html>