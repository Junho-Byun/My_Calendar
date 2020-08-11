<html>
    <head>
        <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/plan.css">
        <script type="text/javascript" src="http://code.jquery.com/jquery-1.4.4.min.js"></script>
        <script type="text/javascript">
        </script>
    </head>
    <title>Document</title>
    <body>
        <?php foreach($PLANS_LIST as $pl){?>
            <div class="rowPlan">
                <input type="hidden" id="<?php echo $pl->id?>">
                <div class="c1">
                    <li><?php echo $pl->title?></li>
                        <ul><?php echo $pl->description?></ul>
                </div>
                <div class="c2">
                    <?php echo $pl->date?>
                </div>
                <div class="c3">
                    <input type="button" value="수정" onClick="location.href='plan/edit/<?php echo $pl->id?>'"></input>
                    <input type="button" value="삭제" onClick="location.href='plan/delete/<?php echo $pl->id?>'"></input>
                </div>
            </div>
        <?php } ?>

        <input id="addBtn" type="button" value="추가" onClick="location.href='plan/new'"/>
    </body>
</html>