<html>
<head>

        <title>My Home</title>

</head>
<body>
        <table>
            <tbody>
                <?php echo '<tr>
                                <td>글쓴이</td>
                                <td>'.$POST_ITEM[0]->name.'</td>
                            </tr>
                            <tr>
                                <td>내용</td>
                                <td>'.$POST_ITEM[0]->contents.'</td>
                            </tr>' 
                ?>
            </tbody>
        </table>

        <button>
</html>