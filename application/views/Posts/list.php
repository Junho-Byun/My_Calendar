<html>
<head>
        <script type="text/javascript">
                function reply_click(id){
                        window.open("/post/show/"+id,"","width=400,height=400, left=100, top=50");
                }
        </script>
        <title>My Home</title>

</head>
<body>
        <table>
                <thead>
                        <tr>
                                <th>번호</th>
                                <th>내용</th>
                                <th>날짜</th>
                                <th>글쓴이</th>
                        </tr>
                </thead>
                <tbody>
                        <?php foreach($LIST as $lt){
                                echo '<tr>
                                        <td>'.$lt->id.'</td>
                                        <td onClick="reply_click(' .$lt->id. ')">'.$lt->contents.'</a></td>
                                        <td>'.$lt->date.'</td>
                                        <td>'.$lt->name.'</td>
                                        </tr>'
                        ?> 
                        <?php
                        }
                        ?>
                </tbody>
        </table>

        <a href="/Post/new">글쓰기</a>
</body>
</html>